import MerchantHeader from '../../components/merchant/MerchantHeader';
import { useState, useMemo } from 'react';
import merchantCoupons from '../../data/merchantCoupons';

export default function MerchantHome() {
  const today = new Date();
  // Primer día del mes actual
  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
  // Último día del mes +3
  const lastDay = new Date(today.getFullYear(), today.getMonth() + 4, 0);
  // Formatear a YYYY-MM-DD
  const formatDate = (date) => date.toISOString().split('T')[0];

  const firstDayOfMonth = formatDate(firstDay);
  const threeMonthsLater = formatDate(lastDay);

  const [dateFrom, setDateFrom] = useState(firstDayOfMonth);
  const [dateTo, setDateTo] = useState(threeMonthsLater);

  const filteredCoupons = useMemo(() => {
    return merchantCoupons.filter((coupon) => {
      const expireDate = new Date(coupon.expiresAt);
      const fromDate = dateFrom ? new Date(`${dateFrom}T00:00:00`) : null;
      const toDate = dateTo ? new Date(`${dateTo}T23:59:59`) : null;

      const matchesFrom = fromDate ? expireDate >= fromDate : true;
      const matchesTo = toDate ? expireDate <= toDate : true;

      return matchesFrom && matchesTo;
    });
  }, [dateFrom, dateTo]);

  const activeCoupons = filteredCoupons.filter(
    (coupon) => coupon.status === 'activo'
  ).length;

  const redeemedCoupons = filteredCoupons.reduce(
    (total, coupon) => total + coupon.redeemedCount,
    0
  );

  const pendingCoupons = filteredCoupons.reduce(
    (total, coupon) => total + coupon.pendingRedeemCount,
    0
  );

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <MerchantHeader />

      <div className="w-full px-4 py-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <h1 className="text-3xl font-extrabold text-slate-900">
            Proveedor
          </h1>

          <div className="flex flex-col gap-3 sm:flex-row lg:w-auto">
            <input
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              className="w-full rounded-2xl border px-4 py-2.5 text-sm sm:w-44"
            />

            <input
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className="w-full rounded-2xl border px-4 py-2.5 text-sm sm:w-44"
            />
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-500">
              Cupones activos
            </p>
            <h2 className="mt-3 text-4xl font-extrabold text-[#2eb300]">
              {activeCoupons}
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-500">
              Cupones canjeados con éxito
            </p>
            <h2 className="mt-3 text-4xl font-extrabold text-slate-900">
              {redeemedCoupons}
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-500">
              Cupones pendientes de canjear
            </p>
            <h2 className="mt-3 text-4xl font-extrabold text-amber-500">
              {pendingCoupons}
            </h2>
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
          <h3 className="text-xl font-extrabold text-slate-900">
            Cupones recientes
          </h3>

          <div className="mt-4 overflow-hidden rounded-3xl border border-slate-200">
            <table className="w-full text-left">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3">Cupón</th>
                  <th className="px-4 py-3">Estado</th>
                  <th className="px-4 py-3">Canjeados</th>
                  <th className="px-4 py-3">Pendientes</th>
                  <th className="px-4 py-3">Vence</th>
                </tr>
              </thead>

              <tbody>
                {filteredCoupons.map((coupon) => (
                  <tr key={coupon.id} className="border-t">
                    <td className="px-4 py-3">{coupon.title}</td>
                    <td className="px-4 py-3 capitalize">{coupon.status}</td>
                    <td className="px-4 py-3">{coupon.redeemedCount}</td>
                    <td className="px-4 py-3">{coupon.pendingRedeemCount}</td>
                    <td className="px-4 py-3">
                      {new Date(coupon.expiresAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
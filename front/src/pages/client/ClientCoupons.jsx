import { useMemo, useState } from 'react';
import ClientHeader from '../../components/client/ClientHeader';
import CouponQrModal from '../../components/client/CouponQrModal';
import clientCoupons from '../../data/clientCoupons';

export default function ClientCoupons() {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [status, setStatus] = useState('todos');
  const [selectedCoupon, setSelectedCoupon] = useState(null);

  const filteredCoupons = useMemo(() => {
    return clientCoupons.filter((coupon) => {
      const matchesStatus =
        status === 'todos' ? true : coupon.status === status;

      const purchaseDate = new Date(coupon.purchaseDate);
      const matchesFrom = dateFrom ? purchaseDate >= new Date(dateFrom) : true;
      const matchesTo = dateTo ? purchaseDate <= new Date(dateTo) : true;

      return matchesStatus && matchesFrom && matchesTo;
    });
  }, [dateFrom, dateTo, status]);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <ClientHeader />

      <div className="w-full px-4 py-6">
        <div className="rounded-3xl bg-white p-6 shadow-sm">

          <div className="grid gap-4 md:grid-cols-4">
            <input
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              className="rounded-2xl border px-4 py-3"
            />

            <input
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className="rounded-2xl border px-4 py-3"
            />

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="rounded-2xl border px-4 py-3"
            >
              <option value="todos">Todos</option>
              <option value="vigente">Vigentes</option>
              <option value="no_vigente">No vigentes</option>
            </select>
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200">
            <table className="w-full text-left">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3">Cupón</th>
                  <th className="px-4 py-3">Fecha</th>
                  <th className="px-4 py-3">Estado</th>
                  <th className="px-4 py-3">Precio</th>
                  <th className="px-4 py-3">Acción</th>
                </tr>
              </thead>

              <tbody>
                {filteredCoupons.map((coupon) => (
                  <tr key={coupon.id} className="border-t">
                    <td className="px-4 py-3">{coupon.title}</td>
                    <td className="px-4 py-3">{coupon.purchaseDate}</td>
                    <td className="px-4 py-3">
                      {coupon.status === 'vigente'
                        ? 'Vigente'
                        : 'No vigente'}
                    </td>
                    <td className="px-4 py-3">{coupon.price}</td>

                    <td className="px-4 py-3">
                      {coupon.status === 'vigente' ? (
                        <button
                          onClick={() => setSelectedCoupon(coupon)}
                          className="cursor-pointer rounded-2xl bg-[#2eb300] px-4 py-2 font-semibold text-white transition hover:bg-[#249900]"
                        >
                          Ver QR
                        </button>
                      ) : (
                        <span className="text-slate-400">
                          No disponible
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

        </div>
      </div>

      <CouponQrModal
        coupon={selectedCoupon}
        onClose={() => setSelectedCoupon(null)}
      />
    </div>
  );
}
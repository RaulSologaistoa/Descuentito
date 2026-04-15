import { useState } from 'react';
import MerchantHeader from '../../components/merchant/MerchantHeader';
import MerchantCouponForm from '../../components/merchant/MerchantCouponForm';
import merchantCoupons from '../../data/merchantCoupons';

export default function MerchantCoupons() {
  const [coupons] = useState(merchantCoupons);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <MerchantHeader />

      <div className="w-full px-4 py-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">
              Mantenimiento de cupones
            </h1>
          </div>

          <button
            onClick={() => setShowForm(true)}
            className="cursor-pointer rounded-2xl bg-[#2eb300] px-6 py-3 font-bold text-white transition hover:bg-[#249900]"
          >
            Nuevo cupón
          </button>
        </div>

        <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white">
          <table className="w-full text-left">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3">Cupón</th>
                <th className="px-4 py-3">Precio normal</th>
                <th className="px-4 py-3">Precio oferta</th>
                <th className="px-4 py-3">Ubicación</th>
                <th className="px-4 py-3">Estado</th>
                <th className="px-4 py-3">Vence</th>
                <th className="px-4 py-3">Acción</th>
              </tr>
            </thead>
            <tbody>
              {coupons.map((coupon) => (
                <tr key={coupon.id} className="border-t">
                  <td className="px-4 py-3">{coupon.title}</td>
                  <td className="px-4 py-3">{coupon.oldPrice}</td>
                  <td className="px-4 py-3">{coupon.price}</td>
                  <td className="px-4 py-3">{coupon.location}</td>
                  <td className="px-4 py-3 capitalize">{coupon.status}</td>
                  <td className="px-4 py-3">
                    {new Date(coupon.expiresAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">
                    <button className="cursor-pointer rounded-2xl border border-slate-300 px-4 py-2 font-semibold text-slate-700 transition hover:bg-slate-50">
                      Editar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-extrabold text-slate-900">
                Nuevo cupón
              </h2>

              <button
                onClick={() => setShowForm(false)}
                className="cursor-pointer rounded-2xl border border-slate-300 px-4 py-2 font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Cerrar
              </button>
            </div>

            <MerchantCouponForm />
          </div>
        </div>
      )}
    </div>
  );
}
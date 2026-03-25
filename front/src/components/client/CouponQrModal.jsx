import { QRCodeSVG } from 'qrcode.react';

export default function CouponQrModal({ coupon, onClose }) {
  if (!coupon) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-extrabold text-slate-900">
            Código del cupón
          </h2>

          <button
            onClick={onClose}
            className="cursor-pointer text-slate-500"
          >
            ✕
          </button>
        </div>

        <p className="mt-3 text-sm text-slate-500">
          Este código será usado por el comercio para validar el cupón.
        </p>

        <div className="mt-6 rounded-3xl border border-dashed border-slate-300 p-8 text-center">
          <div className="mx-auto inline-flex rounded-2xl bg-white p-4">
            <QRCodeSVG
              value={`http://localhost:5173/coupon/${coupon.id}`}
              size={200}
            />
          </div>

          <p className="mt-4 text-lg font-bold text-slate-900">
            {coupon.code}
          </p>
        </div>
      </div>
    </div>
  );
}
import { useParams } from "react-router-dom";

export default function CouponRedeem() {
  const { id } = useParams();

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-sm text-center">
        <h1 className="text-2xl font-extrabold text-slate-900">
          Validar cupón
        </h1>

        <p className="mt-3 text-slate-600">
          ID del cupón
        </p>

        <p className="mt-2 text-lg font-bold text-[#2eb300]">
          {id}
        </p>

        <button className="mt-6 w-full rounded-2xl bg-[#2eb300] py-3 font-bold text-white">
          Canjear cupón
        </button>
      </div>
    </div>
  );
}
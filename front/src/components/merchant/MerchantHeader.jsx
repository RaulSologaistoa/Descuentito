import { Link, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import logo from '../../assets/logo.png';

export default function MerchantHeader() {
  const navigate = useNavigate();

  const authUser = JSON.parse(localStorage.getItem('authUser') || 'null');
  const firstName =
    authUser?.firstName ||
    authUser?.name ||
    authUser?.nombre ||
    'Proveedor';

  const handleLogout = () => {
    localStorage.removeItem('authUser');
    navigate('/');
    window.location.reload();
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="flex w-full items-center justify-between px-4 py-4 md:px-6">
        <Link to="/" className="flex h-14 items-center">
          <img
            src={logo}
            alt="Descuentito"
            className="h-12 w-auto object-contain"
          />
        </Link>

        <div className="group relative">
          <button className="flex cursor-pointer items-center gap-2 rounded-2xl border border-slate-300 bg-white px-4 py-2 font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
            Hola, {firstName} ☰
          </button>

          <div className="invisible absolute right-0 top-14 w-72 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
            <Link
              to="/merchant/home"
              className="block w-full rounded-xl px-4 py-3 text-sm text-slate-700 transition hover:bg-[#f1faed]"
            >
              Inicio
            </Link>

            <Link
              to="/merchant/coupons"
              className="block w-full rounded-xl px-4 py-3 text-sm text-slate-700 transition hover:bg-[#f1faed]"
            >
              Mantenimiento de cupones
            </Link>

            <button
              onClick={handleLogout}
              className="block w-full cursor-pointer rounded-xl px-4 py-3 text-left text-sm text-red-600 transition hover:bg-red-50"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  {
    label: 'Inicio',
    path: '/client/home'
  },
  {
    label: 'Mi perfil',
    path: '/client/settings'
  },
  {
    label: 'Mis cupones',
    path: '/client/coupons'
  }
];

export default function ClientSidebar() {
  const location = useLocation();

  return (
    <aside className="w-full rounded-3xl bg-white p-5 shadow-sm">
      <div className="border-b border-slate-200 pb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Panel cliente
        </p>
        <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
          Mi cuenta
        </h2>
      </div>

      <nav className="mt-5 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`block rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                isActive
                  ? 'bg-[#eef9e8] text-[#2eb300]'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-6 border-t border-slate-200 pt-5">
        <button
          type="button"
          className="w-full cursor-pointer rounded-2xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
}
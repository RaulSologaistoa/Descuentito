import { Link, useLocation, useNavigate } from 'react-router-dom';

const menuItems = [
  {
    label: 'Inicio',
    path: '/backoffice/dashboard',
  },
  {
    label: 'Roles',
    path: '/backoffice/roles',
  },
  {
    label: 'Usuarios',
    path: '/backoffice/users',
  },
  {
    label: 'Reportes',
    path: '/backoffice/reports',
  },
];

export default function BackofficeSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/backoffice/login');
  };

  return (
    <aside className="w-full rounded-3xl bg-white p-5 shadow-sm">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
          Men&uacute;
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
          onClick={handleLogout}
          className="w-full cursor-pointer rounded-2xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
}
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="grid min-h-screen lg:grid-cols-2">
        <section className="hidden lg:flex items-center justify-center bg-[#2eb300] p-10">
          <div className="max-w-md text-white">
            <h1 className="text-4xl font-extrabold leading-tight">
              Bienvenido a Descuentito
            </h1>
            <p className="mt-4 text-lg text-white/90">
              Ingresa para comprar ofertas o administrar promociones de tu comercio.
            </p>
          </div>
        </section>

        <section className="flex items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900">Ingresar</h2>
                <p className="mt-2 text-slate-500">
                  Accede con tu correo y contraseña
                </p>
              </div>

              <Link
                to="/"
                className="text-sm font-semibold text-slate-500 transition hover:text-[#2eb300] hover:-translate-x-1"
              >
                ← Volver
              </Link>
            </div>

            <form className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  placeholder="correo@ejemplo.com"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#2eb300]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Contraseña
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#2eb300]"
                />
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer rounded-2xl bg-[#2eb300] py-3 font-bold text-white transition hover:bg-[#249900]"
              >
                Ingresar
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-slate-600">
              ¿No tienes cuenta?{' '}
              <Link to="/register" className="font-semibold text-[#2eb300] hover:underline">
                Regístrate aquí
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
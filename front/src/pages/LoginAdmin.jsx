export default function LoginAdmin() {
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10">
      <div className="mx-auto max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-xl">
        <div className="mb-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2eb300]">
            Área privada
          </p>
          <h1 className="mt-3 text-3xl font-extrabold text-white">
            Login Admin
          </h1>
          <p className="mt-2 text-slate-400">
            Acceso interno para administración del sistema
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-300">
              Usuario o correo
            </label>
            <input
              type="text"
              placeholder="admin@descuentito.com"
              className="w-full rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-[#2eb300]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-300">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-[#2eb300]"
            />
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer rounded-2xl bg-[#2eb300] py-3 font-bold text-white transition hover:bg-[#249900]"
          >
            Ingresar al panel
          </button>
        </form>
      </div>
    </div>
  );
}
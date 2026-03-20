import { Link } from 'react-router-dom';

export default function Register() {
  const whatsappNumber = '50255555555';
  const whatsappMessage = encodeURIComponent(
    'Hola, quiero promocionar mi negocio en Descuentito. Me gustaría recibir información.'
  );

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="grid min-h-screen lg:grid-cols-2">
        <section className="hidden lg:flex items-center justify-center bg-[#2eb300] p-10">
          <div className="flex flex-col gap-8 max-w-md text-white">
            <div>
              <h1 className="text-4xl font-extrabold leading-tight">
                Crea tu cuenta en Descuentito
              </h1>
              <p className="mt-4 text-lg text-white/90">
                Regístrate como cliente para comprar ofertas, descubrir promociones y aprovechar descuentos exclusivos.
              </p>
            </div>

            <div className="rounded-3xl border border-[#d9efcf] bg-[#f5fff0] p-5 text-slate-900">
              <h3 className="text-lg font-extrabold">
                ¿Quieres promocionar tu negocio con nosotros?
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Si deseas publicar ofertas en Descuentito, nuestro equipo comercial puede ayudarte con el proceso de afiliación.
              </p>

              <div className="mt-4 space-y-2 text-sm text-slate-700">
                <p><span className="font-semibold">Correo:</span> correo@correo.com</p>
                <p><span className="font-semibold">Teléfono:</span> +502 5555-5555</p>
                <p><span className="font-semibold">WhatsApp:</span> +502 5555-5555</p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900">Registrarse</h2>
                <p className="mt-1 text-slate-500">
                  Crea tu cuenta como cliente
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
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Nombre
                  </label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#2eb300]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Apellido
                  </label>
                  <input
                    type="text"
                    placeholder="Tu apellido"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#2eb300]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  placeholder="cliente@ejemplo.com"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#2eb300]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Teléfono
                </label>
                <input
                  type="text"
                  placeholder="5555-5555"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#2eb300]"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
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

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Confirmar contraseña
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#2eb300]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer rounded-2xl bg-[#2eb300] py-3 font-bold text-white transition hover:bg-[#249900]"
              >
                Crear cuenta
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-slate-600">
              ¿Ya tienes cuenta?{' '}
              <Link to="/login" className="font-semibold text-[#2eb300] hover:underline">
                Ingresa aquí
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
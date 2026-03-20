export default function ContactModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-2xl rounded-3xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">
              Contáctanos
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Estamos listos para ayudarte
            </p>
          </div>

          <button
            onClick={onClose}
            className="cursor-pointer rounded-xl px-3 py-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
          >
            ✕
          </button>
        </div>

        <div className="space-y-5 px-6 py-6">
          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-500">Correo electrónico</p>
            <p className="mt-1 text-lg font-bold text-slate-900">correo@correo.com</p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-500">Teléfono</p>
            <p className="mt-1 text-lg font-bold text-slate-900">+502 5555-5555</p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-500">WhatsApp</p>
            <p className="mt-1 text-lg font-bold text-slate-900">+502 5555-5555</p>
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <a
              href="mailto:correo@correo.com?subject=Contacto desde Descuentito"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Escribir por correo
            </a>

            <a
              href="https://wa.me/50255555555?text=Hola,%20quiero%20más%20información%20sobre%20Descuentito."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-[#2eb300] px-4 py-3 font-semibold text-white transition hover:bg-[#249900]"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
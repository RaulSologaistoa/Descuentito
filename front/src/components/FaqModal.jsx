export default function FaqModal({ open, onClose }) {
  if (!open) return null;

  const faqs = [
    {
      question: '¿Cómo compro una oferta?',
      answer: 'Explora las promociones disponibles, selecciona la oferta que te interese y sigue el proceso de compra desde tu cuenta.'
    },
    {
      question: '¿Necesito registrarme para comprar?',
      answer: 'Sí, necesitas crear una cuenta de cliente para poder comprar, generar y gestionar tus cupones.'
    },
    {
      question: '¿Cómo uso mi cupón?',
      answer: 'Una vez comprado, podrás mostrar tu cupón digital al comercio y seguir las indicaciones específicas de cada oferta.'
    },
    {
      question: '¿Qué pasa si una oferta vence?',
      answer: 'Cuando una oferta expira, ya no estará disponible para compra y se mostrará como vencida dentro del sitio.'
    },
    {
      question: '¿Cómo puede un comercio publicar ofertas?',
      answer: 'Los comercios deben contactar al equipo comercial de Descuentito para iniciar el proceso de afiliación.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-3xl rounded-3xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">
              Preguntas frecuentes
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Respuestas rápidas sobre el uso de Descuentito
            </p>
          </div>

          <button
            onClick={onClose}
            className="cursor-pointer rounded-xl px-3 py-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
          >
            ✕
          </button>
        </div>

        <div className="max-h-[70vh] space-y-4 overflow-y-auto px-6 py-6">
          {faqs.map((item, index) => (
            <div key={index} className="rounded-2xl border border-slate-200 p-5">
              <h3 className="text-lg font-bold text-slate-900">{item.question}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
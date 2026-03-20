import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ImageGallery from '../components/ImageGallery';
import deals from '../data/deals';

export default function OfferDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const deal = deals.find((d) => String(d.id) === String(id));

  if (!deal) {
    return (
      <div className="min-h-screen bg-slate-100">
        <Header />
        <div className="px-4 py-10 md:px-6">
          <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 text-center shadow-sm">
            <h1 className="text-2xl font-bold text-slate-800">Oferta no encontrada</h1>
            <p className="mt-3 text-slate-500">
              La oferta que buscas no existe o fue removida.
            </p>
            <button
              onClick={() => navigate('/')}
              className="mt-6 rounded-2xl bg-[#2eb300] px-6 py-3 font-semibold text-white transition hover:bg-[#249900]"
            >
              Volver al inicio
            </button>
          </div>
        </div>
      </div>
    );
  }

  const instructions = [
    'Presenta el cupón digital al llegar al establecimiento.',
    'Coordina tu visita o reserva con anticipación.',
    'La promoción está sujeta a disponibilidad.',
    'Consulta restricciones directamente con el comercio.'
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Header />

      <main className="px-4 py-6 md:px-6 xl:px-8">
        <div className="mb-5">
          <button
            onClick={() => navigate('/')}
            className="rounded-2xl border border-slate-300 bg-white px-4 py-2 font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 cursor-pointer"
          >
            ← Volver a ofertas
          </button>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <ImageGallery images={deal.images} title={deal.title} />

          <aside className="rounded-3xl bg-white p-6 shadow-sm md:p-7">
            <div className="mb-3 inline-flex rounded-full bg-[#eef9e8] px-4 py-2 text-sm font-semibold text-[#2eb300]">
              Oferta disponible
            </div>

            <h1 className="text-2xl font-extrabold leading-tight text-slate-900 md:text-4xl">
              {deal.title}
            </h1>

            <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
              {deal.description}
            </p>

            <div className="mt-6 rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Precio especial
              </p>

              <div className="mt-3 flex flex-wrap items-end gap-3">
                <span className="text-lg text-slate-400 line-through md:text-2xl">
                  {deal.oldPrice}
                </span>
                <span className="text-4xl font-extrabold text-red-600 md:text-5xl">
                  {deal.price}
                </span>
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-sm font-semibold text-slate-500">Ubicación</p>
                <p className="mt-1 text-base font-bold text-slate-800">
                  {deal.location}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-sm font-semibold text-slate-500">Horario</p>
                <p className="mt-1 text-base font-bold text-slate-800">
                  {deal.schedule}
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 p-5">
              <h2 className="text-lg font-extrabold text-slate-900">
                Cómo usar tu cupón
              </h2>

              <div className="mt-4 space-y-3">
                {instructions.map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2eb300] text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-6 text-slate-600 md:text-base">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <button className="mt-6 w-full rounded-2xl bg-[#2eb300] px-5 py-4 text-lg font-bold text-white shadow-sm transition hover:bg-[#249900] cursor-pointer">
              Generar cupón
            </button>
          </aside>
        </div>
      </main>
    </div>
  );
}
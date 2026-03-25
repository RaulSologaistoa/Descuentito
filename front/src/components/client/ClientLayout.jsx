import { Link } from 'react-router-dom';
import ClientSidebar from './ClientSidebar';
import logo from '../../assets/logo.png';

export default function ClientLayout({ title, children }) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="flex w-full items-center justify-between px-4 py-4 md:px-6">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Descuentito"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <div className="hidden h-8 w-px bg-slate-200 md:block" />

            <div className="hidden md:block">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Área cliente
              </p>
              <h1 className="text-lg font-extrabold text-slate-900">
                {title}
              </h1>
            </div>
          </div>

          <Link
            to="/"
            className="rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            ← Ver ofertas
          </Link>
        </div>
      </header>

      <main className="px-4 py-6 md:px-6 xl:px-8">
        <div className="grid gap-6 xl:grid-cols-[280px_1fr]">
          <ClientSidebar />

          <section className="space-y-6">
            <div className="xl:hidden">
              <div className="rounded-3xl bg-white px-5 py-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Área cliente
                </p>
                <h1 className="mt-1 text-2xl font-extrabold text-slate-900">
                  {title}
                </h1>
              </div>
            </div>

            {children}
          </section>
        </div>
      </main>
    </div>
  );
}
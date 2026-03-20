import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import FaqModal from './FaqModal';
import ContactModal from './ContactModal';

export default function Header() {
  const [showFaq, setShowFaq] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="flex w-full items-center justify-between px-4 py-4 md:px-6">
          <div className="flex h-14 items-center">
            <img
              src={logo}
              alt="Descuentito"
              className="h-12 w-auto object-contain"
            />
          </div>

          <div className="group relative">
            <button className="flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-4 py-2 font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
              Menú ☰
            </button>

            <div className="invisible absolute right-0 top-14 w-64 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
              <Link
                to="/login"
                className="block w-full rounded-xl px-4 py-3 text-left text-sm text-slate-700 transition hover:bg-[#f1faed]"
              >
                Ingresar
              </Link>

              <Link
                to="/register"
                className="block w-full rounded-xl px-4 py-3 text-left text-sm text-slate-700 transition hover:bg-[#f1faed]"
              >
                Registrarse
              </Link>

              <button
                onClick={() => setShowFaq(true)}
                className="block w-full cursor-pointer rounded-xl px-4 py-3 text-left text-sm text-slate-700 transition hover:bg-[#f1faed]"
              >
                Preguntas frecuentes
              </button>

              <button
                onClick={() => setShowContact(true)}
                className="block w-full cursor-pointer rounded-xl px-4 py-3 text-left text-sm text-slate-700 transition hover:bg-[#f1faed]"
              >
                Contáctanos
              </button>
            </div>
          </div>
        </div>
      </header>

      <FaqModal open={showFaq} onClose={() => setShowFaq(false)} />
      <ContactModal open={showContact} onClose={() => setShowContact(false)} />
    </>
  );
}
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function formatTimeLeft(expiresAt) {
  const now = new Date();
  const end = new Date(expiresAt);
  const diff = end - now;

  if (isNaN(end.getTime()) || diff <= 0) {
    return 'Expirado';
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  if (days > 0) {
    return `${days} día${days !== 1 ? 's' : ''} ${hours}h ${minutes}min`;
  }

  return `${hours}h ${minutes}min ${seconds}s`;
}

export default function CouponCard({ deal }) {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(formatTimeLeft(deal.expiresAt));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(formatTimeLeft(deal.expiresAt));
    }, 1000);

    return () => clearInterval(interval);
  }, [deal.expiresAt]);

  const isExpired = timeLeft === 'Expirado';

  return (
    <article className="rounded-3xl bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="overflow-hidden rounded-2xl">
        <img
          src={deal.images[0]}
          alt={deal.title}
          className="h-44 w-full object-cover"
        />
      </div>

      <h3 className="mt-3 line-clamp-2 min-h-[56px] text-lg font-bold text-slate-800">
        {deal.title}
      </h3>

      <div className="mt-2">
        <span className="text-sm text-slate-400 line-through">
          {deal.oldPrice}
        </span>

        <div className="text-2xl font-extrabold text-red-600">
          {deal.price}
        </div>
      </div>

      <div className="mt-3 rounded-2xl bg-slate-50 p-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Tiempo restante
        </p>
        <p
          className={`mt-1 text-sm font-bold ${
            isExpired ? 'text-red-600' : 'text-slate-800'
          }`}
        >
          {timeLeft}
        </p>
      </div>

      <button
        onClick={() => navigate(`/offer/${deal.id}`)}
        disabled={isExpired}
        className={`mt-4 w-full rounded-2xl py-3 font-semibold text-white transition cursor-pointer ${
          isExpired
            ? 'bg-slate-300 cursor-not-allowed'
            : 'bg-[#2eb300] hover:bg-[#249900]'
        }`}
      >
        {isExpired ? 'Oferta vencida' : 'Ver oferta'}
      </button>
    </article>
  );
}
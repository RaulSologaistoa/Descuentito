import { useState } from 'react';

export default function ImageGallery({ images = [], title = 'Oferta' }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images.length) {
    return (
      <div className="rounded-3xl bg-white p-4 shadow-sm">
        <div className="flex h-[420px] items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
          Sin imágenes
        </div>
      </div>
    );
  }

  return (
    <section className="rounded-3xl bg-white p-4 shadow-sm md:p-5">
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
        <div className="flex h-[280px] items-center justify-center md:h-[420px] xl:h-[520px]">
          <img
            src={images[activeIndex]}
            alt={`${title} ${activeIndex + 1}`}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-xl font-bold text-slate-700 shadow transition hover:bg-white"
            >
              ‹
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-xl font-bold text-slate-700 shadow transition hover:bg-white"
            >
              ›
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex flex-wrap gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`overflow-hidden rounded-xl border-2 transition ${
                activeIndex === index
                  ? 'border-[#2eb300] shadow-sm'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex h-20 w-24 items-center justify-center bg-slate-100">
                <img
                  src={image}
                  alt={`Miniatura ${index + 1}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
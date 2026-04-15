import { useMemo, useState } from 'react';

const initialForm = {
  title: '',
  description: '',
  oldPrice: '',
  price: '',
  location: '',
  schedule: '',
  expiresAt: '',
  coverImageFile: null,
  imageFiles: []
};

export default function MerchantCouponForm() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files?.[0] || null;

    setForm((prev) => ({
      ...prev,
      coverImageFile: file
    }));
  };

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files || []);

    setForm((prev) => ({
      ...prev,
      imageFiles: files
    }));
  };

  const coverPreview = useMemo(() => {
    if (!form.coverImageFile) {
      return null;
    }

    return URL.createObjectURL(form.coverImageFile);
  }, [form.coverImageFile]);

  const imagePreviews = useMemo(() => {
    return form.imageFiles.map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file)
    }));
  }, [form.imageFiles]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append('title', form.title);
      formData.append('description', form.description);
      formData.append('oldPrice', form.oldPrice);
      formData.append('price', form.price);
      formData.append('location', form.location);
      formData.append('schedule', form.schedule);
      formData.append('expiresAt', form.expiresAt);

      if (form.coverImageFile) {
        formData.append('coverImage', form.coverImageFile);
      }

      form.imageFiles.forEach((file) => {
        formData.append('images', file);
      });

      // Aquí irá tu endpoint real
      // const response = await fetch('https://tu-api.com/api/merchant/coupons', {
      //   method: 'POST',
      //   body: formData
      // });

      // const result = await response.json();
      // console.log('Cupón guardado:', result);

      console.log('Payload listo para enviar a API / Cloudflare');
      console.log('Datos del formulario:', form);
    } catch (error) {
      console.error('Error al guardar el cupón:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Título del cupón"
        className="w-full rounded-2xl border px-4 py-3"
      />

      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Descripción"
        className="w-full rounded-2xl border px-4 py-3"
        rows="4"
      />

      <div className="grid gap-5 md:grid-cols-2">
        <input
          name="oldPrice"
          value={form.oldPrice}
          onChange={handleChange}
          placeholder="Precio normal"
          className="rounded-2xl border px-4 py-3"
        />

        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Precio oferta"
          className="rounded-2xl border px-4 py-3"
        />
      </div>

      <input
        name="location"
        value={form.location}
        onChange={handleChange}
        placeholder="Ubicación"
        className="w-full rounded-2xl border px-4 py-3"
      />

      <input
        name="schedule"
        value={form.schedule}
        onChange={handleChange}
        placeholder="Horario"
        className="w-full rounded-2xl border px-4 py-3"
      />

      <input
        type="datetime-local"
        name="expiresAt"
        value={form.expiresAt}
        onChange={handleChange}
        className="w-full rounded-2xl border px-4 py-3"
      />

      <div className="rounded-3xl border border-slate-200 p-4">
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Imagen de portada
        </label>

        <label className="flex cursor-pointer items-center justify-between rounded-2xl border px-4 py-3">
          <span className="text-sm text-slate-600">
            {form.coverImageFile
              ? form.coverImageFile.name
              : 'Seleccionar imagen de portada'}
          </span>

          <span className="rounded-xl bg-[#2eb300] px-3 py-1 text-xs font-semibold text-white">
            Subir
          </span>

          <input
            type="file"
            accept="image/*"
            onChange={handleCoverImageChange}
            className="hidden"
          />
        </label>

        {form.coverImageFile && (
          <p className="mt-3 text-sm text-slate-500">
            Archivo seleccionado: {form.coverImageFile.name}
          </p>
        )}

        {coverPreview && (
          <img
            src={coverPreview}
            alt="Vista previa portada"
            className="mt-4 h-48 w-full rounded-2xl object-cover"
          />
        )}
      </div>

      <div className="rounded-3xl border border-slate-200 p-4">
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Imágenes del cupón
        </label>

        <label className="flex cursor-pointer items-center justify-between rounded-2xl border px-4 py-3">
          <span className="text-sm text-slate-600">
            {form.imageFiles.length > 0
              ? `${form.imageFiles.length} imagen(es) seleccionada(s)`
              : 'Seleccionar imágenes del cupón'}
          </span>

          <span className="rounded-xl bg-[#2eb300] px-3 py-1 text-xs font-semibold text-white">
            Subir
          </span>

          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImagesChange}
            className="hidden"
          />
        </label>

        {form.imageFiles.length > 0 && (
          <p className="mt-3 text-sm text-slate-500">
            {form.imageFiles.length} imagen(es) seleccionada(s)
          </p>
        )}

        {imagePreviews.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3">
            {imagePreviews.map((image, index) => (
              <div
                key={`${image.name}-${index}`}
                className="overflow-hidden rounded-2xl border border-slate-200"
              >
                <img
                  src={image.url}
                  alt={`Vista previa ${index + 1}`}
                  className="h-32 w-full object-cover"
                />
                <div className="p-2 text-xs text-slate-500">
                  {image.name}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <button
          type="submit"
          className="cursor-pointer rounded-2xl bg-[#2eb300] px-6 py-3 font-bold text-white transition hover:bg-[#249900]"
        >
          Guardar cupón
        </button>
      </div>
    </form>
  );
}
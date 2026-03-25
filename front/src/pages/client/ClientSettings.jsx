import ClientLayout from '../../components/client/ClientLayout';
import clientProfile from '../../data/clientProfile';

export default function ClientSettings() {
  return (
    <ClientLayout title="Mi perfil">
      <div className="grid gap-6 xl:grid-cols-2">
        <section className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-extrabold text-slate-900">
            Información básica
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <input defaultValue={clientProfile.firstName} className="rounded-2xl border px-4 py-3" />
            <input defaultValue={clientProfile.lastName} className="rounded-2xl border px-4 py-3" />
          </div>

          <div className="mt-5 space-y-5">
            <input defaultValue={clientProfile.email} className="w-full rounded-2xl border px-4 py-3" />
            <input defaultValue={clientProfile.phone} className="w-full rounded-2xl border px-4 py-3" />
            <input defaultValue={clientProfile.address} className="w-full rounded-2xl border px-4 py-3" />
          </div>

          <button className="mt-6 rounded-2xl bg-[#2eb300] px-6 py-3 font-bold text-white">
            Guardar cambios
          </button>
        </section>

        <section className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-extrabold text-slate-900">
            Cambiar contraseña
          </h2>

          <div className="mt-6 space-y-5">
            <input type="password" placeholder="Contraseña actual" className="w-full rounded-2xl border px-4 py-3" />
            <input type="password" placeholder="Nueva contraseña" className="w-full rounded-2xl border px-4 py-3" />
            <input type="password" placeholder="Confirmar nueva contraseña" className="w-full rounded-2xl border px-4 py-3" />
          </div>

          <button className="mt-6 rounded-2xl bg-slate-900 px-6 py-3 font-bold text-white">
            Actualizar contraseña
          </button>
        </section>
      </div>
    </ClientLayout>
  );
}
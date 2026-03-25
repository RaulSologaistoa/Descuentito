import ClientLayout from '../../components/client/ClientLayout';

export default function ClientHome() {
  return (
    <ClientLayout title="Inicio">
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-extrabold text-slate-900">
          Bienvenido
        </h2>
        <p className="mt-3 text-slate-600">
          Aquí podrás ver tus cupones, administrar tu perfil y consultar tu historial.
        </p>
      </div>
    </ClientLayout>
  );
}
import Header from '../components/Header';
import ClientHeader from '../components/client/ClientHeader';
import CouponCard from '../components/CouponCard';
import offerList from '../data/offerList';

export default function Home() {
  const savedUser = localStorage.getItem('authUser');
  let authUser = null;

  try {
    authUser = savedUser ? JSON.parse(savedUser) : null;
  } catch {
    authUser = null;
  }

  const isClientLogged =
    authUser &&
    authUser.roleId === 3 &&
    authUser.status === 1;

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      {isClientLogged ? <ClientHeader /> : <Header />}

      <section className="w-full bg-[#2eb300] py-4 text-center text-white font-bold text-base md:text-2xl">
        Cupones con descuentos del 50% al 90% en los mejores lugares
      </section>

      <main className="w-full px-4 py-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {offerList.map((deal) => (
            <CouponCard key={deal.id} deal={deal} />
          ))}
        </div>
      </main>
    </div>
  );
}
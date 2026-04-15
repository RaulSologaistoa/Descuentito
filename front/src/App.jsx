import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OfferDetail from './pages/OfferDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import LoginAdmin from './pages/LoginAdmin';
import ClientSettings from './pages/client/ClientSettings';
import ClientCoupons from './pages/client/ClientCoupons';
import CouponRedeem from './pages/CouponRedeem';
import MerchantHome from './pages/merchant/MerchantHome';
import MerchantCoupons from './pages/merchant/MerchantCoupons';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<OfferDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/login" element={<LoginAdmin />} />
        <Route path="/client/settings" element={<ClientSettings />} />
        <Route path="/client/coupons" element={<ClientCoupons />} />
        <Route path="/coupon/:id" element={<CouponRedeem />} />
        <Route path="/merchant/home" element={<MerchantHome />} />
        <Route path="/merchant/coupons" element={<MerchantCoupons />} />
      </Routes>
    </BrowserRouter>
  );
}
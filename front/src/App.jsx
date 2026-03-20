import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OfferDetail from './pages/OfferDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import LoginAdmin from './pages/LoginAdmin';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<OfferDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/login" element={<LoginAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}
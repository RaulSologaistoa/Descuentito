import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OfferDetail from './pages/OfferDetail';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<OfferDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
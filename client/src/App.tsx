import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Browse } from './pages/Browse';
import { Home } from './pages/Home';
import { NavBar } from './components/Navbar';
import { Support } from './pages/Support';
import Footer from './components/footer';

export default function App() {
  return (
    <div className="">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/messages" element={<div>Messages</div>} />
          <Route path="/dashboard" element={<div>Dashboard</div>} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

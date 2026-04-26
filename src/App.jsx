import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import AmarkanthPremiumCTC from './pages/AmarkanthPremiumCTC';
import TapovanPremiumTea from './pages/TapovanPremiumTea';
import OrderPage from './pages/OrderPage';
import DistributorPage from './pages/DistributorPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import { TermsConditions, ShippingPolicy } from './pages/LegalPages';
import ScrollToTop from './components/ScrollToTop';

// Intersection Observer for reveals
const useReveal = () => {
  const location = useLocation();
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location]);
};

function AppContent() {
  useReveal();
  return (
    <div className="app">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/amarkanth-premium-ctc" element={<AmarkanthPremiumCTC />} />
        <Route path="/product/tapovan-premium-tea" element={<TapovanPremiumTea />} />
        <Route path="/checkout" element={<OrderPage />} />
        <Route path="/distributor" element={<DistributorPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

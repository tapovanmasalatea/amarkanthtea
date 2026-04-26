import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Lazy Load Pages
const Home = lazy(() => import('./pages/Home'));
const Shop = lazy(() => import('./pages/Shop'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const AmarkanthPremiumCTC = lazy(() => import('./pages/AmarkanthPremiumCTC'));
const TapovanPremiumTea = lazy(() => import('./pages/TapovanPremiumTea'));
const OrderPage = lazy(() => import('./pages/OrderPage'));
const DistributorPage = lazy(() => import('./pages/DistributorPage'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const RefundPolicy = lazy(() => import('./pages/RefundPolicy'));

// Named exports from LegalPages
const TermsConditions = lazy(() => import('./pages/LegalPages').then(module => ({ default: module.TermsConditions })));
const ShippingPolicy = lazy(() => import('./pages/LegalPages').then(module => ({ default: module.ShippingPolicy })));

const PageLoader = () => (
  <div className="page-loader">
    <div className="loader-dot"></div>
  </div>
);

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
      <Suspense fallback={<PageLoader />}>
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
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
        </Routes>
      </Suspense>
      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        .page-loader {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
        }
        .loader-dot {
          width: 40px;
          height: 40px;
          background: #d50505;
          border-radius: 50%;
          animation: pulse 1.5s ease-in-out infinite;
        }
        @keyframes pulse {
          0% { transform: scale(0.8); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(0.8); opacity: 0.5; }
        }
      `}} />
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

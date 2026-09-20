import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import logoImg from './assets/logo.webp';

// Helper for lazy loading with automatic connection-retry
const lazyWithRetry = (componentImport) => {
  return lazy(() => {
    return componentImport().catch((error) => {
      console.warn("Chunk loading failed, retrying page build...", error);
      return new Promise((resolve, reject) => {
        // Retry after 1.5 seconds if connection failed
        setTimeout(() => {
          componentImport()
            .then(resolve)
            .catch(() => {
              // If second attempt fails, force reload the page to clear the cache and try again!
              window.location.reload();
            });
        }, 1500);
      });
    });
  });
};

// Lazy Load Pages with network resilience
const Home = lazyWithRetry(() => import('./pages/Home'));
const Shop = lazyWithRetry(() => import('./pages/Shop'));
const About = lazyWithRetry(() => import('./pages/About'));
const Contact = lazyWithRetry(() => import('./pages/Contact'));
const AmarkanthPremiumCTC = lazyWithRetry(() => import('./pages/AmarkanthPremiumCTC'));
const TapovanPremiumTea = lazyWithRetry(() => import('./pages/TapovanPremiumTea'));
const OrderPage = lazyWithRetry(() => import('./pages/OrderPage'));
const DistributorPage = lazyWithRetry(() => import('./pages/DistributorPage'));
const PrivacyPolicy = lazyWithRetry(() => import('./pages/PrivacyPolicy'));
const ReturnPolicy = lazyWithRetry(() => import('./pages/ReturnPolicy'));
const RefundPolicy = lazyWithRetry(() => import('./pages/RefundPolicy'));
const ThankYou = lazyWithRetry(() => import('./pages/ThankYou'));
const Blog = lazyWithRetry(() => import('./pages/Blog'));
const BlogPost = lazyWithRetry(() => import('./pages/BlogPost'));

// Named exports from LegalPages with network resilience
const TermsConditions = lazyWithRetry(() => import('./pages/LegalPages').then(module => ({ default: module.TermsConditions })));
const ShippingPolicy = lazyWithRetry(() => import('./pages/LegalPages').then(module => ({ default: module.ShippingPolicy })));

const PageLoader = () => (
  <div className="page-loader">
    <div className="brew-container">
      <div className="logo-loader-container">
        <img src={logoImg} alt="Amarkanth Group" className="pulsing-logo" />
        <div className="loader-ring"></div>
        <div className="loader-center-dot"></div>
      </div>
      <p className="loading-text">Brewing your experience...</p>
    </div>
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

  useEffect(() => {
    const preloadPageChunks = () => {
      // Preload product, shop, and checkout pages in the background to ensure instant page load
      import('./pages/Home').catch(() => {});
      import('./pages/Shop').catch(() => {});
      import('./pages/AmarkanthPremiumCTC').catch(() => {});
      import('./pages/TapovanPremiumTea').catch(() => {});
      import('./pages/OrderPage').catch(() => {});
      import('./pages/ThankYou').catch(() => {});
    };
    
    if (document.readyState === 'complete') {
      preloadPageChunks();
    } else {
      window.addEventListener('load', preloadPageChunks);
      return () => window.removeEventListener('load', preloadPageChunks);
    }
  }, []);

  return (
    <div className="app">
      <Navbar />
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/amarkanth-premium-ctc" element={<AmarkanthPremiumCTC />} />
          <Route path="/products/amarkanth-assam-ctc-tea-1kg" element={<AmarkanthPremiumCTC />} />
          <Route path="/product/tapovan-premium-tea" element={<TapovanPremiumTea />} />
          <Route path="/products/tapovan-masala-tea-1kg" element={<TapovanPremiumTea />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/checkout" element={<OrderPage />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/distributor" element={<DistributorPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="*" element={<Home />} />
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
          z-index: 9999;
        }
        .brew-container {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .tea-cup {
          width: 120px;
          height: 120px;
        }
        
        .logo-loader-container {
          position: relative;
          width: 150px;
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pulsing-logo {
          width: 100px;
          height: auto;
          z-index: 2;
          animation: logoPulse 2s infinite ease-in-out;
        }

        .loader-ring {
          position: absolute;
          width: 130px;
          height: 130px;
          border: 2px solid transparent;
          border-top-color: #d50505;
          border-radius: 50%;
          animation: rotate 1.5s infinite linear;
        }

        .loading-text {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          color: #111;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-size: 0.8rem;
          margin-top: 10px;
          opacity: 0.8;
        }

        @keyframes logoPulse {
          0% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.8; }
        }

        @keyframes rotate {
          0% { transform: rotate(0); }
          100% { transform: rotate(360deg); }
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

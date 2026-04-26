import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.webp';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle body scroll lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-active' : ''}`}>
      <div className="nav-container">
        {/* Left: Menu Toggle */}
        <div className="nav-left">
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
            <Menu size={28} strokeWidth={1.5} />
          </button>
        </div>

        {/* Center: Logo */}
        <div className="nav-center">
          <Link to="/" className="nav-logo">
            <img src={logo} alt="AMARKANTH GROUP" className="logo-img" onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }} />
            <span className="logo-text-fallback" style={{ display: 'none' }}>AMARKANTH GROUP</span>
          </Link>
        </div>

        {/* Right: Empty for balance */}
        <div className="nav-right"></div>
      </div>

      {/* Slide-out Menu Overlay */}
      <div className={`nav-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)} />
      
      {/* Slide-out Menu */}
      <div className={`nav-links-container ${isMenuOpen ? 'active' : ''}`}>
        <div className="menu-header">
          <button className="close-menu" onClick={() => setIsMenuOpen(false)}>
            <X size={35} strokeWidth={1} />
          </button>
        </div>
        <div className="menu-content">
          <div className="menu-label">Navigation</div>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          
          <div className="menu-item-with-sub">
            <Link to="/shop" className={location.pathname === '/shop' ? 'active' : ''}>Collection</Link>
            <div className="sub-links">
              <Link to="/product/tapovan-premium-tea" className="sub-link">Tapovan Tea</Link>
              <Link to="/product/amarkanth-premium-ctc" className="sub-link">Amarkanth Tea</Link>
            </div>
          </div>

          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>
          <Link to="/distributor" className={location.pathname === '/distributor' ? 'active' : ''}>Apply for Distributiorship</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link>
        </div>
        <div className="menu-footer">
          <div className="footer-line"></div>
          <p>© 2024 AMARKANTH GROUP</p>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 0; /* Zero padding to remove white space */
          transition: var(--transition-smooth);
          background: var(--cream);
          border-bottom: 1px solid rgba(0,0,0,0.03);
        }

        .navbar.scrolled {
          padding: 0;
          box-shadow: 0 4px 30px rgba(0,0,0,0.04);
        }

        .nav-container {
          max-width: 1600px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 2fr 1fr;
          align-items: center;
          padding: 0 4%;
        }

        .nav-left {
          display: flex;
          justify-content: flex-start;
        }

        .nav-center {
          display: flex;
          justify-content: center;
        }

        .nav-right {
          display: flex;
          justify-content: flex-end;
        }

        .menu-toggle, .close-menu {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--primary-red);
          padding: 8px;
          display: flex;
          align-items: center;
          transition: transform 0.3s ease;
        }

        .menu-toggle:hover {
          transform: scale(1.1);
        }

        .logo-img {
          height: 100px;
          width: auto;
          object-fit: contain;
          transition: var(--transition-smooth);
        }

        .scrolled .logo-img {
          height: 70px;
        }

        .logo-text-fallback {
          font-weight: 800;
          font-size: 1.4rem;
          letter-spacing: -0.02em;
          color: var(--primary-red);
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .logo-img {
            height: 50px;
          }
          .scrolled .logo-img {
            height: 45px;
          }
          .nav-enquire-btn {
            padding: 8px 15px !important;
            font-size: 0.75rem !important;
          }
        }

        .nav-enquire-btn {
          background-color: var(--primary-red);
          color: white !important;
          padding: 12px 28px;
          border-radius: 2px;
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .nav-enquire-btn:hover {
          background-color: var(--dark-red);
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(196, 30, 58, 0.2);
        }

        /* Slide-out Menu Styles */
        .nav-links-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 450px;
          height: 100vh;
          background: var(--white);
          z-index: 2000;
          transform: translateX(-100%);
          transition: transform 0.8s cubic-bezier(0.77, 0, 0.175, 1);
          display: flex;
          flex-direction: column;
          padding: 60px;
          box-shadow: 40px 0 100px rgba(0,0,0,0.1);
        }

        @media (max-width: 500px) {
          .nav-links-container {
            width: 100%;
            padding: 40px;
          }
        }

        .nav-links-container.active {
          transform: translateX(0);
        }

        .nav-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0,0,0,0.3);
          backdrop-filter: blur(8px);
          z-index: 1500;
          opacity: 0;
          visibility: hidden;
          transition: all 0.6s ease;
        }

        .nav-menu-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        .menu-header {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 80px;
        }

        .menu-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: var(--text-muted);
          margin-bottom: 20px;
          font-weight: 600;
        }

        .menu-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .menu-content a {
          font-weight: 700;
          font-size: 2.2rem; /* Reduced from 3.5rem */
          color: var(--text-main);
          text-decoration: none;
          transition: all 0.4s ease;
          opacity: 0.5;
          line-height: 1.2;
          letter-spacing: -0.02em;
          font-family: 'Inter', sans-serif;
        }

        .menu-content a:hover, .menu-content a.active {
          opacity: 1;
          transform: translateX(10px);
          color: var(--primary-red);
        }

        .sub-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 10px;
          margin-left: 20px;
          padding-left: 20px;
          border-left: 1px solid rgba(0,0,0,0.1);
        }

        .sub-link {
          font-size: 1.1rem !important; /* Smaller size for sub-links */
          font-weight: 500 !important;
          opacity: 0.6 !important;
          transform: none !important;
          letter-spacing: 0 !important;
        }

        .sub-link:hover {
          opacity: 1 !important;
          color: var(--primary-red) !important;
          transform: translateX(5px) !important;
        }

        .menu-footer {
          margin-top: auto;
        }

        .footer-line {
          width: 40px;
          height: 2px;
          background: var(--primary-red);
          margin-bottom: 20px;
        }

        .menu-footer p {
          font-size: 0.75rem;
          letter-spacing: 1px;
          opacity: 0.6;
          text-transform: uppercase;
          margin-bottom: 15px;
        }

        .social-links-minimal {
          display: flex;
          gap: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          opacity: 0.8;
        }
      `}} />
    </nav>
  );
};

export default Navbar;



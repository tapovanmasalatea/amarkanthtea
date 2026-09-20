import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.webp';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
    setIsDropdownOpen(false);
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
        {/* Left: Desktop Navigation Links (Home, Collection, About) */}
        <div className="nav-left-links">
          <Link to="/" className={`nav-link-item ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          
          <div 
            className="nav-link-item has-dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className={`dropdown-trigger ${location.pathname.startsWith('/shop') || location.pathname.startsWith('/product') ? 'active' : ''}`}>
              Collection <ChevronDown size={14} className={`chevron-icon ${isDropdownOpen ? 'rotated' : ''}`} />
            </span>
            <div className={`desktop-dropdown ${isDropdownOpen ? 'show' : ''}`}>
              <Link to="/shop" className="dropdown-item">All Collections</Link>
              <Link to="/product/tapovan-premium-tea" className="dropdown-item">Tapovan Premium Tea</Link>
              <Link to="/product/amarkanth-premium-ctc" className="dropdown-item">Amarkanth Premium CTC</Link>
            </div>
          </div>

          <Link to="/about" className={`nav-link-item ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Link>
          <Link to="/blog" className={`nav-link-item ${location.pathname.startsWith('/blog') ? 'active' : ''}`}>Blog</Link>
        </div>

        {/* Center: Absolutely Centered Logo */}
        <div className="nav-center-logo">
          <Link to="/" className="nav-logo">
            <img src={logo} alt="AMARKANTH GROUP" className="logo-img" onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }} />
            <span className="logo-text-fallback" style={{ display: 'none' }}>AMARKANTH GROUP</span>
          </Link>
        </div>

        {/* Right: Actions (Distributorship, Contact Us, Shop Now / Toggle) */}
        <div className="nav-right-actions">
          <Link to="/distributor" className={`nav-link-item ${location.pathname === '/distributor' ? 'active' : ''}`}>Distributorship</Link>
          <Link to="/contact" className={`nav-link-item ${location.pathname === '/contact' ? 'active' : ''}`}>Contact Us</Link>
          <Link to="/shop" className="nav-cta-btn">Shop Now</Link>
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Slide-out Menu Overlay for Mobile */}
      <div className={`nav-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)} />
      
      {/* Slide-out Menu for Mobile */}
      <div className={`nav-links-container ${isMenuOpen ? 'active' : ''}`}>
        <div className="menu-header">
          <button className="close-menu" onClick={() => setIsMenuOpen(false)}>
            <X size={30} strokeWidth={1.5} />
          </button>
        </div>
        <div className="menu-content">
          <div className="menu-label">Navigation</div>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          
          <div className="menu-item-with-sub">
            <Link to="/shop" className={location.pathname === '/shop' ? 'active' : ''}>Collection</Link>
            <div className="sub-links">
              <Link to="/product/tapovan-premium-tea" className="sub-link">Tapovan Premium Tea</Link>
              <Link to="/product/amarkanth-premium-ctc" className="sub-link">Amarkanth Premium CTC</Link>
            </div>
          </div>

          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>
          <Link to="/distributor" className={location.pathname === '/distributor' ? 'active' : ''}>Distributorship</Link>
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
          padding: 0;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          background: rgba(253, 251, 247, 0.95);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .navbar.scrolled {
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.04);
          background: rgba(253, 251, 247, 0.98);
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 30px;
          position: relative;
          height: 90px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .navbar.scrolled .nav-container {
          height: 75px;
        }

        /* Center Centering Logo */
        .nav-center-logo {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1005;
        }

        .logo-img {
          height: 70px;
          width: auto;
          object-fit: contain;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .navbar.scrolled .logo-img {
          height: 55px;
        }

        .logo-text-fallback {
          font-weight: 800;
          font-size: 1.4rem;
          letter-spacing: -0.02em;
          color: var(--primary-red);
          text-transform: uppercase;
        }

        /* Left Split Links */
        .nav-left-links {
          display: flex;
          align-items: center;
          gap: 25px;
          flex: 1;
        }

        /* Right Split Links */
        .nav-right-actions {
          display: flex;
          align-items: center;
          gap: 25px;
          justify-content: flex-end;
          flex: 1;
        }

        .nav-link-item {
          font-size: 0.95rem;
          font-weight: 600;
          color: #2c3e50;
          padding: 10px 0;
          position: relative;
          cursor: pointer;
          transition: color 0.2s ease;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .nav-link-item:hover, .nav-link-item.active {
          color: var(--primary-red);
        }

        .dropdown-trigger {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .dropdown-trigger.active {
          color: var(--primary-red);
        }

        .chevron-icon {
          transition: transform 0.3s ease;
        }

        .chevron-icon.rotated {
          transform: rotate(180deg);
        }

        /* Dropdown Menu Style */
        .has-dropdown {
          position: relative;
        }

        .desktop-dropdown {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(15px);
          background: white;
          border-radius: 12px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
          padding: 12px;
          min-width: 220px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .desktop-dropdown.show {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(5px);
        }

        .dropdown-item {
          font-size: 0.88rem !important;
          font-weight: 500 !important;
          color: #444 !important;
          padding: 10px 14px;
          border-radius: 8px;
          transition: all 0.2s ease !important;
          opacity: 1 !important;
          text-align: left;
        }

        .dropdown-item:hover {
          background: rgba(213, 5, 5, 0.05) !important;
          color: var(--primary-red) !important;
          transform: translateX(3px);
        }

        .nav-cta-btn {
          background-color: var(--primary-red);
          color: white !important;
          padding: 10px 24px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.88rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-cta-btn:hover {
          background-color: var(--dark-red);
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(213, 5, 5, 0.25);
        }

        .menu-toggle {
          background: none;
          border: none;
          cursor: pointer;
          color: #2c3e50;
          padding: 6px;
          display: none;
          align-items: center;
        }

        /* Mobile Slider Styles - Slides from Right */
        .nav-links-container {
          position: fixed;
          top: 0;
          right: 0;
          width: 400px;
          height: 100vh;
          background: var(--white);
          z-index: 2000;
          transform: translateX(100%);
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          padding: 40px;
          box-shadow: -20px 0 50px rgba(0, 0, 0, 0.05);
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
          background: rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          z-index: 1500;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .nav-menu-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        .menu-header {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 40px;
        }

        .close-menu {
          background: none;
          border: none;
          cursor: pointer;
          color: #2c3e50;
          padding: 8px;
          display: flex;
          align-items: center;
        }

        .menu-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--text-muted);
          margin-bottom: 20px;
          font-weight: 700;
        }

        .menu-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .menu-content a {
          font-weight: 700;
          font-size: 1.4rem;
          color: #2c3e50;
          text-decoration: none;
          transition: all 0.2s ease;
          line-height: 1.3;
        }

        .menu-content a:hover, .menu-content a.active {
          color: var(--primary-red);
          transform: translateX(4px);
        }

        .sub-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 10px;
          margin-left: 15px;
          padding-left: 15px;
          border-left: 2px solid rgba(213, 5, 5, 0.15);
        }

        .sub-link {
          font-size: 1rem !important;
          font-weight: 500 !important;
          color: #666 !important;
        }

        .sub-link:hover, .sub-link.active {
          color: var(--primary-red) !important;
        }

        .menu-footer {
          margin-top: auto;
        }

        .footer-line {
          width: 30px;
          height: 2px;
          background: var(--primary-red);
          margin-bottom: 15px;
        }

        .menu-footer p {
          font-size: 0.75rem;
          opacity: 0.6;
          font-weight: 600;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .nav-left-links {
            display: none;
          }
          .nav-right-actions .nav-link-item,
          .nav-right-actions .nav-cta-btn {
            display: none;
          }
          .menu-toggle {
            display: flex;
          }
          .nav-container {
            height: 75px;
          }
          .navbar.scrolled .nav-container {
            height: 65px;
          }
          .logo-img {
            height: 55px;
          }
          .navbar.scrolled .logo-img {
            height: 48px;
          }
        }

        @media (max-width: 500px) {
          .nav-links-container {
            width: 100%;
            padding: 30px;
          }
          .logo-img {
            height: 50px;
          }
          .navbar.scrolled .logo-img {
            height: 44px;
          }
          .nav-container {
            padding: 0 15px;
            height: 70px;
          }
        }
      `}} />
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import footerImg from '../assets/footer.png';
import logoImg from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-overlay"></div>
      <div className="container footer-relative">
        <div className="footer-logo-center">
          <img src={logoImg} alt="Amarkanth Logo" className="footer-main-logo" />
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="footer-text-logo">AMARKANTH <br />& TAPOVAN</h2>
            <p className="footer-tagline">Not Just Tea. A Ritual.</p>
          </div>
          
          <div className="footer-links">
            <div className="link-col">
              <h4>Collections</h4>
              <Link to="/shop">Amarkanth CTC</Link>
              <Link to="/shop">Tapovan Masala</Link>
              <Link to="/shop">Wellness Blends</Link>
              <Link to="/shop">Gifting</Link>
            </div>
            <div className="link-col">
              <h4>Philosophy</h4>
              <Link to="/about">The Source</Link>
              <Link to="/">The Ritual</Link>
              <Link to="/about">Our Story</Link>
              <Link to="/about">Sustainability</Link>
            </div>
            <div className="link-col">
              <h4>Support</h4>
              <Link to="/contact">Contact Us</Link>
              <Link to="/contact">Shipping</Link>
              <Link to="/contact">Returns</Link>
              <Link to="/contact">FAQ</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">© 2024 Amarkanth Group. All rights reserved.</div>
          <div className="social-links">
            <a href="https://www.instagram.com/amarkanth_tea/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.facebook.com/Amarkanthpremiumtea/" target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .footer {
          position: relative;
          padding: 120px 0 60px;
          background-image: url('${footerImg}');
          background-size: cover;
          background-position: center;
          color: white;
          overflow: hidden;
        }

        .footer-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.9));
          z-index: 1;
        }

        .footer-relative {
          position: relative;
          z-index: 2;
        }

        .footer-logo-center {
          display: flex;
          justify-content: center;
          margin-bottom: 80px;
        }

        .footer-main-logo {
          height: 120px;
          width: auto;
          opacity: 1;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 100px;
          margin-bottom: 80px;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 80px;
        }

        .footer-text-logo {
          font-size: 2.2rem;
          margin-bottom: 20px;
          letter-spacing: 2px;
          color: #d50505;
          line-height: 1.1;
        }

        .footer-tagline {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          opacity: 0.7;
          font-size: 1.1rem;
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .link-col h4 {
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 3px;
          margin-bottom: 30px;
          color: white;
          font-weight: 800;
        }

        .link-col {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .link-col a {
          color: rgba(255,255,255,0.6);
          font-size: 0.95rem;
          transition: 0.3s ease;
          text-decoration: none;
        }

        .link-col a:hover {
          color: #d50505;
          transform: translateX(5px);
        }

        .footer-bottom {
          padding-top: 50px;
          border-top: 1px solid rgba(255,255,255,0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.4);
        }

        .social-links {
          display: flex;
          gap: 30px;
        }

        .social-links a {
          text-decoration: none;
          color: inherit;
          transition: 0.3s ease;
        }

        .social-links a:hover {
          color: white;
        }

        @media (max-width: 968px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 60px;
            text-align: center;
          }
          .footer-links {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .footer-main-logo {
            height: 80px;
          }
        }
      `}} />
    </footer>
  );
};

export default Footer;

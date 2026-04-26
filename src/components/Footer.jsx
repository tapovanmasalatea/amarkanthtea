import React from 'react';
import { Link } from 'react-router-dom';
import footerImg from '../assets/footer.webp';
import logoImg from '../assets/logo.webp';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-relative">
        <div className="footer-logo-center">
          <img src={logoImg} alt="Amarkanth Logo" className="footer-main-logo" />
        </div>

        <div className="footer-nav-horizontal">
          <Link to="/about">About Us</Link>
          <Link to="/shop">Collection</Link>
          <Link to="/distributor">Distributiorship</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-bottom-bar">
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
          padding: 120px 0 80px; /* Increased padding for full design view */
          background-image: url('${footerImg}');
          background-size: cover;
          background-position: center;
          color: #000000;
          overflow: hidden;
          min-height: 500px; /* Ensure full background is visible */
          display: flex;
          align-items: center;
        }

        .footer-relative {
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .footer-logo-center {
          display: flex;
          justify-content: center;
          margin-bottom: 30px;
        }

        .footer-main-logo {
          height: 120px;
          width: auto;
          filter: drop-shadow(0 5px 15px rgba(0,0,0,0.1));
        }

        .footer-nav-horizontal {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-bottom: 60px;
        }

        .footer-nav-horizontal a {
          text-decoration: none;
          color: #000000;
          font-weight: 800;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          transition: 0.3s ease;
        }

        .footer-nav-horizontal a:hover {
          color: #d50505;
        }

        .footer-bottom-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
          color: #000000;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-top: 1px solid rgba(0,0,0,0.1);
          padding-top: 40px;
        }

        .social-links {
          display: flex;
          gap: 40px;
        }

        .social-links a {
          text-decoration: none;
          color: #000;
          transition: 0.3s ease;
        }

        .social-links a:hover {
          color: #d50505;
        }

        @media (max-width: 768px) {
          .footer {
            padding: 80px 0;
            min-height: auto;
          }
          .footer-main-logo {
            height: 80px;
          }
          .footer-nav-horizontal {
            flex-direction: column;
            align-items: center;
            gap: 20px;
            margin-bottom: 40px;
          }
          .footer-bottom-bar {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
        }
      `}} />
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Shield, Eye, Lock, Globe, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="policy-page">
      <section className="policy-hero">
        <div className="container">
          <Shield size={60} className="policy-icon" />
          <h1>Privacy <span className="text-brand-red">Policy</span></h1>
          <p className="last-updated">Last Updated: April 2026</p>
        </div>
      </section>

      <section className="policy-content">
        <div className="container narrow">
          <div className="policy-block">
            <h2>1. Introduction</h2>
            <p>
              Welcome to Amarkanth Group (Amarkanth & Tapovan). Your privacy is of paramount importance to us. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
              you visit our website and purchase our products.
            </p>
          </div>

          <div className="policy-block">
            <div className="icon-title">
              <Eye size={24} />
              <h2>2. Information We Collect</h2>
            </div>
            <p>
              We collect information that you provide directly to us when you:
            </p>
            <ul>
              <li>Place an order for our tea products.</li>
              <li>Sign up for our newsletter or promotional offers.</li>
              <li>Contact our customer support team.</li>
              <li>Participate in surveys or contests (like the Thailand Trip promotion).</li>
            </ul>
            <p>
              This information may include your name, email address, shipping address, billing address, 
              phone number, and payment information.
            </p>
          </div>

          <div className="policy-block">
            <div className="icon-title">
              <Globe size={24} />
              <h2>3. How We Use Your Information</h2>
            </div>
            <p>
              We use the collected information for various purposes, including:
            </p>
            <ul>
              <li>To process and fulfill your orders, including sending emails to confirm your order status and shipment.</li>
              <li>To communicate with you about products, services, offers, and promotions.</li>
              <li>To improve our website, products, and overall customer experience.</li>
              <li>To prevent fraudulent transactions and monitor against theft.</li>
              <li>To comply with legal obligations and protect our rights.</li>
            </ul>
          </div>

          <div className="policy-block">
            <div className="icon-title">
              <Lock size={24} />
              <h2>4. Information Security</h2>
            </div>
            <p>
              We implement a variety of security measures to maintain the safety of your personal information. 
              Your personal information is contained behind secured networks and is only accessible by a limited 
              number of persons who have special access rights to such systems. All sensitive/credit information 
              you supply is encrypted via Secure Socket Layer (SSL) technology.
            </p>
          </div>

          <div className="policy-block">
            <h2>5. Cookies</h2>
            <p>
              Our website uses cookies to enhance your experience. Cookies are small files that a site or its 
              service provider transfers to your computer's hard drive through your Web browser that enables 
              the site's or service provider's systems to recognize your browser and capture and remember 
              certain information.
            </p>
          </div>

          <div className="policy-block">
            <div className="icon-title">
              <Mail size={24} />
              <h2>6. Contact Us</h2>
            </div>
            <p>
              If you have any questions regarding this Privacy Policy, you may contact us using the information below:
            </p>
            <div className="contact-info">
              <p><strong>Amarkanth Group</strong></p>
              <p>Email: support@amarkanth.com</p>
              <p>Phone: +91 [Insert Phone Number]</p>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .policy-page {
          padding-top: 100px;
          background: #fff;
          color: #333;
          font-family: 'Inter', sans-serif;
        }

        .policy-hero {
          background: #fcfcfc;
          padding: 80px 0;
          text-align: center;
          border-bottom: 1px solid #eee;
        }

        .policy-icon {
          color: var(--brand-red);
          margin-bottom: 20px;
        }

        .policy-hero h1 {
          font-size: 3.5rem;
          font-weight: 900;
          margin-bottom: 10px;
          letter-spacing: -1px;
        }

        .last-updated {
          color: #888;
          font-weight: 600;
        }

        .policy-content {
          padding: 80px 0;
        }

        .container.narrow {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .policy-block {
          margin-bottom: 50px;
        }

        .icon-title {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
          color: var(--brand-red);
        }

        .policy-block h2 {
          font-size: 1.8rem;
          font-weight: 800;
          color: #111;
          margin: 0;
        }

        .policy-block p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #555;
          margin-bottom: 20px;
        }

        .policy-block ul {
          margin-bottom: 20px;
          padding-left: 20px;
        }

        .policy-block li {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #555;
          margin-bottom: 10px;
          list-style-type: disc;
        }

        .contact-info {
          background: #f9f9f9;
          padding: 30px;
          border-radius: 15px;
          border-left: 5px solid var(--brand-red);
        }

        .contact-info p {
          margin-bottom: 5px;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .policy-hero h1 { font-size: 2.5rem; }
          .policy-block h2 { font-size: 1.5rem; }
        }
      `}} />
    </div>
  );
};

export default PrivacyPolicy;

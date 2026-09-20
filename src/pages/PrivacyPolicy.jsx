import React from 'react';
import { Shield, Eye, Lock, Globe, Mail, FileText, UserCheck, KeyRound } from 'lucide-react';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  const privacySchemas = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.amarkanth.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Privacy Policy",
          "item": "https://www.amarkanth.com/privacy-policy"
        }
      ]
    }
  ];

  return (
    <div className="policy-page">
      <SEO
        title="Privacy Policy | Amarkanth Tea Group"
        description="Amarkanth Tea Group Privacy Policy. Learn how Patidar Tea Company securely collects, encrypts, and protects your personal and payment information."
        keywords="privacy policy, data protection, Amarkanth privacy, SSL security, data rights"
        canonical="https://www.amarkanth.com/privacy-policy"
        schema={privacySchemas}
      />
      <section className="policy-hero">
        <div className="container">
          <Shield size={60} className="policy-icon" />
          <h1>Privacy <span className="text-brand-red">Policy</span></h1>
          <p className="last-updated">Last Updated: September 2026 | Google Merchant & IT Act Compliant</p>
        </div>
      </section>

      <section className="policy-content">
        <div className="container narrow">
          {/* Summary Card */}
          <div className="policy-summary-card">
            <h3>🔒 Our Privacy Guarantee at a Glance</h3>
            <div className="summary-grid">
              <div className="summary-item">
                <span className="label">Data Selling</span>
                <span className="value">We NEVER sell your data</span>
              </div>
              <div className="summary-item">
                <span className="label">Encryption</span>
                <span className="value">256-Bit SSL Secured</span>
              </div>
              <div className="summary-item">
                <span className="label">Payment Security</span>
                <span className="value">PCI-DSS Compliant</span>
              </div>
              <div className="summary-item">
                <span className="label">Your Control</span>
                <span className="value">Delete/Export Anytime</span>
              </div>
            </div>
          </div>

          <div className="policy-block">
            <h2>1. Introduction & Business Entity</h2>
            <p>
              Welcome to <strong>Amarkanth Tea Group</strong> (operated legally under <strong>Patidar Tea Company</strong>, 
              Anjad, Madhya Pradesh). We are committed to safeguarding the privacy and personal data of every visitor 
              and customer on <strong>www.amarkanth.com</strong>.
            </p>
            <p>
              This Privacy Policy details how we collect, store, process, transfer, and protect your information 
              in accordance with the Information Technology Act 2000 (India), Digital Personal Data Protection (DPDP) Act, 
              and Google Merchant Center transparency standards.
            </p>
          </div>

          <div className="policy-block">
            <div className="icon-title">
              <Eye size={24} />
              <h2>2. Information We Collect</h2>
            </div>
            <p>We collect only necessary personal data required to fulfill tea orders and provide seamless customer service:</p>
            <ul>
              <li><strong>Personal Identifiers:</strong> Name, delivery shipping address, billing address, phone number, and email address.</li>
              <li><strong>Order & Transaction Details:</strong> Products purchased, order amounts, payment status (prepaid or Cash on Delivery). Note: We do NOT store card numbers or banking PINs on our servers.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, operating system, and referral source collected via cookies and web analytics tools (Google Analytics & Microsoft Clarity).</li>
              <li><strong>Customer Support Communications:</strong> WhatsApp messages, support emails, and feedback forms submitted to us.</li>
            </ul>
          </div>

          <div className="policy-block">
            <div className="icon-title">
              <Globe size={24} />
              <h2>3. Purpose & How We Use Your Information</h2>
            </div>
            <p>Your information is used strictly for the following legitimate commercial purposes:</p>
            <ul>
              <li>To process, ship, and deliver your tea packages via courier partners.</li>
              <li>To send order confirmation, dispatch tracking SMS/WhatsApp messages, and customer support updates.</li>
              <li>To process Cash on Delivery (COD) verifications and refunds.</li>
              <li>To improve website performance, user navigation, and product availability.</li>
              <li>To prevent fraudulent transactions, fake orders, or security threats.</li>
            </ul>
          </div>

          <div className="policy-block">
            <div className="icon-title">
              <Lock size={24} />
              <h2>4. Data Protection & Encryption Security</h2>
            </div>
            <p>
              We implement industrial-grade security controls to protect your personal data against unauthorized access, alteration, disclosure, or destruction:
            </p>
            <ul>
              <li><strong>SSL Encryption:</strong> All data transmitted between your browser and our site is encrypted using 256-bit Secure Socket Layer (SSL) technology.</li>
              <li><strong>Payment Security:</strong> Online payment processing is handled by PCI-DSS certified payment gateways. No full credit/debit card credentials are stored on our servers.</li>
              <li><strong>Restricted Access:</strong> Access to customer order records is strictly restricted to authorized logistics and customer service personnel.</li>
            </ul>
          </div>

          <div className="policy-block">
            <div className="icon-title">
              <UserCheck size={24} />
              <h2>5. Third-Party Sharing & Disclosure</h2>
            </div>
            <p>
              <strong>We do NOT sell, rent, trade, or monetize your personal information to third parties.</strong>
            </p>
            <p>We share data only with trusted operational service partners bound by confidentiality agreements:</p>
            <ul>
              <li><strong>Logistics Partners:</strong> Courier companies (e.g., Delhivery, Bluedart, India Post) to deliver physical packages.</li>
              <li><strong>Payment Gateways:</strong> RBI-authorized payment processors for completing transactions.</li>
              <li><strong>Analytics Services:</strong> Aggregated, non-personally identifiable site usage statistics via Google Tag Manager and Microsoft Clarity.</li>
              <li><strong>Legal Requirements:</strong> Disclosures mandated by Indian courts, law enforcement agencies, or legal regulations.</li>
            </ul>
          </div>

          <div className="policy-block">
            <div className="icon-title">
              <KeyRound size={24} />
              <h2>6. Cookies & Web Analytics Policy</h2>
            </div>
            <p>
              Our website uses cookies (small text files saved on your browser) to maintain cart sessions, remember user preferences, 
              and analyze anonymous traffic flow. You may disable cookies in your browser settings; however, certain website features (like checkout) 
              may require cookies to function accurately.
            </p>
          </div>

          <div className="policy-block">
            <div className="icon-title">
              <FileText size={24} />
              <h2>7. Your Data Rights & Control</h2>
            </div>
            <p>Under applicable privacy regulations, you have the right to:</p>
            <ul>
              <li>Request access to the personal data we hold about you.</li>
              <li>Request correction or updating of inaccurate delivery addresses or contact details.</li>
              <li>Request full erasure/deletion of your personal customer records from our active databases.</li>
              <li>Opt out of promotional emails or WhatsApp updates at any time by replying "STOP".</li>
            </ul>
          </div>

          <div className="policy-block">
            <div className="icon-title">
              <Mail size={24} />
              <h2>8. Privacy Contact & Grievance Officer</h2>
            </div>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, 
              please contact our designated Privacy Officer:
            </p>
            <div className="contact-info">
              <p><strong>Amarkanth Tea Group (Patidar Tea Company)</strong></p>
              <p><strong>Attn:</strong> Data Privacy Officer</p>
              <p><strong>Address:</strong> Main Road, Anjad, District Barwani, Madhya Pradesh - 451556, India.</p>
              <p><strong>Support Email:</strong> support@amarkanth.com / patidarteacompany@gmail.com</p>
              <p><strong>Phone / WhatsApp:</strong> +91-9893922659 / +91-7879111227</p>
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
          color: #666;
          font-weight: 600;
        }

        .policy-content {
          padding: 60px 0 80px;
        }

        .container.narrow {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .policy-summary-card {
          background: #fff0f0;
          border: 2px solid var(--brand-red);
          border-radius: 16px;
          padding: 30px;
          margin-bottom: 50px;
        }

        .policy-summary-card h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.4rem;
          font-weight: 800;
          color: #111;
          margin-top: 0;
          margin-bottom: 20px;
        }

        .summary-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .summary-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .summary-item .label {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #777;
          font-weight: 700;
        }

        .summary-item .value {
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--brand-red);
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
          margin-bottom: 8px;
          font-size: 1rem;
          color: #333;
        }

        @media (max-width: 768px) {
          .policy-hero h1 { font-size: 2.2rem; }
          .summary-grid { grid-template-columns: 1fr; }
          .policy-block h2 { font-size: 1.4rem; }
        }
      `}} />
    </div>
  );
};

export default PrivacyPolicy;

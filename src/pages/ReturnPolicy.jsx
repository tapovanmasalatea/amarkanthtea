import React from 'react';
import { RotateCcw, PackageCheck, Truck, RefreshCw, AlertCircle, CheckCircle2, MapPin } from 'lucide-react';
import SEO from '../components/SEO';

const ReturnPolicy = () => {
  const returnSchemas = [
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
          "name": "Return Policy",
          "item": "https://www.amarkanth.com/return-policy"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MerchantReturnPolicy",
      "applicableCountry": "IN",
      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
      "merchantReturnDays": 7,
      "returnMethod": "https://schema.org/ReturnByMail",
      "returnFees": "https://schema.org/FreeReturn",
      "refundType": "https://schema.org/FullRefund",
      "restockingFee": {
        "@type": "MonetaryAmount",
        "value": "0",
        "currency": "INR"
      },
      "returnShippingFeesAmount": {
        "@type": "MonetaryAmount",
        "value": "0",
        "currency": "INR"
      },
      "customerRemorseReturnFees": "https://schema.org/FreeReturn",
      "itemCondition": "https://schema.org/NewCondition"
    }
  ];

  return (
    <div className="policy-page">
      <SEO
        title="Return & Replacement Policy | Amarkanth Tea Group"
        description="Amarkanth Tea Group 7-Day Product Return & Replacement Policy. Enjoy 100% Free return shipping, ₹0 restocking fees, and reverse courier pickup across India."
        keywords="return policy, product returns, Amarkanth return policy, free returns, tea return terms"
        canonical="https://www.amarkanth.com/return-policy"
        schema={returnSchemas}
      />
      <section className="policy-hero">
        <div className="container">
          <RotateCcw size={60} className="policy-icon" />
          <h1>Product Return <span className="text-brand-red">Policy</span></h1>
          <p className="last-updated">Last Updated: September 2026 | Google Merchant Center Compliant</p>
        </div>
      </section>

      <section className="policy-content">
        <div className="container narrow">
          {/* Summary Box */}
          <div className="policy-summary-card">
            <h3>📦 Product Return Policy at a Glance</h3>
            <div className="summary-grid">
              <div className="summary-item">
                <span className="label">Return Window</span>
                <span className="value">7 Days from delivery</span>
              </div>
              <div className="summary-item">
                <span className="label">Return Shipping Fee</span>
                <span className="value">FREE (₹0 Charge)</span>
              </div>
              <div className="summary-item">
                <span className="label">Restocking Fee</span>
                <span className="value">₹0 (No fee)</span>
              </div>
              <div className="summary-item">
                <span className="label">Return Pickup</span>
                <span className="value">Doorstep Reverse Pickup</span>
              </div>
            </div>
          </div>

          <div className="policy-block">
            <h2>1. Overview</h2>
            <p>
              At <strong>Amarkanth Tea Group (Patidar Tea Company)</strong>, customer satisfaction and product quality are our highest priorities. 
              We offer a hassle-free <strong>7-Day Product Return & Replacement Policy</strong> for all tea purchases made through 
              <strong> www.amarkanth.com</strong>.
            </p>
          </div>

          <div className="policy-block">
            <div className="icon-title">
              <PackageCheck size={24} />
              <h2>2. Return Window & Eligibility Criteria</h2>
            </div>
            <p>
              You may initiate a return or replacement request within <strong>7 days</strong> of package delivery if your order satisfies any of the following:
            </p>
            <ul>
              <li><strong>Damaged in Transit:</strong> Outer pouch or inner foil seal was crushed, cut, or punctured during delivery.</li>
              <li><strong>Defective Product:</strong> Compromised vacuum seal, humidity exposure, or abnormal flavor profile.</li>
              <li><strong>Incorrect Product:</strong> Wrong blend size (250g, 500g, 1kg) or wrong tea variant delivered.</li>
              <li><strong>Unopened / Mind Change:</strong> Unopened products with original outer seal intact returned within 7 days.</li>
            </ul>
          </div>

          <div className="policy-block">
            <div className="icon-title">
              <Truck size={24} />
              <h2>3. Return Shipping Costs & Method</h2>
            </div>
            <ul>
              <li><strong>Return Shipping Fee:</strong> 100% <strong>FREE Return Shipping</strong>. We cover all return shipping costs.</li>
              <li><strong>Restocking Fee:</strong> <strong>₹0 (Zero) restocking fee</strong>. We do not deduct any handling or restocking charges.</li>
              <li><strong>Return Method:</strong> Returns are accepted via courier mail or doorstep reverse pickup arranged by our logistics team across India.</li>
            </ul>
          </div>

          <div className="policy-block">
            <div className="icon-title">
              <RefreshCw size={24} />
              <h2>4. Step-by-Step Return Process</h2>
            </div>
            <ol className="steps-list">
              <li><strong>Submit Request:</strong> Contact us within 7 days of delivery via email at <strong>support@amarkanth.com</strong> or WhatsApp at <strong>+91-7879111227</strong> / <strong>+91-9893922659</strong>.</li>
              <li><strong>Provide Details:</strong> Share your Order ID, phone number, and brief photo/video showing the product condition.</li>
              <li><strong>Pickup & Inspection:</strong> Our courier partner will pick up the package from your doorstep within 24-48 hours.</li>
              <li><strong>Resolution:</strong> Upon receipt and quality check at our warehouse, a replacement or full refund is dispatched immediately.</li>
            </ol>
          </div>

          <div className="policy-block">
            <div className="icon-title">
              <MapPin size={24} />
              <h2>5. Physical Return Warehouse Address</h2>
            </div>
            <div className="contact-info">
              <p><strong>Patidar Tea Company (Amarkanth Tea Group)</strong></p>
              <p><strong>Attn:</strong> Returns Department</p>
              <p>Main Road, Anjad, District Barwani, Madhya Pradesh - 451556, India.</p>
              <p><strong>Email:</strong> support@amarkanth.com / patidarteacompany@gmail.com</p>
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

        .policy-block ul, .policy-block ol {
          margin-bottom: 20px;
          padding-left: 20px;
        }

        .policy-block li {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #555;
          margin-bottom: 10px;
        }

        .steps-list li {
          font-weight: 600;
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

export default ReturnPolicy;

import React from 'react';
import { RotateCcw, PackageCheck, AlertCircle, CreditCard, Truck, RefreshCw, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

const RefundPolicy = () => {
  const refundSchemas = [
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
          "name": "Return & Refund Policy",
          "item": "https://www.amarkanth.com/refund-policy"
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
        title="Return & Refund Policy | Amarkanth Tea Group"
        description="Amarkanth Tea Group 7-Day Return, Replacement & Refund Policy. Free return shipping for damaged/defective items, ₹0 restocking fees, 5-7 days refund processing."
        keywords="refund policy, return policy, Amarkanth refunds, tea return policy, Google Merchant return policy"
        canonical="https://www.amarkanth.com/refund-policy"
        schema={refundSchemas}
      />
      <section className="policy-hero">
        <div className="container">
          <RotateCcw size={60} className="policy-icon" />
          <h1>Return & Refund <span className="text-brand-red">Policy</span></h1>
          <p className="last-updated">Last Updated: September 2026 | Google Merchant Center Compliant</p>
        </div>
      </section>

      <section className="policy-content">
        <div className="container narrow">
          {/* Summary Box for Google Merchant Reviewers */}
          <div className="policy-summary-card">
            <h3>⚡ Return & Refund Policy Overview</h3>
            <div className="summary-grid">
              <div className="summary-item">
                <span className="label">Return Window</span>
                <span className="value">7 Days from delivery</span>
              </div>
              <div className="summary-item">
                <span className="label">Return Shipping Fee</span>
                <span className="value">FREE (No charge)</span>
              </div>
              <div className="summary-item">
                <span className="label">Restocking Fee</span>
                <span className="value">₹0 (Zero fee)</span>
              </div>
              <div className="summary-item">
                <span className="label">Refund Processing Time</span>
                <span className="value">5-7 Business Days</span>
              </div>
              <div className="summary-item">
                <span className="label">Return Method</span>
                <span className="value">By Courier / Mail</span>
              </div>
              <div className="summary-item">
                <span className="label">Refund Method</span>
                <span className="value">Original Method / Bank Transfer (COD)</span>
              </div>
            </div>
          </div>

          <div className="policy-block">
            <h2>1. Overview & Commitment</h2>
            <p>
              At <strong>Amarkanth Tea Group (Patidar Tea Company)</strong>, we ensure that every batch of Assam CTC tea 
              and Tapovan wellness tea meets strict FSSAI food safety and quality standards. We offer a transparent 
              <strong> 7-Day Return, Replacement, and Refund Guarantee</strong> for all orders placed through our website.
            </p>
          </div>

          <div className="policy-block">
            <div className="icon-title">
              <PackageCheck size={24} />
              <h2>2. Return Window & Eligibility</h2>
            </div>
            <p>
              Customers have <strong>7 days</strong> from the date of package delivery to request a return or replacement under the following conditions:
            </p>
            <ul>
              <li><strong>Damaged in Transit:</strong> Item outer packaging or inner seal was damaged or torn upon arrival.</li>
              <li><strong>Defective Product:</strong> Quality defect, seal compromise, or taste anomaly.</li>
              <li><strong>Incorrect Product Delivered:</strong> Wrong blend size, quantity, or variant delivered.</li>
              <li><strong>Unopened Product:</strong> Items in original, unopened condition with outer seals intact.</li>
            </ul>
          </div>

          <div className="policy-block">
            <div className="icon-title">
              <Truck size={24} />
              <h2>3. Return Shipping Costs & Method</h2>
            </div>
            <ul>
              <li><strong>Defective, Damaged, or Incorrect Items:</strong> 100% <strong>FREE Return Shipping</strong>. We arrange reverse courier pickup at no cost to you or reimburse your return courier costs.</li>
              <li><strong>Customer Remorse / Mind Change:</strong> FREE return pickup for unopened products returned within 7 days.</li>
              <li><strong>Restocking Fee:</strong> We charge <strong>₹0 (Zero) restocking fee</strong> on all returns.</li>
              <li><strong>Return Method:</strong> Returns are accepted via courier mail or our reverse pickup service partners across India.</li>
            </ul>
          </div>

          <div className="policy-block">
            <div className="icon-title">
              <CreditCard size={24} />
              <h2>4. Refund Processing & Refund Methods</h2>
            </div>
            <p>
              Once your returned package is received at our warehouse and inspected, your refund will be processed within <strong>5 to 7 business days</strong>:
            </p>
            <ul>
              <li><strong>Prepaid Orders (UPI, Credit/Debit Card, Net Banking):</strong> Refund credited back directly to the original payment source.</li>
              <li><strong>Cash on Delivery (COD) Orders:</strong> Refund credited directly to your preferred Bank Account (NEFT/IMPS) or UPI ID provided during the return request.</li>
            </ul>
          </div>

          <div className="policy-block">
            <div className="icon-title">
              <RefreshCw size={24} />
              <h2>5. How to Initiate a Return / Claim</h2>
            </div>
            <p>To request a return or replacement within 7 days of delivery, follow these steps:</p>
            <ol className="steps-list">
              <li>Email us at <strong>support@amarkanth.com</strong> or WhatsApp us at <strong>+91-7879111227</strong> / <strong>+91-9893922659</strong>.</li>
              <li>Provide your Order ID, phone number, and a photo/video showing the damaged or incorrect item.</li>
              <li>Our support team will generate a prepaid return shipping label or arrange reverse pickup within 24-48 hours.</li>
            </ol>
          </div>

          <div className="policy-block">
            <div className="icon-title">
              <AlertCircle size={24} />
              <h2>6. Non-Returnable Items</h2>
            </div>
            <p>The following items are exempt from returns:</p>
            <ul>
              <li>Products returned after the 7-day delivery window has expired.</li>
              <li>Products that have been consumed more than 20% unless accompanied by a verified lab test report or defect claim.</li>
              <li>Free gift items or sample promotional packs.</li>
            </ul>
          </div>

          <div className="policy-block">
            <h2>7. Physical Return Address & Support Details</h2>
            <p>
              <strong>Return Warehouse Address:</strong><br />
              Patidar Tea Company (Amarkanth Tea Group)<br />
              Main Road, Anjad, District Barwani,<br />
              Madhya Pradesh - 451556, India.<br />
              <strong>Customer Care Email:</strong> support@amarkanth.com / patidarteacompany@gmail.com<br />
              <strong>Customer Care Phone:</strong> +91-9893922659 / +91-7879111227 (Mon-Sat, 9:00 AM - 7:00 PM IST)
            </p>
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

        @media (max-width: 768px) {
          .policy-hero h1 { font-size: 2.2rem; }
          .summary-grid { grid-template-columns: 1fr; }
          .policy-block h2 { font-size: 1.4rem; }
        }
      `}} />
    </div>
  );
};

export default RefundPolicy;

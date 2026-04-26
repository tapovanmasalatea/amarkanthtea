import React from 'react';
import { RotateCcw, PackageCheck, AlertCircle, CreditCard, Truck } from 'lucide-react';

const RefundPolicy = () => {
  return (
    <div className="policy-page">
      <section className="policy-hero">
        <div className="container">
          <RotateCcw size={60} className="policy-icon" />
          <h1>Return & Refund <span className="text-brand-red">Policy</span></h1>
          <p className="last-updated">Last Updated: April 2026</p>
        </div>
      </section>

      <section className="policy-content">
        <div className="container narrow">
          <div className="policy-block">
            <h2>1. Overview</h2>
            <p>
              At Amarkanth Group, we take pride in the quality of our tea. However, we understand that 
              situations may arise where you need to return a product. This policy outlines the conditions 
              under which returns and refunds are processed.
            </p>
          </div>

          <div className="policy-block">
            <div className="icon-title">
              <PackageCheck size={24} />
              <h2>2. Eligibility for Returns</h2>
            </div>
            <p>
              Due to the perishable nature of tea, we can only accept returns under the following conditions:
            </p>
            <ul>
              <li>The product was damaged during transit.</li>
              <li>The wrong product was delivered.</li>
              <li>The product has a quality defect (must be reported within 48 hours of delivery).</li>
            </ul>
            <p>
              To be eligible for a return, the product must be in its original packaging, and you must 
              provide the original invoice or proof of purchase.
            </p>
          </div>

          <div className="policy-block">
            <div className="icon-title">
              <AlertCircle size={24} />
              <h2>3. Non-Returnable Items</h2>
            </div>
            <p>
              We cannot accept returns for:
            </p>
            <ul>
              <li>Products that have been opened or consumed (unless there is a quality defect).</li>
              <li>Products purchased during clearance sales or special promotions.</li>
              <li>Free samples or gift items (such as the Tapovan Tester or Thailand Trip scratch cards).</li>
            </ul>
          </div>

          <div className="policy-block">
            <div className="icon-title">
              <CreditCard size={24} />
              <h2>4. Refund Process</h2>
            </div>
            <p>
              Once your return is received and inspected, we will notify you of the approval or rejection of 
              your refund. If approved, your refund will be processed, and a credit will automatically be 
              applied to your original method of payment within 7-10 business days.
            </p>
          </div>

          <div className="policy-block">
            <div className="icon-title">
              <Truck size={24} />
              <h2>5. Shipping Costs</h2>
            </div>
            <p>
              You will be responsible for paying for your own shipping costs for returning your item, 
              unless the return is due to a mistake on our part (damaged or wrong item). Shipping costs 
              are non-refundable.
            </p>
          </div>

          <div className="policy-block">
            <h2>6. Contact for Returns</h2>
            <p>
              To initiate a return, please contact our support team at <strong>support@amarkanth.com</strong> 
              with your order number and photos of the product if it was damaged.
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

        @media (max-width: 768px) {
          .policy-hero h1 { font-size: 2.5rem; }
          .policy-block h2 { font-size: 1.5rem; }
        }
      `}} />
    </div>
  );
};

export default RefundPolicy;

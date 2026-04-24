import React from 'react';
import { motion } from 'framer-motion';

const LegalPage = ({ title, content }) => {
  return (
    <div className="legal-page">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="legal-content"
        >
          <h1 className="legal-title">{title}</h1>
          <div className="legal-text" dangerouslySetInnerHTML={{ __html: content }} />
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .legal-page {
          padding: 180px 0 100px;
          background: #fff;
          color: #333;
          line-height: 1.8;
          font-family: 'Inter', sans-serif;
        }
        .container { max-width: 800px; margin: 0 auto; padding: 0 20px; }
        .legal-title { 
          font-family: 'Outfit', sans-serif; 
          font-size: 3rem; 
          font-weight: 900; 
          margin-bottom: 50px; 
          color: #111; 
          border-bottom: 4px solid #d50505;
          display: inline-block;
        }
        .legal-text h2 { 
          font-family: 'Outfit', sans-serif; 
          font-size: 1.5rem; 
          font-weight: 800; 
          margin: 40px 0 20px; 
          color: #000;
        }
        .legal-text p { margin-bottom: 20px; color: #555; }
        .legal-text ul { margin-bottom: 20px; padding-left: 20px; }
        .legal-text li { margin-bottom: 10px; color: #555; }
        
        @media (max-width: 768px) {
          .legal-page { padding: 120px 0 60px; }
          .legal-title { font-size: 2rem; }
        }
      `}} />
    </div>
  );
};

export const PrivacyPolicy = () => (
  <LegalPage 
    title="Privacy Policy"
    content={`
      <p>Last Updated: April 2024</p>
      <p>At Amarkanth Group, we value your privacy and are committed to protecting your personal data. This policy outlines how we collect and use your information.</p>
      
      <h2>1. Information We Collect</h2>
      <p>We collect information you provide directly to us when you place an order, including your name, shipping address, phone number, and payment information.</p>
      
      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To process and fulfill your orders.</li>
        <li>To communicate with you about your purchase.</li>
        <li>To improve our website and customer service.</li>
      </ul>
      
      <h2>3. Data Security</h2>
      <p>We implement a variety of security measures to maintain the safety of your personal information. Your data is never sold to third parties.</p>
    `}
  />
);

export const TermsConditions = () => (
  <LegalPage 
    title="Terms & Conditions"
    content={`
      <h2>1. Introduction</h2>
      <p>By accessing this website, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.</p>
      
      <h2>2. Product Accuracy</h2>
      <p>We strive to display our products as accurately as possible. However, the actual colors and packaging may vary slightly from what you see on your screen.</p>
      
      <h2>3. Limitation of Liability</h2>
      <p>Amarkanth Group shall not be liable for any indirect, incidental, or consequential damages arising out of the use of our products.</p>
    `}
  />
);

export const RefundPolicy = () => (
  <LegalPage 
    title="Refund & Cancellation"
    content={`
      <h2>1. Return Policy</h2>
      <p>We offer a 100% Quality Guarantee. If you receive a damaged or defective product, please contact us within 48 hours of delivery.</p>
      
      <h2>2. Verified Concerns</h2>
      <p>Every batch is lab-tested. For verified quality issues, we offer a full replacement or refund, no questions asked.</p>
      
      <h2>3. Cancellations</h2>
      <p>Orders can be cancelled within 12 hours of placement or before they are dispatched, whichever is earlier.</p>
    `}
  />
);

export const ShippingPolicy = () => (
  <LegalPage 
    title="Shipping Policy"
    content={`
      <h2>1. Dispatch Timeline</h2>
      <p>All confirmed orders are dispatched within 48 hours from our central warehouse in Indore.</p>
      
      <h2>2. Delivery Estimates</h2>
      <ul>
        <li>Tier-1 Cities: 3-5 business days</li>
        <li>Rest of India: 5-7 business days</li>
      </ul>
      
      <h2>3. Order Tracking</h2>
      <p>Once your order is shipped, you will receive a tracking link via SMS and Email to monitor your delivery in real-time.</p>
    `}
  />
);

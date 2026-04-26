import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Package, Truck, Phone, Mail, ArrowLeft, Gift, Sparkles, Ticket } from 'lucide-react';
import logoImg from '../assets/logo.webp';

const ThankYou = () => {
  const location = useLocation();
  const { productData, total, orderId } = location.state || {
    productData: { name: "Amarkanth Premium CTC", variant: "1kg Box", price: 740, quantity: 1, image: "/assets/amarkanth.webp" },
    total: 740,
    orderId: "AMK-" + Math.random().toString(36).substr(2, 9).toUpperCase()
  };

  return (
    <div className="thank-you-page">
      <div className="container narrow">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="thank-you-card"
        >
          {/* Header Section */}
          <div className="card-header">
            <div className="logo-box">
              <img src={logoImg} alt="Amarkanth Group" className="thank-you-logo" />
            </div>
            <div className="success-icon-v2">
              <CheckCircle size={50} color="#2e7d32" />
            </div>
            <h1>Order Placed!</h1>
            <p className="order-id-badge">Order ID: {orderId}</p>
            <p className="conf-text">Thank you for choosing Amarkanth. We've received your order and are starting to brew something special for you.</p>
          </div>

          <div className="card-body">
            {/* Order Details Grid */}
            <section className="ty-section">
              <h3 className="ty-title">Order Details</h3>
              <div className="ty-items-list">
                {/* Main Product */}
                <div className="ty-item">
                  <div className="ty-p-img">
                    <img src={productData.image} alt={productData.name} />
                  </div>
                  <div className="ty-p-info">
                    <strong>{productData.name}</strong>
                    <span>{productData.variant} × {productData.quantity}</span>
                  </div>
                  <div className="ty-p-price">₹{productData.price * productData.quantity}</div>
                </div>

                {/* Gifts */}
                <div className="ty-item gift">
                  <div className="ty-p-img gift-box">
                    <Sparkles size={20} color="#d50505" />
                  </div>
                  <div className="ty-p-info">
                    <strong>Free Tea Tester Pack</strong>
                    <span className="gift-label">Complimentary Gift</span>
                  </div>
                  <div className="ty-p-price free">FREE</div>
                </div>

                <div className="ty-item gift">
                  <div className="ty-p-img gift-box">
                    <Ticket size={20} color="#d50505" />
                  </div>
                  <div className="ty-p-info">
                    <strong>Thailand Trip Scratch Card</strong>
                    <span className="gift-label">Limited Time Offer</span>
                  </div>
                  <div className="ty-p-price free">FREE</div>
                </div>
              </div>

              <div className="ty-total-row">
                <span>Amount Paid</span>
                <strong>₹{total}</strong>
              </div>
            </section>

            {/* Delivery Info */}
            <section className="ty-section delivery-card">
              <div className="ty-info-row">
                <Truck size={24} color="#d50505" />
                <div className="ty-info-text">
                  <strong>Expected Delivery</strong>
                  <p>5-6 Business Days</p>
                </div>
              </div>
            </section>

            {/* Contact Support */}
            <section className="ty-section contact-card">
              <p className="contact-label">For more information contact on</p>
              <div className="ty-contact-grid">
                <a href="tel:+917879111227" className="ty-contact-link">
                  <Phone size={18} /> +91 7879111227
                </a>
                <a href="mailto:ptc.anjad@gmail.com" className="ty-contact-link">
                  <Mail size={18} /> ptc.anjad@gmail.com
                </a>
              </div>
            </section>
          </div>

          <div className="card-footer">
            <Link to="/shop" className="btn-shop-more">
              <ArrowLeft size={18} /> Continue Shopping
            </Link>
          </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .thank-you-page {
          padding: 100px 0 60px;
          background: #fdfdfd;
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .container.narrow { max-width: 500px; margin: 0 auto; padding: 0 20px; width: 100%; }

        .thank-you-card {
          background: white;
          border-radius: 28px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.05);
          overflow: hidden;
          border: 1px solid rgba(0,0,0,0.02);
        }

        .card-header { padding: 25px 40px 15px; text-align: center; background: #fffafa; border-bottom: 1px solid #f8f8f8; }
        .logo-box { margin-bottom: 12px; }
        .thank-you-logo { height: 45px; object-fit: contain; }
        .success-icon-v2 { margin-bottom: 8px; }

        .card-header h1 { font-size: 1.75rem; font-weight: 900; color: #111; margin: 0 0 8px; font-family: 'Outfit', sans-serif; }
        .order-id-badge { display: inline-block; background: #111; color: white; padding: 5px 12px; border-radius: 50px; font-weight: 800; font-size: 0.75rem; letter-spacing: 0.5px; margin-bottom: 12px; }
        .conf-text { font-size: 0.85rem; color: #666; line-height: 1.5; max-width: 360px; margin: 0 auto; font-weight: 500; }

        .card-body { padding: 15px 35px; }
        .ty-section { margin-bottom: 15px; }
        .ty-title { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1.5px; color: #aaa; margin-bottom: 10px; font-weight: 800; }

        .ty-items-list { display: grid; gap: 8px; margin-bottom: 10px; }
        .ty-item { display: flex; align-items: center; gap: 10px; }
        .ty-p-img { width: 45px; height: 45px; background: #f9f9f9; border-radius: 10px; display: flex; align-items: center; justify-content: center; }
        .ty-p-img img { width: 80%; height: 80%; object-fit: contain; }
        .ty-p-info { flex: 1; }
        .ty-p-info strong { display: block; font-size: 0.9rem; color: #111; line-height: 1.2; }
        .ty-p-info span { font-size: 0.75rem; color: #888; font-weight: 600; }
        .ty-p-price { font-weight: 800; color: #111; font-size: 0.9rem; }

        .gift { background: #fffafa; padding: 8px; border-radius: 12px; border: 1px dashed #ffdada; }
        .gift-box { background: white; }
        .gift-label { color: #d50505 !important; font-weight: 800 !important; font-size: 0.7rem !important; }
        .free { color: #2e7d32; font-weight: 900; }

        .ty-total-row { padding-top: 12px; border-top: 1.5px solid #f5f5f5; display: flex; justify-content: space-between; align-items: center; }
        .ty-total-row span { font-weight: 700; color: #666; font-size: 0.85rem; }
        .ty-total-row strong { font-size: 1.25rem; color: #d50505; font-weight: 900; }

        .delivery-card { background: #f9f9f9; padding: 12px 15px; border-radius: 14px; border: 1px solid #f0f0f0; margin-bottom: 15px; }
        .ty-info-row { display: flex; gap: 12px; align-items: center; }
        .ty-info-text strong { display: block; font-size: 0.85rem; color: #111; font-weight: 800; }
        .ty-info-text p { margin: 0; font-size: 0.8rem; color: #666; font-weight: 600; }

        .contact-card { text-align: center; margin-bottom: 0; }
        .contact-label { font-size: 0.7rem; color: #aaa; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
        .ty-contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
        .ty-contact-link { text-decoration: none; background: #fff; border: 1.5px solid #f0f0f0; padding: 10px; border-radius: 12px; color: #111; font-size: 0.75rem; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 6px; transition: 0.3s; }
        .ty-contact-link:hover { border-color: #d50505; color: #d50505; }

        .card-footer { padding: 25px; text-align: center; border-top: 1px solid #f8f8f8; }
        .btn-shop-more { text-decoration: none; color: #111; font-weight: 800; font-size: 0.85rem; display: flex; align-items: center; justify-content: center; gap: 8px; text-transform: uppercase; letter-spacing: 1px; }

        @media (max-width: 600px) {
          .thank-you-page { padding: 40px 0; }
          .ty-contact-grid { grid-template-columns: 1fr; }
          .card-header { padding: 25px 20px; }
          .card-body { padding: 20px; }
        }
      `}} />
    </div>
  );
};

export default ThankYou;

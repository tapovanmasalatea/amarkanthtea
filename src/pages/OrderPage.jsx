import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, CreditCard, ChevronRight, MapPin, Phone, Mail, User, ArrowLeft, ShoppingBag } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const OrderPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const productData = location.state || {
    name: "Amarkanth Premium CTC",
    variant: "1kg Box",
    price: 740,
    quantity: 1,
    image: "/amarkanth.webp" // Fallback
  };

  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'cod'
  });

  const subtotal = productData.price * productData.quantity;
  const shipping = subtotal > 499 ? 0 : 50;
  const total = subtotal + shipping;

  return (
    <div className="order-page">
      <div className="container">
        <header className="checkout-header">
          <button onClick={() => navigate(-1)} className="btn-back">
            <ArrowLeft size={20} /> Back
          </button>
          <h1>Secure Checkout</h1>
          <div className="security-badge">
            <ShieldCheck size={18} /> 256-bit SSL Encryption
          </div>
        </header>

        <div className="checkout-grid">
          {/* Left Column: Information */}
          <div className="checkout-form-area">
            <section className="form-section">
              <div className="section-title-row">
                <div className="section-number">1</div>
                <h2>Contact Information</h2>
              </div>
              <div className="input-group single-col">
                <div className="input-field">
                  <Phone size={18} className="input-icon" />
                  <input type="tel" placeholder="Mobile Number" />
                </div>
              </div>
            </section>

            <section className="form-section">
              <div className="section-title-row">
                <div className="section-number">2</div>
                <h2>Shipping Address</h2>
              </div>
              <div className="input-grid">
                <div className="input-field">
                  <User size={18} className="input-icon" />
                  <input type="text" placeholder="First Name" />
                </div>
                <div className="input-field">
                  <User size={18} className="input-icon" />
                  <input type="text" placeholder="Last Name" />
                </div>
                <div className="input-field full-width">
                  <MapPin size={18} className="input-icon" />
                  <input type="text" placeholder="Flat, House no., Building, Company, Apartment" />
                </div>
                <div className="input-field full-width">
                  <input type="text" placeholder="Area, Street, Sector, Village" />
                </div>
                <div className="input-field">
                  <input type="text" placeholder="City" />
                </div>
                <div className="input-field">
                  <input type="text" placeholder="State" />
                </div>
                <div className="input-field">
                  <input type="text" placeholder="Pincode" />
                </div>
              </div>
            </section>

            <section className="form-section">
              <div className="section-title-row">
                <div className="section-number">3</div>
                <h2>Payment Method</h2>
              </div>
              <div className="payment-options">
                <label className={`payment-card ${formData.paymentMethod === 'cod' ? 'active' : ''}`}>
                  <input 
                    type="radio" 
                    name="payment" 
                    value="cod" 
                    checked={formData.paymentMethod === 'cod'}
                    onChange={() => setFormData({...formData, paymentMethod: 'cod'})}
                  />
                  <div className="payment-info">
                    <Truck size={24} />
                    <div className="text">
                      <strong>Cash on Delivery</strong>
                      <span>Pay when you receive the package</span>
                    </div>
                  </div>
                  <div className="radio-circle"></div>
                </label>
                
                <label className={`payment-card ${formData.paymentMethod === 'online' ? 'active' : ''}`}>
                  <input 
                    type="radio" 
                    name="payment" 
                    value="online"
                    checked={formData.paymentMethod === 'online'}
                    onChange={() => setFormData({...formData, paymentMethod: 'online'})}
                  />
                  <div className="payment-info">
                    <CreditCard size={24} />
                    <div className="text">
                      <strong>Online Payment</strong>
                      <span>UPI, Credit Card, Debit Card, Net Banking</span>
                    </div>
                  </div>
                  <div className="radio-circle"></div>
                </label>
              </div>
            </section>

            <button className="btn-place-order">
              PLACE ORDER • ₹{total} <ChevronRight size={20} />
            </button>
          </div>

          {/* Right Column: Order Summary */}
          <aside className="order-summary-area">
            <div className="summary-sticky">
              <div className="summary-card">
                <h3>Order Summary</h3>
                <p className="brand-tagline-checkout">Crafted with Passion, Served with Pride</p>
                <div className="product-item-checkout">
                  <div className="p-img">
                    <img src={productData.image} alt={productData.name} />
                    <span className="p-qty-badge">{productData.quantity}</span>
                  </div>
                  <div className="p-info">
                    <h4>{productData.name}</h4>
                    <p>{productData.variant}</p>
                  </div>
                  <div className="p-price">₹{subtotal}</div>
                </div>

                <div className="discount-code-row">
                  <input type="text" placeholder="Discount Code" />
                  <button>Apply</button>
                </div>

                <div className="summary-details">
                  <div className="line-item">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="line-item">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? "text-green" : ""}>
                      {shipping === 0 ? "FREE" : `₹${shipping}`}
                    </span>
                  </div>
                  <div className="line-item total">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                </div>
              </div>

              <div className="trust-footer-checkout">
                <div className="trust-item">
                  <ShieldCheck size={20} />
                  <p>100% Secure Transaction</p>
                </div>
                <div className="trust-item">
                  <Truck size={20} />
                  <p>Estimated Delivery: 3-5 Business Days</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .order-page {
          padding: 140px 0 100px;
          background: #fdfdfd;
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
        }

        .checkout-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 60px;
          border-bottom: 1px solid #eee;
          padding-bottom: 30px;
        }

        .btn-back {
          background: none;
          border: none;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 700;
          cursor: pointer;
          color: #666;
          transition: 0.3s;
        }

        .btn-back:hover { color: #000; }

        .checkout-header h1 {
          font-size: 2rem;
          font-weight: 900;
          font-family: 'Outfit', sans-serif;
          margin: 0;
        }

        .security-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: #2e7d32;
          background: #e8f5e9;
          padding: 8px 15px;
          border-radius: 50px;
          font-weight: 700;
        }

        .checkout-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: flex-start;
        }

        .form-section {
          background: white;
          padding: 40px;
          border-radius: 20px;
          border: 1px solid #f0f0f0;
          margin-bottom: 30px;
        }

        .section-title-row {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 30px;
        }

        .section-number {
          width: 30px;
          height: 30px;
          background: #111;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 0.9rem;
        }

        .section-title-row h2 {
          font-size: 1.4rem;
          margin: 0;
          font-weight: 800;
        }

        .input-group, .input-grid {
          display: grid;
          gap: 20px;
        }

        .input-group { grid-template-columns: repeat(2, 1fr); }
        .input-group.single-col { grid-template-columns: 1fr; }
        .input-grid { grid-template-columns: repeat(2, 1fr); }
        .full-width { grid-column: span 2; }

        .input-field {
          position: relative;
        }

        .input-icon {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: #bbb;
        }

        .input-field input {
          width: 100%;
          padding: 15px 15px 15px 45px;
          border-radius: 12px;
          border: 1.5px solid #eee;
          font-family: inherit;
          font-size: 1rem;
          transition: 0.3s;
        }

        .input-field input:focus {
          border-color: #111;
          outline: none;
        }

        .payment-options {
          display: grid;
          gap: 15px;
        }

        .payment-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 25px;
          border-radius: 15px;
          border: 2px solid #eee;
          cursor: pointer;
          transition: 0.3s;
          position: relative;
        }

        .payment-card.active {
          border-color: #111;
          background: #fafafa;
        }

        .payment-card input { display: none; }

        .payment-info {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .payment-info .text strong { display: block; font-size: 1.1rem; margin-bottom: 3px; }
        .payment-info .text span { font-size: 0.85rem; color: #777; }

        .radio-circle {
          width: 20px;
          height: 20px;
          border: 2px solid #ddd;
          border-radius: 50%;
          position: relative;
        }

        .payment-card.active .radio-circle {
          border-color: #111;
        }

        .payment-card.active .radio-circle::after {
          content: '';
          position: absolute;
          width: 10px;
          height: 10px;
          background: #111;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .btn-place-order {
          width: 100%;
          background: #d50505;
          color: white;
          border: none;
          padding: 25px;
          border-radius: 50px;
          font-size: 1.2rem;
          font-weight: 900;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          cursor: pointer;
          transition: 0.3s;
          box-shadow: 0 20px 40px rgba(213, 5, 5, 0.2);
          margin-top: 20px;
        }

        .btn-place-order:hover {
          background: #8b0000;
          transform: translateY(-5px);
        }

        /* Summary Column */
        .summary-sticky {
          position: sticky;
          top: 140px;
        }

        .summary-card {
          background: white;
          padding: 40px;
          border-radius: 20px;
          border: 1px solid #f0f0f0;
          box-shadow: 0 10px 30px rgba(0,0,0,0.02);
        }

        .summary-card h3 {
          font-size: 1.4rem;
          margin-bottom: 5px;
          font-weight: 800;
        }

        .brand-tagline-checkout {
          font-size: 0.85rem;
          color: #d50505;
          font-weight: 700;
          margin-bottom: 30px;
          font-style: italic;
          letter-spacing: 0.5px;
        }

        .product-item-checkout {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 30px;
          padding-bottom: 30px;
          border-bottom: 1px solid #eee;
        }

        .p-img {
          width: 80px;
          height: 80px;
          background: #f9f9f9;
          border-radius: 12px;
          padding: 10px;
          position: relative;
        }

        .p-img img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .p-qty-badge {
          position: absolute;
          top: -10px;
          right: -10px;
          background: #666;
          color: white;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 800;
        }

        .p-info h4 { margin: 0 0 5px; font-size: 1.1rem; }
        .p-info p { margin: 0; color: #888; font-size: 0.9rem; }
        .p-price { margin-left: auto; font-weight: 800; font-size: 1.1rem; }

        .discount-code-row {
          display: flex;
          gap: 10px;
          margin-bottom: 30px;
        }

        .discount-code-row input {
          flex: 1;
          padding: 12px 15px;
          border-radius: 8px;
          border: 1.5px solid #eee;
        }

        .discount-code-row button {
          background: #eee;
          border: none;
          padding: 12px 20px;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
        }

        .summary-details {
          display: grid;
          gap: 15px;
        }

        .line-item {
          display: flex;
          justify-content: space-between;
          color: #666;
          font-weight: 600;
        }

        .line-item.total {
          border-top: 1px solid #eee;
          padding-top: 20px;
          margin-top: 5px;
          font-size: 1.5rem;
          color: #111;
          font-weight: 900;
        }

        .text-green { color: #2e7d32; }

        .trust-footer-checkout {
          margin-top: 30px;
          display: grid;
          gap: 15px;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #888;
        }

        .trust-item p { margin: 0; font-size: 0.85rem; font-weight: 600; }

        @media (max-width: 1000px) {
          .checkout-grid { grid-template-columns: 1fr; }
          .summary-sticky { position: static; }
        }

        @media (max-width: 600px) {
          .input-group, .input-grid { grid-template-columns: 1fr; }
          .input-field.full-width { grid-column: span 1; }
          .checkout-header h1 { font-size: 1.5rem; }
          .security-badge { display: none; }
          .form-section { padding: 25px; }
        }
      `}} />
    </div>
  );
};

export default OrderPage;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, CreditCard, ChevronRight, MapPin, Phone, Mail, User, ArrowLeft, ShoppingBag, Ticket, Sparkles } from 'lucide-react';
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
    phone: '',
    firstName: '',
    lastName: '',
    address: '',
    area: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'cod'
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.phone) newErrors.phone = true;
    if (!formData.firstName) newErrors.firstName = true;
    if (!formData.lastName) newErrors.lastName = true;
    if (!formData.address) newErrors.address = true;
    if (!formData.city) newErrors.city = true;
    if (!formData.state) newErrors.state = true;
    if (!formData.pincode) newErrors.pincode = true;
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = () => {
    if (validate()) {
      const orderId = "AMK-" + Math.random().toString(36).substr(2, 9).toUpperCase();
      navigate('/thank-you', { state: { productData, total, orderId } });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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
          <div className="header-center">
             <h1>Checkout</h1>
             <p className="secure-text">Secure Transaction</p>
          </div>
          <div className="security-badge-v2">
            <ShieldCheck size={18} /> <span className="hide-mobile">Secure</span>
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
                 <div className={`input-field ${errors.phone ? 'error' : ''}`}>
                   <Phone size={18} className="input-icon" />
                   <input 
                    type="tel" 
                    placeholder="Mobile Number for delivery updates *" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                   />
                 </div>
              </div>
            </section>

            <section className="form-section">
              <div className="section-title-row">
                <div className="section-number">2</div>
                <h2>Shipping Address</h2>
              </div>
              <div className="input-grid">
                 <div className={`input-field ${errors.firstName ? 'error' : ''}`}>
                   <User size={18} className="input-icon" />
                   <input 
                    type="text" 
                    placeholder="First Name *" 
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                   />
                 </div>
                 <div className={`input-field ${errors.lastName ? 'error' : ''}`}>
                   <User size={18} className="input-icon" />
                   <input 
                    type="text" 
                    placeholder="Last Name *" 
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                   />
                 </div>
                 <div className={`input-field full-width ${errors.address ? 'error' : ''}`}>
                   <MapPin size={18} className="input-icon" />
                   <input 
                    type="text" 
                    placeholder="Flat, House no., Building *" 
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                   />
                 </div>
                 <div className="input-field full-width">
                   <input 
                    type="text" 
                    placeholder="Area, Street, Sector, Village (Optional)" 
                    value={formData.area}
                    onChange={(e) => setFormData({...formData, area: e.target.value})}
                   />
                 </div>
                 <div className={`input-field ${errors.city ? 'error' : ''}`}>
                   <input 
                    type="text" 
                    placeholder="City *" 
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                   />
                 </div>
                 <div className={`input-field ${errors.state ? 'error' : ''}`}>
                   <input 
                    type="text" 
                    placeholder="State *" 
                    value={formData.state}
                    onChange={(e) => setFormData({...formData, state: e.target.value})}
                   />
                 </div>
                 <div className={`input-field ${errors.pincode ? 'error' : ''}`}>
                   <input 
                    type="text" 
                    placeholder="Pincode *" 
                    value={formData.pincode}
                    onChange={(e) => setFormData({...formData, pincode: e.target.value})}
                   />
                 </div>
              </div>
            </section>

            <section className="form-section">
              <div className="section-title-row">
                <div className="section-number">3</div>
                <h2>Payment Method</h2>
              </div>
              <div className="payment-options">
                <label className={`payment-card-v2 ${formData.paymentMethod === 'cod' ? 'active' : ''}`}>
                  <input 
                    type="radio" 
                    name="payment" 
                    value="cod" 
                    checked={formData.paymentMethod === 'cod'}
                    onChange={() => setFormData({...formData, paymentMethod: 'cod'})}
                  />
                  <div className="payment-info">
                    <div className="icon-box"><Truck size={24} /></div>
                    <div className="text">
                      <strong>Cash on Delivery</strong>
                      <span>Pay when you receive the package</span>
                    </div>
                  </div>
                  <div className="radio-check"></div>
                </label>
                
                <label className={`payment-card-v2 ${formData.paymentMethod === 'online' ? 'active' : ''}`}>
                  <input 
                    type="radio" 
                    name="payment" 
                    value="online"
                    checked={formData.paymentMethod === 'online'}
                    onChange={() => setFormData({...formData, paymentMethod: 'online'})}
                  />
                  <div className="payment-info">
                    <div className="icon-box"><CreditCard size={24} /></div>
                    <div className="text">
                      <strong>Online Payment</strong>
                      <span>UPI, Credit Card, Debit Card</span>
                    </div>
                  </div>
                  <div className="radio-check"></div>
                </label>
              </div>
            </section>

            <div className="mobile-only-price-row">
               <div className="m-price-col">
                  <span>Grand Total</span>
                  <strong>₹{total}</strong>
               </div>
                <button className="btn-place-order-v2" onClick={handlePlaceOrder}>
                  PLACE ORDER <ChevronRight size={20} />
                </button>
            </div>

            <div className="mobile-trust-badges-bottom hide-desktop">
               <div className="t-badge"><ShieldCheck size={16} /> 100% Secure Payment</div>
               <div className="t-badge"><Truck size={16} /> Fast Delivery Across India</div>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <aside className="order-summary-area">
            <div className="summary-sticky">
              <div className="summary-card-v2">
                <div className="summary-header">
                   <h3>Order Summary</h3>
                   <span className="item-count">{productData.quantity + 2} Items</span>
                </div>
                
                <div className="checkout-items-list">
                  {/* Primary Product */}
                  <div className="product-item-checkout-v2">
                    <div className="p-img-v2">
                      <img src={productData.image} alt={productData.name} />
                      <span className="p-qty-badge-v2">{productData.quantity}</span>
                    </div>
                    <div className="p-info-v2">
                      <h4>{productData.name}</h4>
                      <p>{productData.variant}</p>
                    </div>
                    <div className="p-price-v2">₹{subtotal}</div>
                  </div>

                  {/* Default Gift 1: Tester */}
                  <div className="product-item-checkout-v2 gift-item">
                    <div className="p-img-v2">
                      <div className="gift-placeholder">
                        <Sparkles size={24} color="#d50505" />
                      </div>
                      <span className="p-qty-badge-v2">1</span>
                    </div>
                    <div className="p-info-v2">
                      <h4>Free Tea Tester Pack</h4>
                      <p className="gift-tag">Complimentary Gift</p>
                    </div>
                    <div className="p-price-v2 text-free">FREE</div>
                  </div>

                  {/* Default Gift 2: Scratch Card */}
                  <div className="product-item-checkout-v2 gift-item">
                    <div className="p-img-v2">
                      <div className="gift-placeholder">
                        <Ticket size={24} color="#d50505" />
                      </div>
                      <span className="p-qty-badge-v2">1</span>
                    </div>
                    <div className="p-info-v2">
                      <h4>Thailand Trip Scratch Card</h4>
                      <p className="gift-tag">Limited Time Offer</p>
                    </div>
                    <div className="p-price-v2 text-free">FREE</div>
                  </div>
                </div>

                <div className="summary-details-v2">
                  <div className="line-item-v2">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="line-item-v2">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? "text-green" : ""}>
                      {shipping === 0 ? "FREE" : `₹${shipping}`}
                    </span>
                  </div>
                  <div className="line-item-v2 total-v2">
                    <span>Amount Payable</span>
                    <span>₹{total}</span>
                  </div>
                </div>

                 <div className="summary-footer-v2 hide-mobile">
                   <button className="btn-place-order-v2" onClick={handlePlaceOrder}>
                     PLACE ORDER <ChevronRight size={20} />
                   </button>
                 </div>

                 <div className="checkout-trust-badges">
                   <div className="t-badge"><ShieldCheck size={16} /> Secure Payment</div>
                   <div className="t-badge"><Truck size={16} /> Fast Delivery</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --brand-red: #d50505;
          --brand-gold: #ffc107;
          --bg-gray: #f8f9fa;
        }

        .order-page {
          padding: 120px 0 20px;
          background: var(--bg-gray);
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .checkout-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          padding: 20px 0;
          border-bottom: 1px solid #eee;
        }

        .header-center { text-align: center; }
        .header-center h1 { font-size: 1.8rem; font-weight: 900; margin: 0; color: #111; }
        .secure-text { font-size: 0.75rem; color: #2e7d32; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-top: 4px; }

        .btn-back {
          background: white;
          border: 1px solid #eee;
          padding: 10px 18px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 700;
          cursor: pointer;
          color: #444;
          transition: 0.3s;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .security-badge-v2 {
          background: white;
          padding: 10px 15px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 8px;
          color: #2e7d32;
          font-weight: 700;
          font-size: 0.85rem;
          border: 1px solid #e8f5e9;
        }

        .checkout-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          align-items: flex-start;
        }

        .form-section {
          background: white;
          padding: 35px;
          border-radius: 24px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          margin-bottom: 25px;
          border: 1px solid rgba(0,0,0,0.02);
        }

        .section-title-row {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 25px;
        }

        .section-number {
          width: 28px;
          height: 28px;
          background: var(--brand-red);
          color: white;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 0.85rem;
        }

        .section-title-row h2 { font-size: 1.25rem; font-weight: 800; margin: 0; color: #111; }

        .input-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; }
        .full-width { grid-column: span 2; }

        .input-field { position: relative; }
        .input-icon { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: #aaa; }
        
        .input-field input {
          width: 100%;
          padding: 14px 14px 14px 48px;
          border-radius: 14px;
          border: 1.5px solid #f0f0f0;
          background: #fafafa;
          font-size: 1rem;
          transition: 0.3s;
        }

        .input-field input:focus {
          background: white;
          border-color: var(--brand-red);
          outline: none;
          box-shadow: 0 0 0 4px rgba(213, 5, 5, 0.05);
        }

         .input-field.error input {
           border-color: #ff5252;
           background: #fff8f8;
         }

         .input-field.error::after {
           content: 'Required';
           position: absolute;
           right: 15px;
           top: 50%;
           transform: translateY(-50%);
           font-size: 0.7rem;
           font-weight: 800;
           color: #ff5252;
           text-transform: uppercase;
         }

         .summary-footer-v2 { margin-top: 25px; margin-bottom: 20px; }

        .payment-options { display: grid; gap: 12px; }
        
        .payment-card-v2 {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-radius: 18px;
          border: 2px solid #f0f0f0;
          cursor: pointer;
          transition: 0.3s;
          background: white;
        }

        .payment-card-v2.active {
          border-color: var(--brand-red);
          background: #fffafa;
        }

        .payment-card-v2 input { display: none; }
        .payment-info { display: flex; gap: 15px; align-items: center; }
        .icon-box { 
          width: 45px; height: 45px; background: #f5f5f5; border-radius: 12px; 
          display: flex; align-items: center; justify-content: center; color: #444;
        }
        .active .icon-box { background: var(--brand-red); color: white; }

        .payment-info .text strong { display: block; font-size: 1rem; margin-bottom: 2px; }
        .payment-info .text span { font-size: 0.8rem; color: #777; }

        .radio-check {
          width: 22px; height: 22px; border: 2.5px solid #ddd; border-radius: 50%; position: relative;
        }
        .active .radio-check { border-color: var(--brand-red); }
        .active .radio-check::after {
          content: ''; position: absolute; width: 10px; height: 10px; 
          background: var(--brand-red); border-radius: 50%; top: 50%; left: 50%; transform: translate(-50%, -50%);
        }

        /* Summary Card V2 */
        .summary-sticky { position: sticky; top: 120px; }
        .summary-card-v2 {
          background: white;
          padding: 30px;
          border-radius: 24px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.04);
          border: 1px solid rgba(0,0,0,0.02);
        }

        .summary-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
          border-bottom: 1.5px solid #f8f8f8;
          padding-bottom: 15px;
        }
        .summary-header h3 { font-size: 1.2rem; font-weight: 800; margin: 0; }
        .item-count { background: #eee; padding: 4px 10px; border-radius: 50px; font-size: 0.75rem; font-weight: 700; }

        .checkout-items-list { display: grid; gap: 20px; margin-bottom: 25px; }
        
        .product-item-checkout-v2 {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .p-img-v2 {
          width: 65px; height: 65px; background: #f9f9f9; border-radius: 12px;
          display: flex; align-items: center; justify-content: center; position: relative;
        }
        .p-img-v2 img { width: 80%; height: 80%; object-fit: contain; }
        .p-qty-badge-v2 {
          position: absolute; top: -8px; right: -8px; background: #111; color: white;
          width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center;
          justify-content: center; font-size: 0.7rem; font-weight: 800;
        }

        .p-info-v2 { flex: 1; }
        .p-info-v2 h4 { font-size: 0.95rem; font-weight: 700; margin: 0 0 2px; color: #111; line-height: 1.3; }
        .p-info-v2 p { font-size: 0.8rem; color: #888; margin: 0; }
        .p-price-v2 { font-weight: 800; color: #111; font-size: 0.95rem; text-align: right; min-width: 70px; }

        .gift-item { padding: 12px; background: #fffafa; border-radius: 14px; border: 1px dashed #ffdada; }
        .gift-placeholder { width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; }
        .gift-tag { color: var(--brand-red) !important; font-weight: 700 !important; font-size: 0.7rem !important; text-transform: uppercase; }
        .text-free { color: #2e7d32; font-weight: 900; }

        .summary-details-v2 {
          background: #fdfdfd;
          padding: 20px;
          border-radius: 16px;
          display: grid;
          gap: 12px;
          margin-bottom: 25px;
        }

        .line-item-v2 { display: flex; justify-content: space-between; font-weight: 600; color: #666; font-size: 0.9rem; }
        .total-v2 { 
          border-top: 1.5px solid #eee; padding-top: 15px; margin-top: 5px; 
          font-size: 1.3rem; color: #111; font-weight: 900; 
        }

        .mobile-trust-badges-bottom {
          display: none;
          margin-top: 20px;
          padding: 20px;
          background: white;
          border-top: 1px solid #eee;
          justify-content: center;
          gap: 30px;
          opacity: 0.7;
        }

        @media (min-width: 1024px) {
          .hide-desktop { display: none; }
        }

        .checkout-trust-badges {
          display: flex;
          justify-content: center;
          gap: 20px;
          opacity: 0.6;
        }
        .t-badge { display: flex; align-items: center; gap: 6px; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; }

        .btn-place-order-v2 {
          background: var(--brand-red);
          color: white;
          border: none;
          padding: 18px 30px;
          border-radius: 14px;
          font-weight: 900;
          font-size: 1.1rem;
          cursor: pointer;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: 0.3s;
          box-shadow: 0 10px 25px rgba(213, 5, 5, 0.2);
        }

        .mobile-only-price-row { display: none; }

        @media (max-width: 1000px) {
          .checkout-grid { grid-template-columns: 1fr; }
          .summary-sticky { position: static; order: -1; margin-bottom: 30px; }
          .order-page { padding-top: 100px; }
        }

        @media (max-width: 768px) {
          .checkout-header { margin-bottom: 20px; }
          .btn-back span { display: none; }
          .form-section { padding: 25px; border-radius: 18px; }
          .input-grid { grid-template-columns: 1fr; }
          .input-field.full-width { grid-column: span 1; }
          
          .mobile-only-price-row {
            display: flex;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background: white;
            padding: 20px;
            box-shadow: 0 -10px 30px rgba(0,0,0,0.08);
            z-index: 1000;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
          }
          .m-price-col { display: flex; flex-direction: column; }
          .m-price-col span { font-size: 0.75rem; color: #888; font-weight: 700; text-transform: uppercase; }
          .m-price-col strong { font-size: 1.5rem; color: #111; font-weight: 900; }
          .btn-place-order-v2 { width: auto; flex: 1; padding: 15px; font-size: 1rem; border-radius: 12px; }
          
          .mobile-trust-badges-bottom { display: flex; }
          .order-page { padding-bottom: 80px; }
          .hide-mobile { display: none; }
        }
      `}} />
    </div>
  );
};

export default OrderPage;

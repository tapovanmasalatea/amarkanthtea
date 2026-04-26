import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ShieldCheck, Coffee, Package, Clock, Leaf, Star, Minus, Plus, Ticket, ChevronDown, Zap, Heart, Sparkles, Mountain, Wind, Truck, Headphones, RotateCcw, Search, Camera, Send, X } from 'lucide-react';
import amarkanthImg from '../assets/amarkanth.webp';
import tapovan from '../assets/tapovan.webp';
import tapovan1 from '../assets/tapovan1.webp';
import tapovan2 from '../assets/tapovan2.webp';
import tapovan3 from '../assets/tapovan3.webp';
import tpLoved1 from '../assets/tp_loved1.webp';
import tpLoved2 from '../assets/tp_loved2.webp';
import tpLoved3 from '../assets/tp_loved3.webp';
import tpLoved4 from '../assets/tp_loved4.webp';
import logoImg from '../assets/logo.webp';
import { Link, useNavigate } from 'react-router-dom';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {question}
        <ChevronDown size={20} className="faq-icon" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="faq-answer"
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const TapovanPremiumTea = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('1kg');
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  const handleBuyNow = () => {
    navigate('/checkout', {
      state: {
        name: "Tapovan Premium Tea",
        variant: variants[variant].label,
        price: variants[variant].price,
        quantity: quantity,
        image: tapovan
      }
    });
  };
  
  const productImages = [
    tapovan,
    tapovan1,
    tapovan2,
    tapovan3
  ];
  
  const [selectedImage, setSelectedImage] = useState(productImages[0]);

  const variants = {
    '250g': { label: '250g Pouch', price: 195, oldPrice: 210, discount: '7%', perUnit: '₹780/kg' },
    '500g': { label: '500g Pouch', price: 380, oldPrice: 420, discount: '9%', perUnit: '₹760/kg' },
    '1kg': { label: '1kg Box', price: 740, oldPrice: 850, discount: '12%', perUnit: '₹740/kg' },
    '5kg': { label: '5kg Bulk', price: 3500, oldPrice: 4200, discount: '16%', perUnit: '₹700/kg' }
  };

  const features = [
    {
      icon: <Mountain className="text-tapovan-orange" />,
      title: "100% Assam Origin (No Blending Tricks)",
      desc: "Finest two-leaf and bud CTC sourced directly from trusted Assam estates."
    },
    {
      icon: <Coffee className="text-tapovan-orange" />,
      title: "Kadak Chai Tested With Milk",
      desc: "Specially crafted for Indian taste — strong color, bold flavor after milk."
    },
    {
      icon: <Check className="text-tapovan-orange" />,
      title: "Quality Checked in Every Batch",
      desc: "Each lot goes through strict tasting and quality checks before packing."
    },
    {
      icon: <Clock className="text-tapovan-orange" />,
      title: "Sealed Freshness, No Aroma Loss",
      desc: "Advanced packaging locks in flavor — so every cup tastes fresh."
    }
  ];

  const galleryImages = [
    tpLoved1,
    tpLoved2,
    tpLoved3,
    tpLoved4
  ];

  const faqs = [
    {
      question: "What does 'High-Grown' mean for Tapovan Tea?",
      answer: "High-grown teas are sourced from gardens at higher altitudes. This environment slows the growth of the tea leaves, resulting in a more complex, nuanced, and refreshing flavor profile compared to lowland teas."
    },
    {
      question: "How does the Slider Pack help?",
      answer: "Our premium resealable slider pack is designed to keep moisture and external odors out. It ensures that every cup you brew tastes as fresh as the day the pack was sealed."
    },
    {
      question: "Is Tapovan Tea stronger than Amarkanth?",
      answer: "While both are strong, Tapovan offers a 'Mountain Fresh' strength which is more refreshing and crisp, whereas Amarkanth is 'Bold & Heavy'. It depends on whether you prefer a malty kick or a refreshing mountain aroma."
    },
    {
      question: "Is it suitable for Masala Chai?",
      answer: "Absolutely. Tapovan's highland character stands up well to spices while maintaining its unique mountain-fresh flavor."
    }
  ];

  const initialReviews = [
    {
      id: 1,
      name: "Priya Das",
      tagline: "Highland Enthusiast",
      rating: 5,
      comment: "This tea is incredibly refreshing. I love the crisp mountain flavor that Tapovan brings. The slider pack is a genius addition!",
      image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=60&w=300&auto=format&fit=crop",
      date: "3 days ago"
    },
    {
      id: 2,
      name: "Vikram Singh",
      tagline: "Verified Buyer",
      rating: 5,
      comment: "Best premium tea in this price range. You can actually taste the quality of high-grown leaves. Very smooth.",
      image: "https://images.unsplash.com/photo-1544022613-e87dd75a784a?q=60&w=300&auto=format&fit=crop",
      date: "10 days ago"
    },
    {
      id: 3,
      name: "Sunita Reddy",
      tagline: "Daily Ritual",
      rating: 4,
      comment: "Refreshing and light but still strong enough for my taste. Perfect for those who enjoy a clean tea experience.",
      image: "https://images.unsplash.com/photo-1544787210-2211d44b565a?q=60&w=300&auto=format&fit=crop",
      date: "2 weeks ago"
    }
  ];

  return (
    <div className="product-page tapovan-theme">
      {/* Hero Section */}
      <section className="product-hero">
        <div className="container">
          <div className="hero-grid">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="product-visual-area"
            >
              <div className="main-image-wrapper">
                <motion.img 
                  key={selectedImage}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  src={selectedImage} 
                  alt="Tapovan Premium Tea" 
                  className="product-main-img"
                />
              </div>
              
              <div className="thumbnail-gallery">
                {productImages.map((img, idx) => (
                  <div 
                    key={idx}
                    className={`thumb-item ${selectedImage === img ? 'active' : ''}`}
                    onClick={() => setSelectedImage(img)}
                  >
                    <img src={img} alt={`View ${idx + 1}`} />
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="product-info"
            >
              <h1 className="product-main-name">Tapovan Premium Tea</h1>
              <p className="product-info-tagline">Mountain Fresh Quality Tea</p>
              <div className="rating-row">
                <Star size={16} fill="#FFD700" color="#FFD700" />
                <span>4.5 (182 reviews)</span>
              </div>

              <div className="price-main-row-v3">
                <div className="price-box-v3">
                   <span className="current-price-v3">₹{variants[variant].price * quantity}</span>
                   <span className="old-price-v3">₹{variants[variant].oldPrice * quantity}</span>
                   <span className="discount-pill-v3">{variants[variant].discount} OFF</span>
                </div>
                <p className="mrp-subtext-v3">MRP Inclusive of all taxes</p>
              </div>

              {/* Offers Mobile - Stacked */}
              <div className="offers-stack-mobile">
                {/* Offer Bar */}
                <div className="promo-bar-v2 tapovan-promo">
                  <Ticket size={20} className="text-tapovan-orange" />
                  <p>Buy now and Get a <strong>Scratch Card</strong> & win a <strong>Thailand Trip!</strong></p>
                </div>

                {/* Upsell Card - Free Amarkanth Tester */}
                <div className="upsell-card amarkanth-upsell">
                  <div className="test-badge amarkanth-badge">LIMITED OFFER</div>
                  <div className="upsell-content">
                    <img src={amarkanthImg} alt="Amarkanth Tester" className="kit-thumb" />
                    <div className="kit-info">
                      <h4>Get FREE Amarkanth Tea Tester</h4>
                      <p>Worth ₹50</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="variant-selector-v2">
                <p className="variant-title">Select Variant</p>
                <div className="variant-grid-v2">
                  {Object.keys(variants).map((v) => (
                    <div 
                      key={v}
                      className={`variant-card-v2 ${variant === v ? 'active' : ''}`}
                      onClick={() => setVariant(v)}
                    >
                      <div className="v-header-v2">{variants[v].label}</div>
                      <div className="v-body-v2">
                        <div className="v-price-row-v2">
                          <span className="v-price-v2">₹{variants[v].price}</span>
                          <span className="v-old-v2">₹{variants[v].oldPrice}</span>
                          <span className="v-off-v2">{variants[v].discount} off</span>
                        </div>
                        <div className="v-per-unit-v2">{variants[v].perUnit}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="action-footer-row">
                <div className="qty-picker-v2">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={18} /></button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}><Plus size={18} /></button>
                </div>
                <button className="btn-buy-now-v2 tapovan-buy-btn" onClick={handleBuyNow}>Buy Now</button>
              </div>

              <div className="product-description-v2">
                <h3 className="section-title-v2">PRODUCT DESCRIPTION</h3>
                <p>
                  Tapovan Premium Chai is the quintessential mountain-fresh tea. Sourced from the highest tea gardens 
                  of Assam, it offers a crisp, refreshing, and invigorating taste that stands apart. The unique 
                  highland character delivers a rich reddish brew that is both kadak and smooth. Packed in our 
                  innovative resealable slider pack to ensure the mountain freshness stays locked in.
                </p>
              </div>

              <div className="trust-icons-v2">
                 <div className="trust-v2-item"><Truck size={40} /><p>Free Shipping</p></div>
                 <div className="trust-v2-item"><Zap size={40} /><p>Fast Delivery</p></div>
                 <div className="trust-v2-item"><RotateCcw size={40} /><p>Easy Return</p></div>
                 <div className="trust-v2-item"><ShieldCheck size={40} /><p>Lab-Tested & Quality Assured</p></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="product-features tapovan-bg">
        <div className="container">
          <div className="features-grid">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="feature-card"
              >
                <div className="f-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="product-faq-section">
        <div className="container">
          <h2 className="section-title text-center">Frequently Asked <span className="text-tapovan-orange">Questions</span></h2>
          <div className="faq-container">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Loved By Millions Section */}
      <section className="loved-by-section">
        <div className="container">
          <header className="loved-header">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="loved-by-script"
            >
              Loved By
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="millions-title"
            >
              MILLIONS
            </motion.h2>
            <p className="loved-subtitle">India’s Largest, new-age, tea brand!</p>
          </header>

          <div className="loved-gallery">
            {galleryImages.map((src, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: (i % 5) * 0.1 }}
                className="gallery-item"
              >
                <img src={src} alt={`User ${i + 1}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="customer-reviews-section">
        <div className="container">
          <div className="reviews-header-main">
            <div className="header-left">
              <h2 className="section-title">Customer <span className="text-tapovan-orange">Reviews</span></h2>
              <div className="main-rating-summary">
                <div className="big-rating">4.5</div>
                <div className="stars-col">
                  <div className="stars-row">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill={i < 4.5 ? "#FFD700" : "none"} color="#FFD700" />
                    ))}
                  </div>
                  <p>Based on 182 reviews</p>
                </div>
              </div>
            </div>
            <button className="btn-write-review tapovan-btn" onClick={() => setIsReviewOpen(!isReviewOpen)}>
              {isReviewOpen ? 'CLOSE FORM' : 'WRITE A REVIEW'}
            </button>
          </div>

          <AnimatePresence>
            {isReviewOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="review-form-wrapper"
              >
                <form className="modern-review-form">
                  <div className="form-grid">
                    <div className="form-group">
                      <label>Your Rating</label>
                      <div className="star-input-row">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={28} className="star-cursor" color="#ddd" />
                        ))}
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Your Name</label>
                      <input type="text" placeholder="Enter your name" />
                    </div>
                    <div className="form-group full-width">
                      <label>Your Review</label>
                      <textarea placeholder="Tell us about your experience with Tapovan Tea..."></textarea>
                    </div>
                    <div className="form-actions">
                      <button type="submit" className="btn-submit-review tapovan-btn">
                        SUBMIT REVIEW <Send size={18} />
                      </button>
                    </div>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="reviews-grid-v2">
            {initialReviews.map((rev) => (
              <motion.div 
                key={rev.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="review-card-v2 tapovan-rev-card"
              >
                <div className="rev-user-header">
                  <img src={`https://ui-avatars.com/api/?name=${rev.name}&background=random`} alt={rev.name} className="user-avatar" />
                  <div className="user-meta">
                    <h4>{rev.name}</h4>
                    <span className="tagline tapovan-tag">{rev.tagline}</span>
                  </div>
                  <div className="rev-stars">
                    {[...Array(5)].map((_, i) => ( rev.rating > i && <Star key={i} size={14} fill="#FFD700" color="#FFD700" /> ))}
                  </div>
                </div>
                <p className="rev-comment">"{rev.comment}"</p>
                <div className="rev-footer">
                  <span className="rev-date">{rev.date}</span>
                  <div className="rev-helpful">Helpful? <span className="tapovan-link">Yes</span></div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="load-more-row">
            <button className="btn-load-more tapovan-border">VIEW ALL REVIEWS</button>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

        :root {
          --tapovan-orange: #f15800;
          --tapovan-dark: #c04800;
          --tapovan-light: #fff8f0;
          --brand-gold: #ffc107;
          --brand-red: #d50505;
          --brand-maroon: #800000;
          --trust-teal: #004d40;
          --trust-green: #2e7d32;
        }

        .tapovan-theme { --primary: var(--tapovan-orange); }
        .text-tapovan-orange { color: var(--tapovan-orange); }
        .text-center { text-align: center; }
        .italic { font-style: italic; }

        .product-page {
          padding-top: 100px;
          background: #fff;
          color: #333;
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          width: 100%;
          overflow-x: hidden; /* Critical for preventing horizontal slide */
        }

        .product-hero { padding: 0 0 20px; }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 30px;
          align-items: flex-start;
        }

        .product-visual-area { position: sticky; top: 120px; }

        .main-image-wrapper {
          background: #fff;
          border-radius: 20px;
          padding: 0;
          margin-bottom: 8px;
          position: relative;
          overflow: hidden;
          aspect-ratio: 1 / 1;
          width: 100%;
          border: none;
        }

        .product-main-img {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 20px;
        }

        .thumbnail-gallery { display: flex; gap: 8px; justify-content: space-between; width: 100%; }

        .thumb-item {
          flex: 1;
          aspect-ratio: 1 / 1;
          border-radius: 10px;
          border: 2.5px solid #f0f0f0;
          overflow: hidden;
          cursor: pointer;
          transition: 0.3s;
          background: white;
        }

        .thumb-item.active { border-color: var(--tapovan-orange); }
        .thumb-item img { width: 100%; height: 100%; object-fit: cover; }

        .rating-row { display: flex; align-items: center; gap: 8px; font-weight: 600; color: #666; margin-bottom: 5px; }
        .product-main-name { font-size: 2.2rem; font-weight: 900; color: #111; margin-bottom: 5px; font-family: 'Outfit', sans-serif; text-transform: uppercase; letter-spacing: 1px; overflow-wrap: break-word; }
        .product-info-tagline { font-size: 1.1rem; font-weight: 600; color: var(--tapovan-orange); margin-bottom: 5px; font-family: 'Inter', sans-serif; overflow-wrap: break-word; }

        .price-main-row-v3 { margin-bottom: 30px; }
        .price-box-v3 { display: flex; align-items: center; gap: 20px; }
        .current-price-v3 { font-size: 3.5rem; font-weight: 900; color: #111; }
        .old-price-v3 { font-size: 1.8rem; color: #bbb; text-decoration: line-through; }
        .discount-pill-v3 { background: #e8f5e9; color: #2e7d32; padding: 6px 15px; border-radius: 6px; font-size: 1rem; font-weight: 800; }
        .mrp-subtext-v3 { display: block; font-size: 0.9rem; color: #888; margin-top: 8px; font-weight: 500; }

        .promo-bar-v2 {
          background: #fff3e0;
          padding: 10px 15px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 30px;
          border: 1px dashed var(--tapovan-orange);
        }
        .offers-stack-mobile { margin-top: 15px; }
        .promo-bar-v2 p { margin: 0; font-size: 1.05rem; color: #e65100; }
        .promo-bar-v2 strong { color: #bf360c; }

        .upsell-card.amarkanth-upsell {
           background: #fff5f5;
           border-radius: 15px;
           padding: 25px;
           margin-bottom: 30px;
           position: relative;
           border: 2px solid var(--brand-red);
        }
        .amarkanth-badge { position: absolute; top: -12px; left: 20px; background: var(--brand-red); color: white; padding: 4px 12px; font-size: 0.75rem; font-weight: 800; border-radius: 6px; }
        .upsell-content { display: flex; align-items: center; gap: 20px; }
        .kit-thumb { width: 80px; height: 80px; object-fit: contain; background: white; border-radius: 10px; }
        .kit-info { flex: 1; }
        .kit-info h4 { font-size: 1.1rem; margin-bottom: 5px; color: #333; }
        .kit-info p { font-weight: 800; font-size: 1.2rem; margin: 0; }

        .variant-selector-v2 { margin-bottom: 40px; }
        .variant-title { font-weight: 800; margin-bottom: 15px; color: #222; }
        .variant-grid-v2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }

        .variant-card-v2 {
          border: 1.5px solid #e0e0e0;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: 0.3s;
          background: white;
        }
        
        .v-header-v2 {
          background: #f5f7f9;
          padding: 4px 10px;
          font-size: 0.75rem;
          font-weight: 700;
          color: #444;
          text-align: left;
          transition: 0.3s;
        }
        
        .v-body-v2 { padding: 8px 10px; text-align: left; }
        
        .v-price-row-v2 { display: flex; align-items: baseline; gap: 6px; margin-bottom: 2px; }
        .v-price-v2 { font-size: 1.2rem; font-weight: 900; color: #111; }
        .v-old-v2 { font-size: 0.8rem; color: #999; text-decoration: line-through; }
        .v-off-v2 { font-size: 0.75rem; color: #d50505; font-weight: 700; }
        
        .v-per-unit-v2 { font-size: 0.8rem; color: var(--trust-green); font-weight: 600; }
        
        /* Selected State */
        .variant-card-v2.active { border-color: var(--tapovan-orange); box-shadow: 0 10px 20px rgba(0,0,0,0.05); }
        .variant-card-v2.active .v-header-v2 { background: var(--tapovan-orange); color: white; }

        .action-footer-row { display: flex; gap: 20px; margin-bottom: 50px; }
        .qty-picker-v2 { display: flex; align-items: center; gap: 12px; background: #f5f5f5; padding: 6px 12px; border-radius: 6px; }
        .qty-picker-v2 button { background: none; border: none; cursor: pointer; color: #444; padding: 4px; display: flex; align-items: center; }
        .qty-picker-v2 span { font-weight: 800; font-size: 1rem; min-width: 20px; text-align: center; }
        .btn-buy-now-v2 { 
          flex: 1; 
          background: var(--brand-gold); 
          color: #000; 
          border: none; 
          border-radius: 50px; 
          font-weight: 900; 
          font-size: 1.3rem; 
          cursor: pointer; 
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
          box-shadow: 0 10px 25px rgba(255, 193, 7, 0.3); 
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .btn-buy-now-v2:hover { background: #ffca28; transform: translateY(-3px); box-shadow: 0 15px 30px rgba(255, 193, 7, 0.4); }
        .btn-buy-now-v2:active { transform: scale(0.95); }

        .trust-icons-v2 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 60px; border-top: 1px solid #eee; padding-top: 40px; }
        .trust-v2-item { text-align: center; }
        .trust-v2-item svg { color: var(--brand-red); margin-bottom: 15px; opacity: 0.9; }
        .trust-v2-item p { font-size: 0.9rem; font-weight: 700; color: #555; line-height: 1.3; }

        .product-features.tapovan-bg { background: var(--tapovan-light); padding: 40px 0 80px; }
        .features-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; }
        .feature-card { background: white; padding: 40px 30px; border-radius: 20px; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.03); transition: 0.3s; border: 1px solid #f5f5f5; }
        .feature-card:hover { transform: translateY(-10px); }
        .f-icon { width: 60px; height: 60px; background: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 25px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); color: var(--tapovan-orange); }

        .product-faq-section { padding: 40px 0; background: #fff; }
        .faq-container { max-width: 800px; margin: 0 auto; }
        .faq-item { border-bottom: 1px solid #eee; }
        .faq-question { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 15px 0; background: none; border: none; font-size: 1.1rem; font-weight: 700; text-align: left; cursor: pointer; color: #111; }
        .faq-icon { transition: 0.3s; color: var(--tapovan-orange); }
        .faq-item.open .faq-icon { transform: rotate(180deg); }
        .faq-answer { overflow: hidden; color: #666; line-height: 1.7; padding-bottom: 15px; }

        .loved-by-section { padding: 40px 0; background: #fdf8f0; text-align: center; overflow: hidden; }
        .millions-title { font-size: 4rem; font-weight: 900; color: #1a1a1a; letter-spacing: -2px; line-height: 1; overflow-wrap: break-word; }
        .loved-by-script { font-family: 'Dancing Script', cursive; font-size: 2.5rem; color: var(--tapovan-orange); overflow-wrap: break-word; }
        .loved-gallery { display: flex; flex-wrap: wrap; gap: 15px; justify-content: center; padding-top: 30px; max-width: 1200px; margin: 0 auto; }
        .gallery-item { width: 150px; height: 150px; border-radius: 15px; overflow: hidden; flex-shrink: 0; }
        .gallery-item img { width: 100%; height: 100%; object-fit: cover; }

        /* Customer Reviews Section */
        .customer-reviews-section { padding: 40px 0; background: #fff; border-top: 1px solid #eee; }
        .reviews-header-main { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 60px; }
        .main-rating-summary { display: flex; align-items: center; gap: 20px; margin-top: 20px; }
        .big-rating { font-size: 4rem; font-weight: 900; color: #111; }
        .stars-col p { margin: 0; font-size: 0.9rem; color: #777; font-weight: 600; }
        .btn-write-review { background: #111; color: white; padding: 15px 30px; border-radius: 50px; font-weight: 800; font-size: 0.9rem; border: none; cursor: pointer; transition: 0.3s; }
        .btn-write-review:hover { background: var(--tapovan-orange); }
        .tapovan-btn { background: var(--tapovan-orange) !important; }

        .review-form-wrapper { background: #f9f9f9; border-radius: 20px; padding: 40px; margin-bottom: 60px; border: 1px solid #eee; }
        .form-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 25px; }
        .form-group { display: flex; flex-direction: column; gap: 10px; }
        .form-group.full-width { grid-column: span 2; }
        .form-group label { font-weight: 800; font-size: 0.9rem; color: #444; }
        .form-group input, .form-group textarea { padding: 15px; border-radius: 10px; border: 1.5px solid #eee; font-family: inherit; font-size: 1rem; }
        .form-group textarea { height: 120px; resize: none; }
        .star-input-row { display: flex; gap: 10px; }
        .star-cursor { cursor: pointer; transition: 0.2s; }
        .star-cursor:hover { transform: scale(1.2); color: #FFD700; }
        .file-upload-label { display: flex; align-items: center; gap: 10px; background: #fff; padding: 12px 25px; border-radius: 10px; border: 1.5px dashed #ccc; width: fit-content; cursor: pointer; font-weight: 700; color: #666; transition: 0.3s; }
        .tapovan-dashed:hover { border-color: var(--tapovan-orange); color: var(--tapovan-orange); }
        .btn-submit-review { background: var(--tapovan-orange); color: white; border: none; padding: 15px 40px; border-radius: 50px; font-weight: 900; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: 0.3s; }
        .btn-submit-review:hover { opacity: 0.9; transform: translateY(-3px); }

        .reviews-grid-v2 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
        .review-card-v2 { background: #fff; padding: 30px; border-radius: 20px; border: 1.5px solid #f0f0f0; transition: 0.3s; position: relative; }
        .tapovan-rev-card:hover { border-color: var(--tapovan-orange); transform: translateY(-5px); box-shadow: 0 15px 40px rgba(0,0,0,0.05); }
        .rev-user-header { display: flex; align-items: center; gap: 15px; margin-bottom: 20px; position: relative; }
        .user-avatar { width: 50px; height: 50px; border-radius: 50%; }
        .user-meta h4 { font-size: 1.1rem; font-weight: 800; margin: 0; color: #111; }
        .tapovan-tag { font-size: 0.8rem; color: var(--tapovan-orange); font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }
        .rev-stars { display: flex; gap: 4px; margin-top: 5px; }
        .rev-comment { font-size: 1rem; line-height: 1.7; color: #555; font-style: italic; margin-bottom: 25px; }
        .rev-image-box { border-radius: 12px; overflow: hidden; margin-bottom: 20px; aspect-ratio: 16/9; }
        .rev-image-box img { width: 100%; height: 100%; object-fit: cover; }
        .rev-footer { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #f5f5f5; padding-top: 15px; }
        .rev-date { font-size: 0.8rem; color: #bbb; font-weight: 600; }
        .rev-helpful { font-size: 0.8rem; color: #888; font-weight: 700; }
        .tapovan-link { color: var(--tapovan-orange); cursor: pointer; text-decoration: underline; }

        .load-more-row { margin-top: 60px; text-align: center; }
        .btn-load-more { background: none; border: 2px solid #eee; padding: 15px 40px; border-radius: 50px; font-weight: 800; color: #444; cursor: pointer; transition: 0.3s; }
        .tapovan-border:hover { border-color: var(--tapovan-orange); color: var(--tapovan-orange); }

        @media (max-width: 1100px) {
          .hero-grid { grid-template-columns: 1fr; gap: 40px; }
          .product-visual-area { position: relative; top: 0; }
          .main-image-wrapper { padding: 20px; }
          .product-main-img { height: 350px; }
          .trust-icons-v2 { grid-template-columns: repeat(2, 1fr); }
          .features-grid { grid-template-columns: repeat(2, 1fr); }
          .millions-title { font-size: 4rem; }
          .reviews-grid-v2 { grid-template-columns: repeat(2, 1fr); }
          .loved-gallery { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 768px) {
           .product-page { padding-top: 100px; }
           .thumbnail-gallery { 
             justify-content: flex-start; 
             overflow-x: auto; 
             padding: 10px 0;
             scrollbar-width: none;
           }
           .thumbnail-gallery::-webkit-scrollbar { display: none; }
           .thumb-item { flex: 0 0 70px; height: 70px; }

           .variant-grid-v2 { grid-template-columns: repeat(2, 1fr); gap: 10px; }
           .v-header-v2 { font-size: 0.75rem; padding: 6px 10px; }
           .v-body-v2 { padding: 10px; }
           .v-price-v2 { font-size: 1.1rem; }
           .v-old-v2, .v-off-v2 { font-size: 0.7rem; }
           .v-per-unit-v2 { font-size: 0.7rem; }

           .product-main-img { 
             height: 300px; 
             width: auto;
             max-width: 100%;
             margin: 0 auto;
           }
           .main-image-wrapper { 
             padding: 20px; 
             display: flex;
             justify-content: center;
             align-items: center;
             overflow: hidden;
           }
           .product-main-name { 
             font-size: 1.8rem; 
             line-height: 1.2;
             overflow-wrap: break-word;
             white-space: normal;
             width: 100%;
           }
           .current-price { font-size: 2.2rem; }
           .btn-buy-now-v2 { width: 100%; padding: 20px; font-size: 1.2rem; border-radius: 12px; }

           /* New Price Row UX */
           .price-main-row-v3 { margin-bottom: 25px; }
           .price-box-v3 { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
           .current-price-v3 { font-size: 2.8rem; font-weight: 900; color: #111; }
           .old-price-v3 { font-size: 1.4rem; color: #aaa; text-decoration: line-through; }
           .discount-pill-v3 { background: #e8f5e9; color: #2e7d32; padding: 4px 10px; border-radius: 4px; font-size: 0.85rem; font-weight: 800; }
           .mrp-subtext-v3 { font-size: 0.8rem; color: #888; margin-top: 5px; font-weight: 500; }
           .features-grid { grid-template-columns: repeat(2, 1fr); gap: 15px; }
           .feature-card { padding: 25px 15px; }
           .feature-card h3 { font-size: 1rem; }
           .feature-card p { font-size: 0.8rem; }
           .f-icon { width: 45px; height: 45px; margin-bottom: 15px; }
           .reviews-grid-v2 { grid-template-columns: 1fr; gap: 20px; }
           .form-grid { grid-template-columns: 1fr; }
           .form-group.full-width { grid-column: span 1; }
           .reviews-header-main { flex-direction: column; align-items: center; text-align: center; gap: 20px; }
           .big-rating { font-size: 3.5rem; }
           .millions-title { font-size: 3.2rem; }
           .loved-by-script { font-size: 2.2rem; }
           .product-main-img { height: 280px; }
           .offers-stack-mobile {
             display: flex;
             flex-direction: column;
             gap: 20px;
             margin-bottom: 30px;
           }
           .promo-bar-v2, .upsell-card { 
             width: 100%;
             margin-bottom: 0; 
             height: auto;
             padding: 15px;
             display: flex;
             align-items: center;
             border-radius: 12px;
           }
           .promo-bar-v2 { border: 1.5px dashed #4caf50; }
           .upsell-card { border: 2.5px solid var(--tapovan-orange); background: #fff9f0; }
           .kit-thumb { width: 50px; height: 50px; }
           .kit-info h4 { font-size: 0.9rem; }
           .btn-add-upsell { padding: 6px 12px; font-size: 0.75rem; }
           .action-footer-row { flex-direction: column; gap: 15px; }
           .loved-gallery { grid-template-columns: repeat(2, 1fr); gap: 10px; padding: 20px 10px 0; }
           .gallery-item { border-radius: 12px; aspect-ratio: 1/1; }

           .product-info {
             overflow-x: hidden; /* Contain the negative margin carousels */
             width: 100%;
           }
           .trust-icons-v2 {
             display: flex;
             overflow-x: auto;
             gap: 20px;
             margin: 40px -20px 0;
             padding: 40px 20px 0;
             scrollbar-width: none;
           }
           .trust-icons-v2::-webkit-scrollbar { display: none; }
           .trust-v2-item { 
             flex: 0 0 150px; 
             text-align: center;
           }
           .trust-v2-item p { font-size: 0.8rem; }

           .offers-stack-mobile {
             display: flex;
             flex-direction: column;
             gap: 25px;
             margin-bottom: 30px;
           }
           .promo-bar-v2, .upsell-card { 
             width: 100%;
             margin-bottom: 0; 
             height: auto;
             padding: 15px;
             display: flex;
             align-items: center;
             border-radius: 12px;
           }
           .promo-bar-v2.tapovan-promo { border: 1.5px dashed var(--tapovan-orange); }
           .upsell-card.amarkanth-upsell { border: 2.5px solid var(--brand-red); background: #fff5f5; }
           .amarkanth-badge { background: var(--brand-red); }
           .kit-thumb { width: 50px; height: 50px; }
           .kit-info h4 { font-size: 0.9rem; }
        }
      `}} />
    </div>
  );
};

export default TapovanPremiumTea;

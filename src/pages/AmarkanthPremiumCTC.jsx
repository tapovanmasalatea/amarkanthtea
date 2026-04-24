import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ShieldCheck, Coffee, Package, Clock, Leaf, Star, Minus, Plus, Ticket, ChevronDown, Zap, Heart, Sparkles, Truck, Headphones, RotateCcw, Search, Camera, Send, X } from 'lucide-react';
import amarkanthImg from '../assets/amarkanth.png';
import amarkanthPackImg from '../assets/amarkanth_pack.png';
import tapovanImg from '../assets/tapovan.png';
import tapovanPackImg from '../assets/tapovan_pack.png';
import logoImg from '../assets/logo.png';
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

const AmarkanthPremiumCTC = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('1kg');
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  const handleBuyNow = () => {
    navigate('/checkout', {
      state: {
        name: "Amarkanth Premium CTC",
        variant: variants[variant].label,
        price: variants[variant].price,
        quantity: quantity,
        image: amarkanthImg
      }
    });
  };
  
  const productImages = [
    amarkanthImg,
    amarkanthPackImg,
    "/amarkanth_tea_brewing_detail_1777048056343.png",
    "/amarkanth_dry_leaves_detail_1777048081753.png"
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
      icon: <Leaf className="text-brand-red" />,
      title: "Assam Select",
      desc: "Finest two-leaf and bud CTC blend from premium gardens of Assam."
    },
    {
      icon: <Coffee className="text-brand-red" />,
      title: "Strong Brew",
      desc: "Rich dark reddish colour, bold aroma, perfect kadak chai experience."
    },
    {
      icon: <Package className="text-brand-red" />,
      title: "More Cups",
      desc: "Premium CTC — fewer leaves required, more cups per packet."
    },
    {
      icon: <Clock className="text-brand-red" />,
      title: "365-Day Fresh",
      desc: "Sealed freshness technology locks aroma for a full year."
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1544787210-2211d44b565a?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515442261904-68d009088658?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576091160550-2173bdd99602?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1594631252845-29fc458631b6?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=500&auto=format&fit=crop"
  ];

  const faqs = [
    {
      question: "What makes Amarkanth Premium CTC Tea unique?",
      answer: "Amarkanth Premium is a curated blend of the finest two-leaves-and-a-bud CTC tea from select gardens in Assam. It is specifically processed to release maximum color and a bold, malty aroma with fewer tea leaves."
    },
    {
      question: "How should I store the tea for maximum freshness?",
      answer: "We recommend storing the tea in an airtight container in a cool, dry place, away from direct sunlight and strong odors. Our packaging is designed with sealed freshness technology to lock in the aroma for up to 365 days."
    },
    {
      question: "How many cups of tea can I make from a 1kg pack?",
      answer: "Due to our 'Kam Chai Patti, Zyada Pyaliyan' formula, you can typically brew significantly more cups than standard tea blends. On average, a 1kg pack can serve up to 400-450 cups depending on your preferred strength."
    },
    {
      question: "Is this tea blend 100% natural?",
      answer: "Yes, Amarkanth Premium CTC is 100% natural. We use zero preservatives, no artificial colors, and no added chemicals. The bold reddish color is a result of the high-quality Assam tea leaves and our superior CTC processing."
    }
  ];

  const initialReviews = [
    {
      id: 1,
      name: "Rajesh Kumar",
      tagline: "True Tea Lover",
      rating: 5,
      comment: "The most authentic kadak chai I've had in years. The color and aroma are just perfect for my morning ritual.",
      image: "https://images.unsplash.com/photo-1594631252845-29fc458631b6?q=80&w=300&auto=format&fit=crop",
      date: "2 days ago"
    },
    {
      id: 2,
      name: "Sneha Sharma",
      tagline: "Verified Buyer",
      rating: 4,
      comment: "Love the cardamom hint. It's subtle but makes a huge difference. Packaging is very premium too.",
      image: "https://images.unsplash.com/photo-1544787210-2211d44b565a?q=80&w=300&auto=format&fit=crop",
      date: "1 week ago"
    },
    {
      id: 3,
      name: "Amit Patel",
      tagline: "Energy Seeker",
      rating: 5,
      comment: "Strong, bold and exactly what I need to start my day. Best value for money in the premium segment.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop",
      date: "3 weeks ago"
    }
  ];

  return (
    <div className="product-page">
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
                  alt="Amarkanth Premium CTC Tea" 
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
              <h1 className="product-main-name">Amarkanth Premium CTC</h1>
              <div className="rating-row">
                <Star size={16} fill="#FFD700" color="#FFD700" />
                <span>4.1 (310 reviews)</span>
              </div>
              <p className="product-info-tagline">Premium Tea With Cardamom</p>

              <div className="price-main-row">
                <div className="price-box">
                   <span className="current-price">₹{variants[variant].price}</span>
                   <span className="old-price-strikethrough">₹{variants[variant].oldPrice}</span>
                </div>
                <span className="mrp-subtext">MRP (Incl. of all taxes)</span>
              </div>

              {/* Offers Carousel Mobile */}
              <div className="offers-carousel-v2">
                {/* Offer Bar */}
                <div className="promo-bar-v2">
                  <Ticket size={20} className="text-brand-red" />
                  <p>Buy now and Get a <strong>Scratch Card</strong> & win a <strong>Thailand Trip!</strong></p>
                </div>

                {/* Upsell Kit Box */}
                <div className="upsell-card">
                  <div className="test-badge">TEST. TRUST.</div>
                  <div className="upsell-content">
                    <img src={amarkanthPackImg} alt="Kit" className="kit-thumb" />
                    <div className="kit-info">
                      <h4>Amarkanth Purity Testing Kit</h4>
                      <p>₹99</p>
                    </div>
                    <button className="btn-add-upsell">Add to cart</button>
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
                <button className="btn-buy-now-v2" onClick={handleBuyNow}>Buy Now</button>
              </div>

              <div className="product-description-v2">
                <h3 className="section-title-v2">PRODUCT DESCRIPTION</h3>
                <p>
                  Experience the pinnacle of Assam tea, subtly infused with natural cardamom for an aromatic finish. 
                  Our Amarkanth Premium CTC is crafted for those who demand strength, color, and aroma in every sip. 
                  Sourced from the finest gardens, this blend ensures a rich reddish brew that revitalizes your senses. 
                  Designed for the modern tea lover who values purity and performance.
                </p>
              </div>

              <div className="trust-icons-v2">
                 <div className="trust-v2-item"><Truck size={40} /><p>Free Shipping on Orders Above ₹499</p></div>
                 <div className="trust-v2-item"><Headphones size={40} /><p>360° Customer Support</p></div>
                 <div className="trust-v2-item"><RotateCcw size={40} /><p>Up to 30 Days Return</p></div>
                 <div className="trust-v2-item"><Search size={40} /><p>70+ Quality Checks</p></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="product-features">
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
          <h2 className="section-title text-center">Frequently Asked <span className="text-brand-red">Questions</span></h2>
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
              <h2 className="section-title">Customer <span className="text-brand-red">Reviews</span></h2>
              <div className="main-rating-summary">
                <div className="big-rating">4.1</div>
                <div className="stars-col">
                  <div className="stars-row">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill={i < 4 ? "#FFD700" : "none"} color="#FFD700" />
                    ))}
                  </div>
                  <p>Based on 310 reviews</p>
                </div>
              </div>
            </div>
            <button className="btn-write-review" onClick={() => setIsReviewOpen(!isReviewOpen)}>
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
                      <textarea placeholder="Tell us about your experience with Amarkanth Tea..."></textarea>
                    </div>
                    <div className="form-group">
                      <label className="file-upload-label">
                        <Camera size={20} />
                        <span>Add Photo</span>
                        <input type="file" hidden />
                      </label>
                    </div>
                    <div className="form-actions">
                      <button type="submit" className="btn-submit-review">
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
                className="review-card-v2"
              >
                <div className="rev-user-header">
                  <img src={`https://ui-avatars.com/api/?name=${rev.name}&background=random`} alt={rev.name} className="user-avatar" />
                  <div className="user-meta">
                    <h4>{rev.name}</h4>
                    <span className="tagline">{rev.tagline}</span>
                  </div>
                  <div className="rev-stars">
                    {[...Array(5)].map((_, i) => ( rev.rating > i && <Star key={i} size={14} fill="#FFD700" color="#FFD700" /> ))}
                  </div>
                </div>
                <p className="rev-comment">"{rev.comment}"</p>
                {rev.image && (
                  <div className="rev-image-box">
                    <img src={rev.image} alt="Review" />
                  </div>
                )}
                <div className="rev-footer">
                  <span className="rev-date">{rev.date}</span>
                  <div className="rev-helpful">Helpful? <span>Yes</span></div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="load-more-row">
            <button className="btn-load-more">VIEW ALL REVIEWS</button>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

        :root {
          --brand-red: #d50505;
          --brand-dark: #8b0000;
          --brand-gold: #ffc107;
          --brand-cream: #fdfdfd;
          --brand-maroon: #800000;
          --tapovan-orange: #f15800;
          --tapovan-dark: #c04800;
          --trust-green: #2e7d32;
        }

        .text-brand-red { color: var(--brand-red); }
        .text-tapovan-orange { color: var(--tapovan-orange); }
        .text-center { text-align: center; }
        .italic { font-style: italic; }

        .product-page {
          padding-top: 100px;
          background: #fff;
          color: #333;
          font-family: 'Inter', sans-serif;
        }

        .product-hero { padding: 40px 0; }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          align-items: flex-start;
        }

        .product-visual-area { position: sticky; top: 120px; }

        .main-image-wrapper {
          background: #fdfdfd;
          border-radius: 20px;
          padding: 40px;
          display: flex;
          justify-content: center;
          border: 1px solid #f0f0f0;
          margin-bottom: 20px;
          position: relative;
        }

        .product-main-img {
          width: 85%;
          height: 450px;
          object-fit: contain;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.1));
        }

        .thumbnail-gallery { display: flex; gap: 15px; justify-content: center; }

        .thumb-item {
          width: 80px;
          height: 80px;
          border-radius: 10px;
          border: 2px solid #eee;
          overflow: hidden;
          cursor: pointer;
          transition: 0.3s;
          background: white;
        }

        .thumb-item.active { border-color: var(--brand-red); }
        .thumb-item img { width: 100%; height: 100%; object-fit: cover; }

        .rating-row { display: flex; align-items: center; gap: 8px; font-weight: 600; color: #666; margin-bottom: 5px; }
        .product-main-name { font-size: 2.2rem; font-weight: 900; color: #111; margin-bottom: 5px; font-family: 'Outfit', sans-serif; text-transform: uppercase; letter-spacing: 1px; }
        .product-info-tagline { font-size: 1.2rem; font-weight: 600; color: var(--brand-red); margin-bottom: 25px; font-family: 'Inter', sans-serif; }

        .price-main-row { margin-bottom: 25px; }
        .current-price { font-size: 3.5rem; font-weight: 900; color: #111; margin-right: 15px; }
        .old-price-strikethrough { font-size: 1.8rem; color: #bbb; text-decoration: line-through; }
        .mrp-subtext { display: block; font-size: 0.85rem; color: #888; margin-top: 5px; }

        .promo-bar-v2 {
          background: #e8f5e9;
          padding: 15px 20px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 30px;
          border: 1px dashed #4caf50;
        }
        .promo-bar-v2 p { margin: 0; font-size: 1.05rem; color: #2e7d32; }
        .promo-bar-v2 strong { color: #1b5e20; }

        .upsell-card {
           background: #f1f8f9;
           border-radius: 15px;
           padding: 20px;
           margin-bottom: 40px;
           position: relative;
           border: 1px solid #e0f2f1;
        }
        .test-badge { position: absolute; top: -10px; left: 20px; background: #004d40; color: white; padding: 4px 10px; font-size: 0.7rem; font-weight: 800; border-radius: 4px; }
        .upsell-content { display: flex; align-items: center; gap: 20px; }
        .kit-thumb { width: 80px; height: 80px; object-fit: contain; background: white; border-radius: 10px; }
        .kit-info { flex: 1; }
        .kit-info h4 { font-size: 1.1rem; margin-bottom: 5px; color: #333; }
        .kit-info p { font-weight: 800; font-size: 1.2rem; margin: 0; }
        .btn-add-upsell { background: #fff; border: 1.5px solid #004d40; color: #004d40; padding: 8px 20px; border-radius: 30px; font-weight: 800; cursor: pointer; transition: 0.3s; }
        .btn-add-upsell:hover { background: #004d40; color: #fff; }

        .variant-selector-v2 { margin-bottom: 40px; }
        .variant-title { font-weight: 800; margin-bottom: 15px; color: #222; }
        .variant-grid-v2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; }
        
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
          padding: 8px 15px;
          font-size: 0.85rem;
          font-weight: 700;
          color: #444;
          text-align: left;
          transition: 0.3s;
        }
        
        .v-body-v2 { padding: 15px; text-align: left; }
        
        .v-price-row-v2 { display: flex; align-items: baseline; gap: 8px; margin-bottom: 5px; }
        .v-price-v2 { font-size: 1.4rem; font-weight: 900; color: #111; }
        .v-old-v2 { font-size: 0.9rem; color: #999; text-decoration: line-through; }
        .v-off-v2 { font-size: 0.85rem; color: #d50505; font-weight: 700; }
        
        .v-per-unit-v2 { font-size: 0.8rem; color: var(--trust-green); font-weight: 600; }
        
        /* Selected State */
        .variant-card-v2.active { border-color: var(--brand-red); box-shadow: 0 10px 20px rgba(0,0,0,0.05); }
        .variant-card-v2.active .v-header-v2 { background: var(--brand-red); color: white; }

        .action-footer-row { display: flex; gap: 20px; margin-bottom: 50px; }
        .qty-picker-v2 { display: flex; align-items: center; gap: 20px; background: #f5f5f5; padding: 10px 20px; border-radius: 10px; }
        .qty-picker-v2 button { background: none; border: none; cursor: pointer; color: #444; }
        .qty-picker-v2 span { font-weight: 800; font-size: 1.2rem; min-width: 25px; text-align: center; }
        .btn-buy-now-v2 { flex: 1; background: var(--brand-gold); color: #000; border: none; border-radius: 50px; font-weight: 900; font-size: 1.3rem; cursor: pointer; transition: 0.3s; box-shadow: 0 10px 20px rgba(255, 193, 7, 0.2); }
        .btn-buy-now-v2:hover { background: #ffca28; transform: translateY(-3px); }

        .trust-icons-v2 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 60px; border-top: 1px solid #eee; padding-top: 40px; }
        .trust-v2-item { text-align: center; }
        .trust-v2-item svg { color: #004d40; margin-bottom: 15px; opacity: 0.8; }
        .trust-v2-item p { font-size: 0.9rem; font-weight: 700; color: #555; line-height: 1.3; }

        .product-features { padding: 100px 0; background: #fff; }
        .features-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; }
        .feature-card { background: white; padding: 40px 30px; border-radius: 20px; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.03); transition: 0.3s; border: 1px solid #f5f5f5; }
        .feature-card:hover { transform: translateY(-10px); }
        .f-icon { width: 60px; height: 60px; background: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 25px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); color: var(--brand-red); }

        .product-faq-section { padding: 100px 0; background: #fff; }
        .faq-container { max-width: 800px; margin: 0 auto; }
        .faq-item { border-bottom: 1px solid #eee; }
        .faq-question { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 25px 0; background: none; border: none; font-size: 1.2rem; font-weight: 700; text-align: left; cursor: pointer; color: #111; }
        .faq-icon { transition: 0.3s; color: var(--brand-red); }
        .faq-item.open .faq-icon { transform: rotate(180deg); }
        .faq-answer { overflow: hidden; color: #666; line-height: 1.7; padding-bottom: 25px; }

        .loved-by-section { padding: 100px 0; background: #fdf8f0; text-align: center; overflow: hidden; }
        .millions-title { font-size: 6rem; font-weight: 900; color: #1a1a1a; letter-spacing: -3px; line-height: 1; }
        .loved-by-script { font-family: 'Dancing Script', cursive; font-size: 3.5rem; color: var(--brand-red); }
        .loved-gallery { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; padding: 40px 20px 0; }
        .gallery-item { aspect-ratio: 1; border-radius: 20px; overflow: hidden; }
        .gallery-item:nth-child(even) { transform: translateY(30px); }
        .gallery-item img { width: 100%; height: 100%; object-fit: cover; }

        /* Customer Reviews Section */
        .customer-reviews-section { padding: 100px 0; background: #fff; border-top: 1px solid #eee; }
        .reviews-header-main { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 60px; }
        .main-rating-summary { display: flex; align-items: center; gap: 20px; margin-top: 20px; }
        .big-rating { font-size: 4rem; font-weight: 900; color: #111; }
        .stars-col p { margin: 0; font-size: 0.9rem; color: #777; font-weight: 600; }
        .btn-write-review { background: #111; color: white; padding: 15px 30px; border-radius: 50px; font-weight: 800; font-size: 0.9rem; border: none; cursor: pointer; transition: 0.3s; }
        .btn-write-review:hover { background: var(--brand-red); }

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
        .file-upload-label:hover { border-color: var(--brand-red); color: var(--brand-red); }
        .btn-submit-review { background: var(--brand-red); color: white; border: none; padding: 15px 40px; border-radius: 50px; font-weight: 900; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: 0.3s; }
        .btn-submit-review:hover { background: var(--brand-dark); transform: translateY(-3px); }

        .reviews-grid-v2 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
        .review-card-v2 { background: #fff; padding: 30px; border-radius: 20px; border: 1.5px solid #f0f0f0; transition: 0.3s; position: relative; }
        .review-card-v2:hover { border-color: var(--brand-red); transform: translateY(-5px); box-shadow: 0 15px 40px rgba(0,0,0,0.05); }
        .rev-user-header { display: flex; align-items: center; gap: 15px; margin-bottom: 20px; position: relative; }
        .user-avatar { width: 50px; height: 50px; border-radius: 50%; }
        .user-meta h4 { font-size: 1.1rem; font-weight: 800; margin: 0; color: #111; }
        .user-meta .tagline { font-size: 0.8rem; color: var(--brand-red); font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }
        .rev-stars { display: flex; gap: 4px; margin-top: 5px; }
        .rev-comment { font-size: 1rem; line-height: 1.7; color: #555; font-style: italic; margin-bottom: 25px; }
        .rev-image-box { border-radius: 12px; overflow: hidden; margin-bottom: 20px; aspect-ratio: 16/9; }
        .rev-image-box img { width: 100%; height: 100%; object-fit: cover; }
        .rev-footer { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #f5f5f5; padding-top: 15px; }
        .rev-date { font-size: 0.8rem; color: #bbb; font-weight: 600; }
        .rev-helpful { font-size: 0.8rem; color: #888; font-weight: 700; }
        .rev-helpful span { color: var(--brand-red); cursor: pointer; text-decoration: underline; }

        .load-more-row { margin-top: 60px; text-align: center; }
        .btn-load-more { background: none; border: 2px solid #eee; padding: 15px 40px; border-radius: 50px; font-weight: 800; color: #444; cursor: pointer; transition: 0.3s; }
        .btn-load-more:hover { border-color: var(--brand-red); color: var(--brand-red); }

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
           .product-page { padding-top: 80px; }
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

           .current-price { font-size: 2.2rem; }
           .product-main-name { font-size: 1.8rem; }
           .loved-gallery { grid-template-columns: repeat(2, 1fr); }
           .trust-icons-v2 { grid-template-columns: 1fr; gap: 30px; }
           .features-grid { grid-template-columns: 1fr; }
           .reviews-grid-v2 { grid-template-columns: 1fr; }
           .form-grid { grid-template-columns: 1fr; }
           .form-group.full-width { grid-column: span 1; }
           .reviews-header-main { flex-direction: column; align-items: flex-start; gap: 20px; }
           .big-rating { font-size: 3rem; }
           .millions-title { font-size: 3rem; }
           .loved-by-script { font-size: 2.5rem; }
           .product-main-img { height: 300px; }
           .action-footer-row { flex-direction: column; }
           .btn-buy-now-v2 { width: 100%; padding: 15px; font-size: 1.1rem; }

           .offers-carousel-v2 {
             display: flex;
             gap: 15px;
             overflow-x: auto;
             margin: 0 -20px 30px;
             padding: 10px 20px;
             scrollbar-width: none;
           }
           .offers-carousel-v2::-webkit-scrollbar { display: none; }
           .promo-bar-v2, .upsell-card { 
             flex: 0 0 85%; 
             margin-bottom: 0; 
             height: 100px;
             display: flex;
             align-items: center;
             border-radius: 15px;
           }
           .promo-bar-v2 { border: 1px dashed #4caf50; }
           .upsell-card { border: 1px solid #e0f2f1; }
        }
      `}} />
    </div>
  );
};

export default AmarkanthPremiumCTC;

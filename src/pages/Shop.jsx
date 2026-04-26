import React, { useState } from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import amarkanthImg from '../assets/amarkanth.webp';
import tapovanImg from '../assets/tapovan.webp';

const Shop = () => {
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Amarkanth Premium CTC Tea With Cardamom",
      category: "ctc",
      description: "Premium CTC blend with natural cardamom for a bold, aromatic, and perfect kadak chai experience.",
      price: 740,
      image: amarkanthImg,
      badge: "Bestseller",
      color: "#d50505",
      lightBg: "#fff0f0",
      rating: "4.9",
      link: "/product/amarkanth-premium-ctc"
    },
    {
      id: 2,
      name: "Tapovan Premium Tea",
      category: "ctc",
      description: "Finest high-grown tea blend from Assam's gardens, offering a rich, strong, and refreshing mountain-fresh taste.",
      price: 740,
      image: tapovanImg,
      badge: "Special Edition",
      color: "#f15800",
      lightBg: "#fff8f0",
      rating: "4.8",
      link: "/product/tapovan-premium-tea"
    }
  ];

  const handleBuyNow = (p) => {
    navigate('/checkout', {
      state: {
        name: p.name,
        variant: "1kg Box",
        price: p.price,
        quantity: 1,
        image: p.image
      }
    });
  };

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="shop-page">
      <header className="page-header">
        <div className="container">
          <p className="subtitle">The Collection</p>
          <h1>Elevate Your <span className="text-red">Ritual</span></h1>
          
          <div className="shop-filters">
            <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All Blends</button>
            <button className={filter === 'ctc' ? 'active' : ''} onClick={() => setFilter('ctc')}>CTC Milk Tea</button>
          </div>
        </div>
      </header>

      <section className="shop-grid-section">
        <div className="container">
          <div className="shop-grid">
            {filteredProducts.map((p) => (
              <motion.div 
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={p.id} 
                className="modern-card"
                style={{ '--brand-color': p.color }}
              >
                {/* Top Half: Visuals */}
                <div className="card-top" style={{ backgroundColor: p.lightBg }}>
                  <div className="ribbon-badge">
                    <span>{p.badge}</span>
                  </div>
                  
                  <div className="image-wrapper">
                    <img src={p.image} alt={p.name} className="product-image" loading="lazy" />
                  </div>

                  <div className="rating-pill">
                    <span className="star-icon">★</span>
                    <span className="rating-val">{p.rating} | 1 KG PACK</span>
                  </div>
                </div>

                {/* Bottom Half: Info & Actions */}
                <div className="card-bottom" style={{ backgroundColor: p.color }}>
                  <div className="info-section">
                    <h3 className="modern-product-name">{p.name}</h3>
                    <p className="product-desc-short">{p.description}</p>
                    <p className="modern-price">₹{p.price}</p>
                    <p className="tax-label">MRP Inclusive of all taxes</p>
                  </div>

                  <div className="selection-section">
                    <Link to={p.link || "#"} className="modern-add-btn" style={{ textAlign: 'center', textDecoration: 'none', display: 'block' }}>
                      VIEW DETAILS
                    </Link>
                    <button className="modern-add-btn" onClick={() => handleBuyNow(p)}>
                      BUY NOW
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .shop-page {
          background: var(--cream);
          min-height: 100vh;
          padding-top: 160px;
        }

        .page-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .page-header h1 {
          font-size: 3.5rem;
          font-weight: 900;
          font-family: 'Outfit', sans-serif;
          margin: 10px 0;
          color: #111;
        }

        .page-header .subtitle {
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 4px;
          font-size: 0.9rem;
          color: var(--primary-red);
          margin: 0;
        }

        .text-red { color: var(--primary-red); }

        .shop-filters {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-top: 60px;
        }

        .shop-filters button {
          background: none;
          border: none;
          padding: 10px 0;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.8rem;
          cursor: pointer;
          color: var(--text-muted);
          border-bottom: 2px solid transparent;
          transition: var(--transition-smooth);
        }

        .shop-filters button.active {
          color: var(--primary-red);
          border-bottom-color: var(--primary-red);
        }

        .shop-grid-section {
          padding-bottom: 100px;
        }

        .shop-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 40px;
        }

        /* Modern Card Styles (Shared with Home) */
        .modern-card {
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
          border: 1px solid rgba(0,0,0,0.05);
          background: white;
        }

        .modern-card:hover {
          transform: translateY(-8px);
        }

        .card-top {
          position: relative;
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 380px;
        }

        .ribbon-badge {
          position: absolute;
          top: 0;
          left: 20px;
          background: var(--brand-color);
          color: white;
          padding: 8px 20px 12px 20px;
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          clip-path: polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 85%);
          z-index: 10;
        }

        .image-wrapper {
          width: 100%;
          height: 250px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .product-image {
          max-width: 90%;
          max-height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 15px 30px rgba(0,0,0,0.15));
        }

        .rating-pill {
          background: white;
          padding: 6px 15px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          font-weight: 700;
          color: #333;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }

        .star-icon {
          color: #ffb400;
          font-size: 1rem;
        }

        .card-bottom {
          padding: 30px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          color: white;
        }

        .info-section {
          margin-bottom: 25px;
        }

        .modern-product-name {
          font-size: 1.6rem;
          font-weight: 800;
          margin-bottom: 12px;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .product-desc-short {
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 20px;
          opacity: 0.9;
          font-weight: 400;
        }

        .modern-price {
          font-size: 1.8rem;
          font-weight: 800;
          margin-bottom: 5px;
        }

        .tax-label {
          font-size: 0.75rem;
          opacity: 0.8;
          font-weight: 500;
        }

        .selection-section {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .modern-add-btn {
          background: white;
          color: var(--brand-color);
          border: none;
          padding: 16px;
          border-radius: 12px;
          font-weight: 800;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .modern-add-btn:hover {
          background: #f8f8f8;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        @media (max-width: 768px) {
          .shop-page { padding-top: 120px; }
          .page-header h1 { font-size: 2.2rem; }
          .page-header .subtitle { font-size: 0.75rem; letter-spacing: 2px; }
          .modern-product-name { font-size: 1.4rem; }
          .card-top { height: 320px; }
          .image-wrapper { height: 200px; }
          .shop-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .shop-filters {
            gap: 15px;
            flex-wrap: wrap;
            margin-top: 40px;
          }
        }
      `}} />
    </div>
  );
};

export default Shop;

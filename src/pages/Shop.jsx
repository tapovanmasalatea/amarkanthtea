import React, { useState } from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import amarkanthImg from '../assets/amarkanth.png';
import tapovanImg from '../assets/tapovan.png';

const Shop = () => {
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Amarkanth Premium CTC Tea With Cardamom",
      category: "ctc",
      price: 740,
      image: amarkanthImg,
      tag: "Bestseller",
      link: "/product/amarkanth-premium-ctc"
    },
    {
      id: 2,
      name: "Tapovan Premium Tea",
      category: "ctc",
      price: 740,
      image: tapovanImg,
      tag: "Mountain Fresh",
      link: "/product/tapovan-premium-tea"
    },
    {
      id: 3,
      name: "Morning Ritual Blend",
      category: "ctc",
      price: 420,
      image: "https://images.unsplash.com/photo-1594631252845-29fc458631b6?auto=format&fit=crop&q=80&w=800",
      tag: "Everyday Strength"
    },
    {
      id: 4,
      name: "Wellness Spiced Green",
      category: "wellness",
      price: 650,
      image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&q=80&w=800",
      tag: "Pure Detox"
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
            <button className={filter === 'masala' ? 'active' : ''} onClick={() => setFilter('masala')}>Masala</button>
            <button className={filter === 'wellness' ? 'active' : ''} onClick={() => setFilter('wellness')}>Wellness</button>
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
                className="product-card"
              >
                <div className="p-img-container">
                  <img src={p.image} alt={p.name} />
                  <div className="p-overlay">
                    <button className="add-cart-btn" onClick={() => handleBuyNow(p)}><ShoppingBag size={18} /> Buy Now</button>
                  </div>
                </div>
                <div className="p-details">
                  <p className="p-tag">{p.tag}</p>
                  <h3>{p.name}</h3>
                  <div className="p-footer">
                    <span className="p-price">₹{p.price}</span>
                    <Link to={p.link || "#"} className="p-view">Details <ArrowRight size={14} /></Link>
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
        }

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
          font-family: 'Outfit', sans-serif;
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

        .shop-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 40px;
          padding-bottom: 100px;
        }

        .product-card {
          background: var(--white);
          border-radius: 4px;
          overflow: hidden;
          transition: var(--transition-smooth);
        }

        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.05);
        }

        .p-img-container {
          position: relative;
          height: 350px;
          overflow: hidden;
        }

        .p-img-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .p-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 20px;
          background: linear-gradient(transparent, rgba(0,0,0,0.6));
          display: flex;
          justify-content: center;
          transform: translateY(100%);
          transition: var(--transition-smooth);
        }

        .product-card:hover .p-overlay {
          transform: translateY(0);
        }

        .add-cart-btn {
          background: var(--white);
          color: var(--text-main);
          border: none;
          padding: 12px 25px;
          border-radius: 2px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.8rem;
          cursor: pointer;
          text-transform: uppercase;
        }

        .p-details {
          padding: 30px;
        }

        .p-tag {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--primary-red);
          font-weight: 700;
          margin-bottom: 10px;
        }

        .p-details h3 {
          font-size: 1.4rem;
          margin-bottom: 20px;
          font-family: 'Outfit', sans-serif;
        }

        .p-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 20px;
          border-top: 1px solid rgba(0,0,0,0.05);
        }

        .p-price {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 1.2rem;
        }

        .p-view {
          background: none;
          border: none;
          display: flex;
          align-items: center;
          gap: 5px;
          font-weight: 600;
          font-size: 0.8rem;
          text-transform: uppercase;
          color: var(--text-muted);
          cursor: pointer;
        }

        .p-view:hover {
          color: var(--primary-red);
        }

        @media (max-width: 600px) {
          .shop-filters {
            flex-wrap: wrap;
            gap: 15px;
          }
        }
      `}} />
    </div>
  );
};

export default Shop;

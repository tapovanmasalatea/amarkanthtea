import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import amarkanthImg from '../assets/amarkanth.png';
import tapovanImg from '../assets/tapovan.png';
import mostlovedImg from '../assets/mostloved.png';

const products = [
  {
    id: 1,
    name: "Amarkanth Premium CTC Tea With Cardamom",
    subtitle: "Premium CTC Tea",
    description: "Premium CTC blend with natural cardamom for a bold, aromatic, and perfect kadak chai experience.",
    image: amarkanthImg,
    price: 740, // Updated to match product page default
    badge: "Bestseller",
    color: "#d50505", // Brand Red
    lightBg: "#fff0f0", // Very light shade of Amarkanth red
    rating: "4.9",
    link: "/product/amarkanth-premium-ctc"
  },
  {
    id: 2,
    name: "Tapovan Premium Tea",
    subtitle: "Premium Chai",
    description: "Finest high-grown tea blend from Assam's gardens, offering a rich, strong, and refreshing mountain-fresh taste.",
    image: tapovanImg,
    price: 740, // Updated to match product page default
    badge: "Special Edition",
    color: "#f15800", // Tapovan Orange
    lightBg: "#fff8f0", // Very light shade of Tapovan orange
    rating: "4.8",
    link: "/product/tapovan-premium-tea"
  }
];

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate('/checkout', {
      state: {
        name: product.name,
        variant: "1kg Box", // Default variant
        price: product.price,
        quantity: 1,
        image: product.image
      }
    });
  };

  return (
    <div className="modern-card" style={{ '--brand-color': product.color }}>
      {/* Top Half: Visuals */}
      <div className="card-top" style={{ backgroundColor: product.lightBg }}>
        <div className="ribbon-badge">
          <span>{product.badge}</span>
        </div>
        
        <div className="image-wrapper">
          <img src={product.image} alt={product.name} className="product-image" onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1594631252845-29fc458631b6?auto=format&fit=crop&q=80&w=800';
          }} />
        </div>

        <div className="rating-pill">
          <span className="star-icon">★</span>
          <span className="rating-val">{product.rating} | 1 KG PACK</span>
        </div>
      </div>

      {/* Bottom Half: Info & Actions */}
      <div className="card-bottom" style={{ backgroundColor: product.color }}>
        <div className="info-section">
          <h3 className="modern-product-name">{product.name}</h3>
          <p className="product-desc-short">{product.description}</p>
          <p className="modern-price">₹{product.price}</p>
          <p className="tax-label">MRP Inclusive of all taxes</p>
        </div>

        <div className="selection-section">
          <Link to={product.link || "#"} className="modern-add-btn" style={{ textAlign: 'center', textDecoration: 'none', display: 'block' }}>
            VIEW DETAILS
          </Link>
          <button className="modern-add-btn" onClick={handleBuyNow}>
            BUY NOW
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .modern-card {
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
          border: 1px solid rgba(0,0,0,0.05);
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
          .modern-product-name { font-size: 1.4rem; }
          .card-top { height: 320px; }
          .image-wrapper { height: 200px; }
        }
      `}} />
    </div>
  );
};

const ProductGrid = () => {
  return (
    <section className="product-grid-section">
      <div className="container">
        <div className="grid-header">
          <h2 className="grid-title">Signature Milk Tea Collection</h2>
        </div>
        
        <div className="products-container">
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .product-grid-section {
          padding: 5px 0 40px 0;
          background-image: url('${mostlovedImg}');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
        }

        .grid-header {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin: 40px 20px;
        }

        .grid-title {
          font-size: clamp(1.8rem, 5vw, 3.5rem);
          color: #d50505;
          font-weight: 900;
          letter-spacing: -0.04em;
          text-align: left;
        }

        .products-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 40px;
        }

        @media (max-width: 768px) {
          .product-grid-section {
            padding: 20px 0;
          }
          .grid-header {
            margin: 20px 20px;
          }
          .grid-title { 
            font-size: 1.8rem; 
            line-height: 1.2;
            text-align: left;
          }
          .products-container {
            grid-template-columns: 1fr;
            gap: 15px;
          }
        }
      `}} />
    </section>
  );
};

export default ProductGrid;

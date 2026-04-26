import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProductShowcase = () => {
  return (
    <section id="collections" className="product-showcase">
      <div className="product-block reveal">
        <div className="product-image">
          <img src="/amarkanth_bold_tea.webp" alt="Amarkanth CTC Tea" />
        </div>
        <div className="product-info">
          <p className="product-type">CTC Milk Tea</p>
          <h2 className="product-name">Amarkanth</h2>
          <p className="product-tagline">The Bold. The Commanding.</p>
          <p className="product-desc">
            A CTC tea of formidable character. Brewed for those who begin their day with intention and end it with conviction. Dark liquor, thick crema, a strength that does not apologise.
          </p>
          
          <div className="product-metrics">
            <div className="metric">
              <span>Strength</span>
              <div className="bar"><div className="fill" style={{width: '95%'}}></div></div>
              <span>9.5</span>
            </div>
            <div className="metric">
              <span>Body</span>
              <div className="bar"><div className="fill" style={{width: '90%'}}></div></div>
              <span>9.0</span>
            </div>
          </div>

          <button className="product-link">
            Explore Amarkanth <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div className="product-block reverse reveal">
        <div className="product-image">
          <img src="/tapovan_wellness_tea.webp" alt="Tapovan Masala Tea" />
        </div>
        <div className="product-info">
          <p className="product-type">Masala & Wellness Tea</p>
          <h2 className="product-name">Tapovan</h2>
          <p className="product-tagline">The Calm. The Sacred.</p>
          <p className="product-desc">
            Named for the mountain hermitages of ancient India, Tapovan is a brew of conscious intention. Spices chosen for their wisdom. A cup that heals as much as it nourishes.
          </p>
          
          <div className="product-metrics">
            <div className="metric">
              <span>Warmth</span>
              <div className="bar"><div className="fill" style={{width: '92%'}}></div></div>
              <span>9.2</span>
            </div>
            <div className="metric">
              <span>Purity</span>
              <div className="bar"><div className="fill" style={{width: '98%'}}></div></div>
              <span>9.8</span>
            </div>
          </div>

          <button className="product-link">
            Explore Tapovan <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .product-showcase {
          padding: 0;
          background: var(--cream);
        }

        .product-block {
          display: flex;
          min-height: 80vh;
        }

        .product-block.reverse {
          flex-direction: row-reverse;
          background: var(--white);
        }

        .product-image {
          flex: 1;
          overflow: hidden;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .product-block:hover .product-image img {
          transform: scale(1.05);
        }

        .product-info {
          flex: 1;
          padding: 8% 10%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .product-type {
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.8rem;
          color: var(--primary-red);
          margin-bottom: 15px;
        }

        .product-name {
          font-size: 4rem;
          margin-bottom: 10px;
        }

        .product-tagline {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 1.5rem;
          margin-bottom: 30px;
          opacity: 0.8;
        }

        .product-desc {
          color: var(--text-muted);
          margin-bottom: 40px;
          max-width: 500px;
        }

        .product-metrics {
          margin-bottom: 40px;
        }

        .metric {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 15px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .metric span:first-child { width: 80px; }

        .bar {
          flex: 1;
          height: 2px;
          background: rgba(0,0,0,0.05);
          position: relative;
        }

        .fill {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          background: var(--primary-red);
        }

        .product-link {
          background: none;
          border: none;
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          color: var(--text-main);
          padding: 0;
          width: fit-content;
        }

        .product-link:hover {
          color: var(--primary-red);
        }

        @media (max-width: 968px) {
          .product-block, .product-block.reverse {
            flex-direction: column;
          }
          .product-image {
            height: 50vh;
          }
          .product-info {
            padding: 60px 20px;
          }
        }
      `}} />
    </section>
  );
};

export default ProductShowcase;

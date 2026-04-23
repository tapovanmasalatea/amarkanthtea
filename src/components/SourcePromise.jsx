import React from 'react';
import { Leaf, Award, Box } from 'lucide-react';
import whyImg from '../assets/Why.png';

const SourcePromise = () => {
  const points = [
    {
      num: "01",
      icon: <Leaf size={32} />,
      title: "Estate Direct Sourcing",
      desc: "We work directly with tea gardens in Assam and the Nilgiri Hills, cutting out the auction floor and preserving freshness that no middleman can match."
    },
    {
      num: "02",
      icon: <Award size={32} />,
      title: "Small-Batch Blending",
      desc: "Each blend is a decision, not a formula. Our master blender tastes every batch before it is sealed — maintaining the signature profile cup after cup."
    },
    {
      num: "03",
      icon: <Box size={32} />,
      title: "Freshness-First Packaging",
      desc: "Nitrogen-flushed, foil-sealed, dispatched within days of blending. By the time it reaches your kitchen, the tea is still alive with its full flavour potential."
    }
  ];

  return (
    <section id="source" className="source-promise">
      <div className="container">
        <div className="promise-header">
          <h2 className="promise-title">Why Choose Amarkanth?</h2>
          <p className="promise-intro">
            From the high-altitude gardens of Assam and the Nilgiris, we source only first and second flush — when the leaf carries the most life.
          </p>
          <p className="promise-subtext">
            Every batch is tested, every blend is balanced by hand. We are small enough to care about every kilogram.
          </p>
        </div>
        
        {/* Desktop Grid */}
        <div className="promise-grid-desktop">
          {points.map((p, i) => (
            <div key={i} className="promise-item-desktop">
              <div className="item-num">{p.num}</div>
              <h3 className="item-title">{p.title}</h3>
              <p className="item-desc">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile Slider with Peek */}
        <div className="promise-slider-mobile">
          {points.map((p, i) => (
            <div key={i} className="promise-slide">
              <div className="slide-card">
                <div className="item-num-mobile">{p.num}</div>
                <h3 className="item-title">{p.title}</h3>
                <p className="item-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .source-promise {
          padding: 60px 0;
          background-image: url('${whyImg}');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          text-align: center;
          overflow: hidden;
        }

        .promise-header {
          max-width: 800px;
          margin: 0 auto 60px auto;
        }

        .promise-title {
          font-size: 2.5rem;
          color: #2c3e50;
          font-weight: 800;
          margin-bottom: 25px;
          letter-spacing: -0.02em;
        }

        .promise-intro {
          font-size: 1.25rem;
          color: #2c3e50;
          line-height: 1.6;
          margin-bottom: 20px;
          font-weight: 500;
        }

        .promise-subtext {
          font-size: 1.05rem;
          color: #666;
          line-height: 1.5;
        }

        /* Desktop Styles */
        .promise-grid-desktop {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 50px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .promise-item-desktop {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          text-align: center;
        }

        .item-num {
          font-family: 'Playfair Display', serif;
          font-size: 3.5rem;
          font-weight: 700;
          color: var(--primary-red);
          opacity: 0.15;
          margin-bottom: -20px;
          transition: opacity 0.3s ease;
        }

        .promise-item-desktop:hover .item-num {
          opacity: 1;
        }

        .item-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: #2c3e50;
          margin-bottom: 15px;
          position: relative;
          z-index: 2;
        }

        .item-desc {
          font-size: 0.95rem;
          color: #555;
          line-height: 1.6;
        }

        /* Mobile Slider Styles */
        .promise-slider-mobile {
          display: none;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding: 10px 0 30px 20px;
          scrollbar-width: none;
          gap: 15px;
          text-align: left;
        }

        .promise-slider-mobile::-webkit-scrollbar {
          display: none;
        }

        .promise-slide {
          flex: 0 0 85%;
          scroll-snap-align: start;
        }

        .slide-card {
          background: #fdfbf7;
          padding: 40px 25px;
          border-radius: 20px;
          height: 100%;
          border: 1px solid rgba(0,0,0,0.04);
          position: relative;
        }

        .item-num-mobile {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--primary-red);
          opacity: 0.2;
          margin-bottom: 10px;
        }

        @media (max-width: 768px) {
          .source-promise { padding: 40px 0; }
          .promise-header { text-align: left; padding: 0 20px; margin-bottom: 30px; }
          .promise-title { font-size: 2rem; }
          .promise-intro { font-size: 1.1rem; }
          .promise-grid-desktop { display: none; }
          .promise-slider-mobile { display: flex; }
        }
      `}} />
    </section>
  );
};

export default SourcePromise;

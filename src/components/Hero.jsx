import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [banner1, banner2];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-container">
      <div className="hero-carousel">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: i === currentIndex ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="slide"
            style={{ zIndex: i === currentIndex ? 2 : 1 }}
          >
            <img 
              src={img} 
              alt={`Amarkanth Banner ${i + 1}`} 
              className="carousel-img"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1594631252845-29fc458631b6?auto=format&fit=crop&q=80&w=2000';
              }}
            />
          </motion.div>
        ))}

        <div className="carousel-indicators">
          {images.map((_, i) => (
            <button 
              key={i}
              className={`indicator ${i === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hero-container {
          padding: 115px 0 20px 0 !important;
          background: var(--cream);
          width: 100%;
        }

        .hero-carousel {
          position: relative;
          width: 98%; /* 1% margin on each side to show the curves */
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr;
          overflow: hidden;
          background: #000;
          border-radius: 16px; /* Small curve as requested */
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .slide {
          grid-area: 1 / 1 / 2 / 2;
          width: 100%;
          height: auto;
        }

        .carousel-img {
          width: 100%;
          height: auto; /* Ensures full image visibility */
          display: block;
        }

        .carousel-indicators {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 12px;
          z-index: 10;
        }

        .indicator {
          width: 12px;
          height: 2px;
          background: rgba(255, 255, 255, 0.4);
          border: none;
          cursor: pointer;
          transition: all 0.4s ease;
          padding: 0;
        }

        .indicator.active {
          background: #FFFFFF;
          width: 35px;
        }

        @media (max-width: 768px) {
          .hero-container {
            padding: 60px 0 0 0 !important;
          }
          .hero-carousel {
            width: 95%;
            border-radius: 12px;
          }
        }
      `}} />
    </section>
  );
};

export default Hero;


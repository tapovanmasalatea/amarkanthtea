import React from 'react';
import Hero from '../components/Hero';
import PromotionBanner from '../components/PromotionBanner';
import ProductGrid from '../components/ProductGrid';
import SourcePromise from '../components/SourcePromise';
import BrandReels from '../components/BrandReels';
import Testimonials from '../components/Testimonials';
import BrandStats from '../components/BrandStats';

const Home = () => {
  return (
    <>
      <style>{`
        .hero-container, .product-grid {
          padding-top: 0 !important;
        }
        .product-grid {
          padding-bottom: 60px !important;
        }
        @media (max-width: 768px) {
          .product-grid {
            padding-bottom: 40px !important;
          }
        }
      `}</style>
      <Hero />
      <ProductGrid />
      <PromotionBanner />
      <SourcePromise />
      <BrandReels />
      <Testimonials />
      <BrandStats />
    </>
  );
};

export default Home;

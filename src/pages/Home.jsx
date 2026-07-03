import React from 'react';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Amarkanth Group | Premium Assam CTC & Wellness Masala Tea</title>
        <meta name="description" content="Discover Amarkanth Group — offering premium Assam CTC tea and Tapovan wellness masala tea. Sourced directly from finest gardens, FSSAI certified. Order online, COD available." />
        <link rel="canonical" href="https://www.amarkanth.com/" />
      </Helmet>
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

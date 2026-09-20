import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import PromotionBanner from '../components/PromotionBanner';
import ProductGrid from '../components/ProductGrid';
import SourcePromise from '../components/SourcePromise';
import BrandReels from '../components/BrandReels';
import Testimonials from '../components/Testimonials';
import BrandStats from '../components/BrandStats';

const Home = () => {
  const homeSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Amarkanth Tea Group",
      "url": "https://www.amarkanth.com",
      "logo": "https://www.amarkanth.com/amarkanth_bold_tea.webp",
      "description": "Manufacturer and supplier of premium Assam CTC tea and Tapovan wellness tea sourced directly from pristine Assam estates. FSSAI certified.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9893922659",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      },
      "sameAs": [
        "https://www.facebook.com/amarkanthtea",
        "https://www.instagram.com/amarkanthtea"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Amarkanth Tea Group",
      "url": "https://www.amarkanth.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.amarkanth.com/shop?search={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where is Amarkanth Tea sourced from?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Amarkanth Tea is sourced 100% directly from pristine, high-grown tea estates in Assam, India, ensuring unblended quality and authentic garden-fresh kadak chai flavor."
          }
        },
        {
          "@type": "Question",
          "name": "Is Cash on Delivery (COD) available for online orders?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer Cash on Delivery (COD) across India along with fast doorstep shipping."
          }
        },
        {
          "@type": "Question",
          "name": "Are Amarkanth & Tapovan teas FSSAI certified?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all our tea products undergo rigorous quality testing and are 100% FSSAI certified for maximum safety and freshness."
          }
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Amarkanth Group | Premium Assam CTC & Tapovan Masala Tea"
        description="Discover Amarkanth Group — offering premium Assam CTC tea with natural cardamom and Tapovan high-grown masala chai. 100% origin Assam tea, FSSAI certified, Cash on Delivery available."
        keywords="Assam tea, CTC chai, Tapovan masala tea, Amarkanth tea, cardamom chai, kadak chai, buy tea online India, tea distributor"
        canonical="https://www.amarkanth.com/"
        ogImage="/amarkanth_bold_tea.webp"
        schema={homeSchemas}
      />
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

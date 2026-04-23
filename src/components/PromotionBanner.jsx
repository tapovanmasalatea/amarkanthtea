import React from 'react';

const PromotionBanner = () => {
  return (
    <section className="promo-banner-section">
      <div className="container-full">
        <div className="promo-banner-wrapper">
          <img src="/src/assets/nextgen.png" alt="Amarkanth Next Gen" className="promo-img" />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .promo-banner-section {
          padding: 15px 0; /* Same ideology as Hero banner spacing */
          background-color: #ffffff;
        }

        .container-full {
          width: 100%;
          padding: 0 4%; /* Matches nav and hero container spacing */
        }

        .promo-banner-wrapper {
          width: 100%;
          border-radius: 16px; /* Matches Hero corner curve */
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .promo-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .container-full {
            padding: 0;
          }
          .promo-banner-wrapper {
            border-radius: 0;
          }
          .promo-banner-section {
            padding: 2px 0;
          }
        }
      `}} />
    </section>
  );
};

export default PromotionBanner;

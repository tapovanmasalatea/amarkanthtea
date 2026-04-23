import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      brand: "Amarkanth",
      text: "I've had tea from Darjeeling estates, from premium London brands — nothing hits like Amarkanth in the morning. It's not just strength. It's character.",
      author: "Rahul Sharma",
      location: "Mumbai, Maharashtra",
      initials: "RS"
    },
    {
      brand: "Tapovan",
      text: "Tapovan is what I reach for when the world needs to slow down. The spice balance is extraordinary — warming without overwhelming. My evening ritual.",
      author: "Priya Desai",
      location: "Pune, Maharashtra",
      initials: "PD"
    },
    {
      brand: "Both Brands",
      text: "We stocked Amarkanth in our café and it became our bestseller in three weeks. Customers ask for it by name. We're now also carrying Tapovan for the wellness crowd.",
      author: "Anil Kumar",
      location: "Café Owner, Indore",
      initials: "AK"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-grid">
          {reviews.map((r, i) => (
            <div key={i} className="test-card reveal">
              <div className="brand-tag">{r.brand}</div>
              <div className="stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="test-text">"{r.text}"</p>
              <div className="author">
                <div className="avatar">{r.initials}</div>
                <div className="author-info">
                  <div className="author-name">{r.author}</div>
                  <div className="author-loc">{r.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .testimonials-section {
          padding: 60px 0;
          background: #ffffff;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .test-card {
          padding: 40px;
          background: var(--cream);
          border-radius: 4px;
          display: flex;
          flex-direction: column;
        }

        .brand-tag {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
          color: var(--primary-red);
          margin-bottom: 15px;
        }

        .stars {
          color: #FFB800;
          display: flex;
          gap: 4px;
          margin-bottom: 20px;
        }

        .test-text {
          font-style: italic;
          font-size: 1.1rem;
          margin-bottom: 30px;
          flex-grow: 1;
          color: var(--text-main);
          line-height: 1.6;
        }

        .author {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .avatar {
          width: 45px;
          height: 45px;
          background: var(--primary-red);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.9rem;
        }

        .author-name {
          font-weight: 700;
          font-size: 0.95rem;
        }

        .author-loc {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        @media (max-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .testimonials-section {
            padding: 40px 0;
          }

          .testimonials-grid {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 20px;
            padding: 0 20px 20px 20px;
            margin: 0 -20px;
            scrollbar-width: none;
            grid-template-columns: none; /* Override grid */
          }

          .testimonials-grid::-webkit-scrollbar {
            display: none;
          }

          .test-card {
            flex: 0 0 85%; /* Peek effect */
            scroll-snap-align: center;
            padding: 30px 20px;
          }

          .test-text {
            font-size: 0.9rem; /* Decreased font size for mobile */
            margin-bottom: 20px;
          }
        }
      `}} />
    </section>
  );
};

export default Testimonials;

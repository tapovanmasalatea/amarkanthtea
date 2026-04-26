import React from 'react';
import { motion } from 'framer-motion';
import factoryImg from '../assets/factory.webp';
import logoImg from '../assets/logo.webp';
import diff1 from '../assets/diff1.webp';
import diff2 from '../assets/diff2.webp';
import diff3 from '../assets/diff3.webp';
import diff4 from '../assets/diff4.webp';
import diff5 from '../assets/diff5.webp';
import diff6 from '../assets/diff6.webp';

const About = () => {
  return (
    <div className="about-page">
      {/* 1. Factory Visual (Hero) */}
      <section className="factory-visual first-visual">
        <div className="container">
          <img src={factoryImg} alt="Our Factory" className="curve-visual" />
        </div>
      </section>

      {/* 2. Heritage Section (Dark Theme) */}
      <section className="heritage-section">
        <div className="side-label">About Us</div>
        <div className="container">
          <div className="heritage-grid">
            <div className="heritage-content">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="heritage-title"
              >
                Crafted with <span className="gold-italic">Passion</span>,<br />
                Served with Pride
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="heritage-text"
              >
                <p>Rooted in the rich tea culture of central India, Amarkanth Tea Group was born from a deep love for authentic chai. Patidar Tea Company — based in Anjad, Madhya Pradesh — has been serving families across the region with uncompromising quality for over a decade.</p>
                
                <div className="quote-box">
                  <blockquote>"Good Tea. Better Moments."</blockquote>
                  <cite>— THE AMARKANTH PROMISE</cite>
                </div>

                <p>From carefully selected Assam leaves to the moment they reach your cup, we oversee every step. Our two brands — Amarkanth and Tapovan — represent two beautiful faces of the same unwavering philosophy.</p>
              </motion.div>
            </div>

            <div className="heritage-timeline">
              <div className="timeline-item">
                <div className="time-label">Day 1</div>
                <div className="time-content">
                  <h3>Founded with Vision</h3>
                  <p>Patidar Tea Company established with a dream to bring premium Assam tea to every Indian home.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="time-label">Brand</div>
                <div className="time-content">
                  <h3>Amarkanth Launched</h3>
                  <p>Amarkanth Premium CTC Tea — the flagship brand with the iconic decorated elephant, symbolising strength and heritage.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="time-label">Next</div>
                <div className="time-content">
                  <h3>Tapovan — A New Range</h3>
                  <p>Tapovan Premium Tea introduced — bringing high-grown mountain freshness with a resealable slider pack.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="time-label">Now</div>
                <div className="time-content">
                  <h3>50,000+ Families Strong</h3>
                  <p>Trusted by households across M.P. and beyond. FSSAI, FDA and BRC Food certified for quality you can rely on.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Difference Section (Visual Cards Style) */}
      <section className="difference-section visual-style">
        <div className="container">
          <h2 className="diff-title">The Amarkanth <span className="diff-accent">Difference</span></h2>
          
          <div className="diff-visual-grid">
            {[
              { title: "Garden Fresh", subtitle: "Directly sourced from premium Assam gardens.", img: diff1 },
              { title: "Master Blending", subtitle: "Expert blenders craft each consistent batch.", img: diff2 },
              { title: "Trusted Heritage", subtitle: "Decades of trust across central India.", img: diff3 },
              { title: "Triple Certified", subtitle: "FSSAI, FDA and BRC Food certified.", img: diff4 },
              { title: "Best Value", subtitle: "More cups per gram, premium quality.", img: diff5 },
              { title: "Sealed Freshness", subtitle: "Packaging locks in aroma for 365 days.", img: diff6 }
            ].map((d, i) => (
              <motion.div 
                key={i} 
                className="diff-visual-card"
                style={{ backgroundImage: `url(${d.img})` }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="card-overlay"></div>
                <div className="card-content-overlay">
                  <h3>{d.title}</h3>
                  <p>{d.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Join the Family (Red Theme) */}
      <section className="join-section">
        <div className="container">
          <div className="join-content">
            <h2 className="join-title">Join the <span className="gold-italic">Amarkanth</span><br />Tea Family</h2>
            <p className="join-desc">Get exclusive updates on new blends, seasonal offers, and the stories behind your favourite cup. Be the first to know when we launch something extraordinary.</p>
            
            <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email address" />
              <button type="submit">SUBSCRIBE</button>
            </form>
            
            <p className="no-spam">No spam, ever. Just great chai stories and offers. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .about-page {
          background-color: #0c0c0c;
        }

        /* Factory Visual (Top) */
        .factory-visual.first-visual {
          padding: 140px 0 40px;
          background: #0c0c0c;
        }

        .curve-visual {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 30px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.5);
        }

        /* Heritage Section */
        .heritage-section {
          position: relative;
          padding: 80px 0 120px;
          color: white;
          background: #0c0c0c;
        }

        .side-label {
          position: absolute;
          left: 60px;
          top: 150px;
          transform: rotate(-90deg) translateX(-100%);
          transform-origin: left center;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 6px;
          font-weight: 800;
          color: #d4af37;
          opacity: 0.6;
          white-space: nowrap;
        }

        .heritage-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 100px;
          align-items: start;
        }

        .heritage-title {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 50px;
        }

        .gold-italic {
          color: #d4af37;
          font-style: italic;
          font-weight: 400;
        }

        .heritage-text p {
          font-size: 1.1rem;
          line-height: 1.7;
          color: rgba(255,255,255,0.8);
          margin-bottom: 30px;
        }

        .quote-box {
          background: #151515;
          padding: 40px;
          border-left: 4px solid #d4af37;
          margin: 40px 0;
        }

        .quote-box blockquote {
          font-size: 1.8rem;
          font-style: italic;
          color: #d4af37;
          margin-bottom: 10px;
        }

        .quote-box cite {
          font-size: 0.8rem;
          letter-spacing: 2px;
          font-weight: 700;
          opacity: 0.6;
        }

        /* Timeline */
        .heritage-timeline {
          display: flex;
          flex-direction: column;
          gap: 40px;
          padding-left: 40px;
          border-left: 1px solid rgba(255,255,255,0.1);
        }

        .timeline-item {
          display: flex;
          gap: 30px;
        }

        .time-label {
          color: #d4af37;
          font-weight: 800;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          width: 60px;
          flex-shrink: 0;
          padding-top: 5px;
        }

        .time-content h3 {
          font-size: 1.3rem;
          font-weight: 800;
          margin-bottom: 10px;
          color: white;
        }

        .time-content p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: rgba(255,255,255,0.6);
        }

        /* Difference Section (Visual Style) */
        .difference-section.visual-style {
          background: #fdfbf7;
          padding: 100px 0;
          color: #222;
        }

        .diff-title {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 800;
          text-align: center;
          margin-bottom: 60px;
        }

        .diff-visual-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .diff-visual-card {
          position: relative;
          height: 450px;
          border-radius: 16px;
          background-size: cover;
          background-position: center;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          padding: 30px;
          color: white;
          transition: transform 0.4s ease;
          cursor: pointer;
        }

        .diff-visual-card:hover {
          transform: translateY(-5px);
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.8));
          z-index: 1;
        }

        .card-content-overlay {
          position: relative;
          z-index: 2;
        }

        .card-content-overlay h3 {
          font-size: 1.6rem;
          font-weight: 800;
          margin-bottom: 8px;
          color: white;
        }

        .card-content-overlay p {
          font-size: 0.95rem;
          opacity: 0.9;
          line-height: 1.4;
          color: rgba(255,255,255,0.8);
        }

        @media (max-width: 1024px) {
          .diff-visual-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .diff-visual-grid {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 15px;
            padding: 0 20px 20px;
            margin: 0 -20px;
            scrollbar-width: none;
          }
          
          .diff-visual-grid::-webkit-scrollbar {
            display: none;
          }

          .diff-visual-card {
            flex: 0 0 85%;
            height: 400px;
            scroll-snap-align: center;
          }

          .diff-title {
            font-size: 2.2rem;
            margin-bottom: 40px;
          }
        }

        /* Join Section */
        .join-section {
          background: #d50505;
          padding: 120px 0;
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .join-content {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .join-title {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 30px;
        }

        .join-desc {
          font-size: 1.2rem;
          opacity: 0.9;
          margin-bottom: 50px;
          line-height: 1.6;
        }

        .subscribe-form {
          display: flex;
          max-width: 600px;
          margin: 0 auto 30px;
          background: rgba(0,0,0,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 8px;
          overflow: hidden;
        }

        .subscribe-form input {
          flex: 1;
          background: transparent;
          border: none;
          padding: 20px 30px;
          color: white;
          font-size: 1rem;
          outline: none;
        }

        .subscribe-form input::placeholder {
          color: rgba(255,255,255,0.5);
        }

        .subscribe-form button {
          background: #d4af37;
          color: #000;
          border: none;
          padding: 0 40px;
          font-weight: 800;
          letter-spacing: 1px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .subscribe-form button:hover {
          background: #c19b2e;
        }

        .no-spam {
          font-size: 0.85rem;
          opacity: 0.6;
        }

        @media (max-width: 1024px) {
          .heritage-grid { grid-template-columns: 1fr; gap: 60px; }
          .heritage-timeline { padding-left: 0; border-left: none; }
          .diff-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 768px) {
          .diff-grid { grid-template-columns: 1fr; }
          .heritage-title { font-size: 2.5rem; }
          .join-title { font-size: 2.5rem; }
          .subscribe-form { flex-direction: column; background: transparent; border: none; }
          .subscribe-form input { background: rgba(255,255,255,0.1); margin-bottom: 15px; border-radius: 8px; }
          .subscribe-form button { padding: 20px; border-radius: 8px; }
        }
      `}} />
    </div>
  );
};

export default About;

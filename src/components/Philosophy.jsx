import React from 'react';
import cupImg from '../assets/philosophy_cup.png';

const Philosophy = () => {
  return (
    <section id="philosophy" className="philosophy-section">
      <div className="container">
        <div className="philosophy-layout">
          {/* Left Column: Title Only */}
          <div className="phil-header-box">
            <h2 className="phil-title">
              Where Chai <br />
              <span className="phil-accent">Becomes Culture</span>
            </h2>
            <div className="phil-divider"></div>
          </div>

          {/* Right Column: Visuals & Stats */}
          <div className="phil-visual-box">
            <div className="cup-frame">
              <img src={cupImg} alt="Amarkanth Cup" className="cup-img" onError={(e) => {
                e.target.style.display = 'none';
              }} />
              <div className="cup-fallback">
                <div className="fallback-cup">
                  <span className="cup-logo">A&T</span>
                </div>
              </div>
            </div>

            <div className="stats-strip">
              <div className="s-item">
                <span className="s-val">2</span>
                <span className="s-lab">Iconic Blends</span>
              </div>
              <div className="s-div"></div>
              <div className="s-item">
                <span className="s-val">100%</span>
                <span className="s-lab">Pure Leaf</span>
              </div>
              <div className="s-div"></div>
              <div className="s-item">
                <span className="s-val">∞</span>
                <span className="s-lab">Moments</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .philosophy-section {
          background-color: var(--primary-red);
          padding: 60px 0;
          overflow: hidden;
          color: white;
        }

        .philosophy-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .phil-title {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          line-height: 1.1;
          font-weight: 800;
          margin-bottom: 30px;
        }

        .phil-accent {
          font-style: italic;
          font-weight: 300;
        }

        .phil-divider {
          width: 80px;
          height: 3px;
          background: white;
        }

        .phil-visual-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }

        .cup-frame {
          position: relative;
          width: 100%;
          max-width: 450px;
        }

        .cup-img {
          width: 100%;
          height: auto;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.3));
        }

        .stats-strip {
          background: rgba(0,0,0,0.15);
          backdrop-filter: blur(10px);
          padding: 30px;
          display: flex;
          width: 100%;
          justify-content: space-between;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .s-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
        }

        .s-val {
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 5px;
        }

        .s-lab {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          opacity: 0.8;
          font-weight: 700;
        }

        .s-div {
          width: 1px;
          height: 40px;
          background: rgba(255,255,255,0.2);
        }

        @media (max-width: 768px) {
          .philosophy-layout {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .phil-header-box {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .s-val { font-size: 2rem; }
          .s-lab { font-size: 0.6rem; }
        }
      `}} />
    </section>
  );
};

export default Philosophy;

import React from 'react';
import { Thermometer, Clock, Leaf, Zap } from 'lucide-react';

const Stats = () => {
  const stats = [
    { icon: <Thermometer />, val: "98°C", label: "Optimal Brew Temp", desc: "Every degree matters. Our teas are calibrated for peak extraction at near-boiling point." },
    { icon: <Clock />, val: "4min", label: "Perfect Steep Time", desc: "Four minutes transforms leaf into ceremony. The perfect balance of strength and smoothness." },
    { icon: <Leaf />, val: "0%", label: "Artificial Additives", desc: "Nothing hidden. Pure leaf, pure spice, pure intention — the label says exactly what is in the pack." },
    { icon: <Zap />, val: "3x", label: "Richer Liquor Yield", desc: "Our premium CTC grade yields three times more cup colour and flavour per gram." }
  ];

  return (
    <section className="stats-section bg-red">
      <div className="container">
        <div className="stats-header reveal">
          <p className="section-label" style={{color: 'rgba(255,255,255,0.7)'}}>Precision in Every Leaf</p>
          <h2 className="section-title">Crafted by <span className="accent-bold" style={{color: 'white'}}>Numbers</span></h2>
        </div>

        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="stat-card reveal">
              <div className="stat-icon">{s.icon}</div>
              <div className="stat-val">{s.val}</div>
              <div className="stat-name">{s.label}</div>
              <p className="stat-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .stats-section {
          padding: 40px 0;
        }

        .stats-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
        }

        .stat-card {
          text-align: center;
          padding: 40px 20px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 4px;
          transition: var(--transition-smooth);
        }

        .stat-card:hover {
          background: rgba(255,255,255,0.1);
          transform: translateY(-10px);
        }

        .stat-icon {
          margin-bottom: 20px;
          opacity: 0.8;
        }

        .stat-val {
          font-size: 4rem;
          font-weight: 800;
          margin-bottom: 10px;
          letter-spacing: -0.05em;
        }

        .stat-name {
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 15px;
          color: rgba(255,255,255,0.8);
        }

        .stat-desc {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.5;
        }

        @media (max-width: 1100px) {
          .stats-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}} />
    </section>
  );
};

export default Stats;

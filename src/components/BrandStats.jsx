import React from 'react';
import { motion } from 'framer-motion';

const BrandStats = () => {
  const stats = [
    { value: "50,000+", label: "FAMILIES TRUSTED" },
    { value: "15+", label: "YEARS OF EXCELLENCE" },
    { value: "2", label: "PREMIUM BRANDS" },
    { value: "365", label: "DAYS OF FRESHNESS" },
    { value: "100%", label: "ASSAM ORIGIN" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="brand-stats-section">
      <div className="container">
        <motion.div 
          className="stats-row"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((s, i) => (
            <motion.div key={i} className="stat-item" variants={itemVariants}>
              <span className="stat-number">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .brand-stats-section {
          background-color: #d50505; /* Brand Red */
          padding: 80px 0;
          color: #ffffff;
        }

        .stats-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
          min-width: 150px;
          text-align: center;
        }

        .stat-number {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 4vw, 3.8rem);
          font-weight: 700;
          line-height: 1;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }

        .stat-label {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: rgba(255, 255, 255, 0.8);
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .brand-stats-section {
            padding: 60px 0;
          }
          
          .stats-row {
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            justify-content: flex-start;
            gap: 20px;
            padding: 0 20px 20px 20px;
            margin: 0 -20px;
            scrollbar-width: none; /* Hide scrollbar Firefox */
          }

          .stats-row::-webkit-scrollbar {
            display: none; /* Hide scrollbar Chrome/Safari */
          }

          .stat-item {
            flex: 0 0 75%; /* Show 75% of card to peek next */
            scroll-snap-align: center;
            background: rgba(255, 255, 255, 0.1);
            padding: 40px 20px;
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.2);
          }

          .stat-number {
            font-size: 2.5rem;
          }

          .stat-label {
            font-size: 0.7rem;
          }
        }
      `}} />
    </section>
  );
};

export default BrandStats;

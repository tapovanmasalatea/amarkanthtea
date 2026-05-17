const fs = require('fs');
const path = require('path');

const amarkanthPath = path.join('c:', 'Users', 'ACB', 'Desktop', 'Amarkanth Group', 'src', 'pages', 'AmarkanthPremiumCTC.jsx');
const tapovanPath = path.join('c:', 'Users', 'ACB', 'Desktop', 'Amarkanth Group', 'src', 'pages', 'TapovanPremiumTea.jsx');

// 1. Process Amarkanth
if (fs.existsSync(amarkanthPath)) {
  let content = fs.readFileSync(amarkanthPath, 'utf8');

  // Add useEffect import
  content = content.replace(
    /import React,\s*\{\s*useState\s*\}\s*from\s*'react';/,
    "import React, { useState, useEffect } from 'react';"
  );

  // Add ArrowRight to lucide-react imports
  content = content.replace(
    /import\s*\{\s*Check,\s*ShieldCheck/,
    "import { Check, ShieldCheck, ArrowRight"
  );

  // Add showStickyBar state and scroll listener after isPurchasing
  content = content.replace(
    /const\s*\[isPurchasing,\s*setIsPurchasing\]\s*=\s*useState\(false\);/,
    `const [isPurchasing, setIsPurchasing] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);`
  );

  // Inject sticky order pill bar JSX right before the custom scrollbar comment
  content = content.replace(
    /\{\/\*\s*Premium In-Box Scrollable Magnifier Styles\s*\*\/\}|\{\/\*\s*In-box magnifier zoom is implemented inside the visual main-image-wrapper\s*.*\*\/\}/,
    `{/* Sticky Bottom Order Pill Bar */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div 
            initial={{ y: 100, x: '-50%', opacity: 0 }}
            animate={{ y: 0, x: '-50%', opacity: 1 }}
            exit={{ y: 100, x: '-50%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="sticky-order-pill-bar"
            onClick={handleBuyNow}
          >
            <div className="sticky-pill-left">
              <span className="sticky-pill-title">ORDER NOW</span>
              <span className="sticky-pill-brand">AMARKANTH</span>
            </div>
            <button className="sticky-pill-btn">
              <span>₹{variants[variant].price}</span>
              <ArrowRight size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>`
  );

  // Inject Sticky Pill CSS Styles right under visual magnifier styles
  content = content.replace(
    /\/\*\s*Premium In-Box Scrollable Magnifier Styles\s*\*\//,
    `/* Premium In-Box Scrollable Magnifier Styles */
        
        /* Sticky Floating Order Pill Bar */
        .sticky-order-pill-bar {
          position: fixed;
          bottom: 25px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 400px;
          background: rgba(17, 17, 17, 0.95);
          border-radius: 100px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 8px 8px 24px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          z-index: 9999;
          cursor: pointer;
          border: 1.5px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .sticky-order-pill-bar:hover {
          transform: translate(-50%, -2px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }

        .sticky-pill-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: 1.25;
        }

        .sticky-pill-title {
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 900;
          letter-spacing: 0.5px;
          font-family: 'Outfit', sans-serif;
        }

        .sticky-pill-brand {
          color: #ffc107; /* gold/yellow accent */
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-top: 1px;
        }

        .sticky-pill-btn {
          background: var(--brand-red); /* brand crimson red button */
          color: #ffffff;
          border: none;
          padding: 12px 24px;
          border-radius: 100px;
          font-weight: 900;
          font-size: 1.05rem;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          transition: 0.2s;
          box-shadow: 0 4px 15px rgba(213, 5, 5, 0.2);
        }

        .sticky-order-pill-bar:hover .sticky-pill-btn {
          filter: brightness(1.15);
        }`
  );

  fs.writeFileSync(amarkanthPath, content, 'utf8');
  console.log('Successfully added Sticky Order button to AmarkanthPremiumCTC.jsx');
} else {
  console.error('Amarkanth file not found.');
}

// 2. Process Tapovan
if (fs.existsSync(tapovanPath)) {
  let content = fs.readFileSync(tapovanPath, 'utf8');

  // Add useEffect import
  content = content.replace(
    /import React,\s*\{\s*useState\s*\}\s*from\s*'react';/,
    "import React, { useState, useEffect } from 'react';"
  );

  // Add ArrowRight to lucide-react imports
  content = content.replace(
    /import\s*\{\s*Check,\s*ShieldCheck/,
    "import { Check, ShieldCheck, ArrowRight"
  );

  // Add showStickyBar state and scroll listener after isPurchasing
  content = content.replace(
    /const\s*\[isPurchasing,\s*setIsPurchasing\]\s*=\s*useState\(false\);/,
    `const [isPurchasing, setIsPurchasing] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);`
  );

  // Inject sticky order pill bar JSX right before the custom scrollbar comment
  content = content.replace(
    /\{\/\*\s*Premium In-Box Scrollable Magnifier Styles\s*\*\/\}|\{\/\*\s*In-box magnifier zoom is implemented inside the visual main-image-wrapper\s*.*\*\/\}/,
    `{/* Sticky Bottom Order Pill Bar */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div 
            initial={{ y: 100, x: '-50%', opacity: 0 }}
            animate={{ y: 0, x: '-50%', opacity: 1 }}
            exit={{ y: 100, x: '-50%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="sticky-order-pill-bar"
            onClick={handleBuyNow}
          >
            <div className="sticky-pill-left">
              <span className="sticky-pill-title">ORDER NOW</span>
              <span className="sticky-pill-brand text-tapovan-orange">TAPOVAN</span>
            </div>
            <button className="sticky-pill-btn tapovan-btn-orange">
              <span>₹{variants[variant].price}</span>
              <ArrowRight size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>`
  );

  // Inject Sticky Pill CSS Styles right under visual magnifier styles
  content = content.replace(
    /\/\*\s*Premium In-Box Scrollable Magnifier Styles\s*\*\//,
    `/* Premium In-Box Scrollable Magnifier Styles */
        
        /* Sticky Floating Order Pill Bar */
        .sticky-order-pill-bar {
          position: fixed;
          bottom: 25px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 400px;
          background: rgba(17, 17, 17, 0.95);
          border-radius: 100px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 8px 8px 24px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          z-index: 9999;
          cursor: pointer;
          border: 1.5px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .sticky-order-pill-bar:hover {
          transform: translate(-50%, -2px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }

        .sticky-pill-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: 1.25;
        }

        .sticky-pill-title {
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 900;
          letter-spacing: 0.5px;
          font-family: 'Outfit', sans-serif;
        }

        .sticky-pill-brand.text-tapovan-orange {
          color: var(--tapovan-orange) !important; /* Tapovan color accent */
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-top: 1px;
        }

        .sticky-pill-btn.tapovan-btn-orange {
          background: var(--tapovan-orange) !important; /* brand orange button */
          color: #ffffff;
          border: none;
          padding: 12px 24px;
          border-radius: 100px;
          font-weight: 900;
          font-size: 1.05rem;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          transition: 0.2s;
          box-shadow: 0 4px 15px rgba(255, 152, 0, 0.2);
        }

        .sticky-order-pill-bar:hover .sticky-pill-btn.tapovan-btn-orange {
          filter: brightness(1.15);
        }`
  );

  fs.writeFileSync(tapovanPath, content, 'utf8');
  console.log('Successfully added Sticky Order button to TapovanPremiumTea.jsx');
} else {
  console.error('Tapovan file not found.');
}

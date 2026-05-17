const fs = require('fs');
const path = require('path');

const amarkanthPath = path.join('c:', 'Users', 'ACB', 'Desktop', 'Amarkanth Group', 'src', 'pages', 'AmarkanthPremiumCTC.jsx');
const tapovanPath = path.join('c:', 'Users', 'ACB', 'Desktop', 'Amarkanth Group', 'src', 'pages', 'TapovanPremiumTea.jsx');

// 1. Process Amarkanth
if (fs.existsSync(amarkanthPath)) {
  let content = fs.readFileSync(amarkanthPath, 'utf8');

  // Update scroll trigger height to 400px
  content = content.replace(
    /if\s*\(\s*window\.scrollY\s*>\s*600\s*\)/g,
    'if (window.scrollY > 400)'
  );

  // Update Sticky Order HTML structure to include layout-centering wrapper
  const oldHTML = `{/* Sticky Bottom Order Pill Bar */}
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
      </AnimatePresence>`;

  const newHTML = `{/* Sticky Bottom Order Pill Bar */}
      <AnimatePresence>
        {showStickyBar && (
          <div className="sticky-order-wrapper">
            <motion.div 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
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
          </div>
        )}
      </AnimatePresence>`;

  content = content.replace(oldHTML, newHTML);

  // Update Sticky Order CSS styles to center wrapper and avoid Framer Motion translateX conflicts
  const oldCSS = `/* Sticky Floating Order Pill Bar */
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
        }`;

  const newCSS = `/* Sticky Floating Order Pill Wrapper & Bar */
        .sticky-order-wrapper {
          position: fixed;
          bottom: 25px;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          pointer-events: none;
        }

        .sticky-order-pill-bar {
          width: 90%;
          max-width: 400px;
          background: rgba(17, 17, 17, 0.95);
          border-radius: 100px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 8px 8px 24px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          cursor: pointer;
          border: 1.5px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          pointer-events: auto;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .sticky-order-pill-bar:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }`;

  content = content.replace(oldCSS, newCSS);

  fs.writeFileSync(amarkanthPath, content, 'utf8');
  console.log('Successfully updated AmarkanthPremiumCTC.jsx sticky display.');
}

// 2. Process Tapovan
if (fs.existsSync(tapovanPath)) {
  let content = fs.readFileSync(tapovanPath, 'utf8');

  // Update scroll trigger height to 400px
  content = content.replace(
    /if\s*\(\s*window\.scrollY\s*>\s*600\s*\)/g,
    'if (window.scrollY > 400)'
  );

  // Update Sticky Order HTML structure to include layout-centering wrapper
  const oldHTML = `{/* Sticky Bottom Order Pill Bar */}
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
      </AnimatePresence>`;

  const newHTML = `{/* Sticky Bottom Order Pill Bar */}
      <AnimatePresence>
        {showStickyBar && (
          <div className="sticky-order-wrapper">
            <motion.div 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
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
          </div>
        )}
      </AnimatePresence>`;

  content = content.replace(oldHTML, newHTML);

  // Update Sticky Order CSS styles to center wrapper and avoid Framer Motion translateX conflicts
  const oldCSS = `/* Sticky Floating Order Pill Bar */
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
        }`;

  const newCSS = `/* Sticky Floating Order Pill Wrapper & Bar */
        .sticky-order-wrapper {
          position: fixed;
          bottom: 25px;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          pointer-events: none;
        }

        .sticky-order-pill-bar {
          width: 90%;
          max-width: 400px;
          background: rgba(17, 17, 17, 0.95);
          border-radius: 100px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 8px 8px 24px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          cursor: pointer;
          border: 1.5px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          pointer-events: auto;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .sticky-order-pill-bar:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }`;

  content = content.replace(oldCSS, newCSS);

  fs.writeFileSync(tapovanPath, content, 'utf8');
  console.log('Successfully updated TapovanPremiumTea.jsx sticky display.');
}

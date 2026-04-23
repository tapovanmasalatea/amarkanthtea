import React from 'react';

const Method = () => {
  const steps = [
    { num: 'I', title: 'Measure' },
    { num: 'II', title: 'Boil Water' },
    { num: 'III', title: 'Add Milk' },
    { num: 'IV', title: 'Steep & Simmer' },
    { num: 'V', title: 'Pour & Savour' }
  ];

  return (
    <section id="ritual" className="method-section">
      <div className="container">
        <div className="steps-container">
          {steps.map((s, i) => (
            <div key={i} className="step-row reveal">
              <div className="step-num">{s.num}</div>
              <div className="step-content">
                <h3>{s.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .method-section {
          background-color: #fdfbf7;
          padding: 60px 0;
        }

        .steps-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .step-row {
          display: flex;
          gap: 60px;
          padding: 30px 0;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          align-items: center;
        }

        .step-row:last-child {
          border-bottom: none;
        }

        .step-num {
          font-family: 'Playfair Display', serif;
          font-size: 3.5rem;
          font-weight: 700;
          color: #d50505;
          width: 80px;
          flex-shrink: 0;
          opacity: 0.15;
          transition: all 0.4s ease;
        }

        .step-row:hover .step-num {
          opacity: 1;
        }

        .step-content h3 {
          font-size: 1.8rem;
          font-weight: 800;
          font-family: 'Outfit', sans-serif;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #2c3e50;
        }

        @media (max-width: 768px) {
          .step-row {
            flex-direction: row; /* Keep horizontal for cleaner look on mobile if just title */
            gap: 30px;
            padding: 20px 0;
          }
          .step-num {
            font-size: 2.5rem;
            width: 50px;
          }
          .step-content h3 {
            font-size: 1.2rem;
          }
        }
      `}} />
    </section>
  );
};

export default Method;

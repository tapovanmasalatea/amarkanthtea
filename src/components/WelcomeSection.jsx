import React from 'react';

const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <div className="container">
        <div className="welcome-content reveal">
          <h2 className="welcome-title">Welcome to Amarkanth Tea Group</h2>
          <p className="welcome-subtitle">You're One Step Closer to Purity</p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .welcome-section {
          padding: 5px 0;
          background-color: #ffffff;
          text-align: center;
        }

        .welcome-title {
          font-size: clamp(1.4rem, 3vw, 2rem);
          color: var(--primary-red);
          font-weight: 700;
          margin-bottom: 8px;
          letter-spacing: -0.01em;
        }

        .welcome-subtitle {
          font-size: clamp(1rem, 2vw, 1.3rem);
          color: var(--primary-red);
          font-weight: 400;
          opacity: 0.85;
        }

        @media (max-width: 768px) {
          .welcome-section {
            padding: 0 20px;
          }
        }
      `}} />
    </section>
  );
};

export default WelcomeSection;

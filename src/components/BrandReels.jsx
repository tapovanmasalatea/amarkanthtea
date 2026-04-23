import React from 'react';

const BrandReels = () => {
  // Path for your reels: /src/assets/reel1.mp4, /src/assets/reel2.mp4, etc.
  const reels = [
    { id: 1, video: "/src/assets/reel1.mp4" },
    { id: 2, video: "/src/assets/reel2.mp4" },
    { id: 3, video: "/src/assets/reel3.mp4" }
  ];

  return (
    <section className="brand-reels-section">
      <div className="container">
        <div className="reels-header">
          <h2 className="reels-title">Experience the Purity</h2>
          <p className="reels-subtitle">Go behind the scenes of every cup.</p>
        </div>

        <div className="reels-container">
          {reels.map((reel) => (
            <div key={reel.id} className="reel-card">
              <div className="video-wrapper">
                <video 
                  src={reel.video} 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="reel-video"
                  onError={(e) => {
                    // Placeholder if video is not yet added
                    e.target.style.backgroundColor = '#2c3e50';
                    e.target.poster = "https://images.unsplash.com/photo-1544787210-2211d44b5057?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .brand-reels-section {
          padding: 60px 0;
          background: #ffffff;
          overflow: hidden;
        }

        .reels-header {
          text-align: center;
          margin-bottom: 40px;
          padding: 0 20px;
        }

        .reels-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #2c3e50;
          margin-bottom: 10px;
          letter-spacing: -0.02em;
        }

        .reels-subtitle {
          font-size: 1.1rem;
          color: #666;
        }

        .reels-container {
          display: flex;
          overflow-x: auto;
          gap: 20px;
          padding: 10px 20px 30px 20px;
          scrollbar-width: none; /* Hide scrollbar Firefox */
          -ms-overflow-style: none; /* Hide scrollbar IE/Edge */
        }

        .reels-container::-webkit-scrollbar {
          display: none; /* Hide scrollbar Chrome/Safari */
        }

        .reel-card {
          flex: 0 0 280px; /* Fixed width for reel feel */
          aspect-ratio: 9/16;
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          background: #f0f0f0;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .reel-card:hover {
          transform: scale(1.02);
        }

        .video-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .reel-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .reel-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 30px 20px;
          background: linear-gradient(transparent, rgba(0,0,0,0.7));
          display: flex;
          align-items: flex-end;
          pointer-events: none;
        }

        .reel-label {
          color: white;
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 0.5px;
        }

        @media (max-width: 768px) {
          .reels-title { font-size: 1.8rem; text-align: left; }
          .reels-subtitle { text-align: left; }
          .reels-header { text-align: left; }
          .reel-card { flex: 0 0 240px; }
        }
      `}} />
    </section>
  );
};

export default BrandReels;

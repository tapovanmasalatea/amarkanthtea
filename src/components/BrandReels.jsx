import React, { useRef, useState } from 'react';
import { Play } from 'lucide-react';
import reel1 from '../assets/reel1.mp4';
import reel2 from '../assets/reel2.mp4';
import reel3 from '../assets/reel3.mp4';

const ReelCard = ({ video, id }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Video play interrupted:", err));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.log("Video play interrupted:", err));
      }
    }
  };

  const posters = [
    "https://images.unsplash.com/photo-1544787210-2211d44b5657?auto=format&fit=crop&q=60&w=800",
    "https://images.unsplash.com/photo-1594631252845-29fc458631b6?auto=format&fit=crop&q=60&w=800",
    "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&q=60&w=800"
  ];

  return (
    <div 
      className="reel-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleTogglePlay}
    >
      <div className="video-wrapper">
        <video 
          ref={videoRef}
          src={video} 
          muted 
          loop 
          playsInline
          preload="metadata"
          poster={posters[id - 1]}
          className="reel-video"
          onError={(e) => {
            e.target.style.backgroundColor = '#2c3e50';
          }}
        />
        
        {/* Play Overlay */}
        <div className={`reel-play-overlay ${isPlaying ? 'hide' : ''}`}>
          <div className="play-button-circle">
            <Play size={24} fill="currentColor" color="white" />
          </div>
          <span className="reel-hint-text">Hover or Tap to Play</span>
        </div>
      </div>
    </div>
  );
};

const BrandReels = () => {
  const reels = [
    { id: 1, video: reel1 },
    { id: 2, video: reel2 },
    { id: 3, video: reel3 }
  ];

  return (
    <section className="brand-reels-section">
      <div className="container">
        <div className="reels-header">
          <h2 className="reels-title">Experience the Purity</h2>
          <p className="reels-subtitle">Hover or tap on a reel to go behind the scenes of every cup.</p>
        </div>

        <div className="reels-container">
          {reels.map((reel) => (
            <ReelCard key={reel.id} video={reel.video} id={reel.id} />
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
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .reels-container::-webkit-scrollbar {
          display: none;
        }

        .reel-card {
          flex: 0 0 280px;
          aspect-ratio: 9/16;
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          background: #f0f0f0;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          cursor: pointer;
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

        /* Play Overlay style */
        .reel-play-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 15px;
          transition: all 0.3s ease;
          z-index: 5;
        }

        .reel-play-overlay.hide {
          opacity: 0;
          visibility: hidden;
          background: rgba(0, 0, 0, 0);
        }

        .play-button-circle {
          width: 60px;
          height: 60px;
          background: rgba(213, 5, 5, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-left: 4px;
          box-shadow: 0 8px 25px rgba(213, 5, 5, 0.4);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .reel-card:hover .play-button-circle {
          transform: scale(1.1);
          background: var(--primary-red);
        }

        .reel-hint-text {
          color: white;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 1px;
          text-transform: uppercase;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
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

import React, { useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';
import reel1 from '../assets/reel1.mp4';
import reel2 from '../assets/reel2.mp4';
import reel3 from '../assets/reel3.mp4';

const ReelCard = ({ video, id }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showIndicator, setShowIndicator] = useState(true);

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setShowIndicator(true);
            // Hide the indicator after 1 second of playing
            setTimeout(() => {
              setShowIndicator(false);
            }, 1000);
          })
          .catch((err) => console.log("Video play interrupted:", err));
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
        setShowIndicator(true);
      }
    }
  };

  return (
    <div 
      className="reel-card"
      onClick={handleTogglePlay}
    >
      <div className="video-wrapper">
        <video 
          ref={videoRef}
          src={video} 
          controls
          loop 
          playsInline
          preload="metadata"
          className="reel-video"
          onError={(e) => {
            e.target.style.backgroundColor = '#2c3e50';
          }}
        />
        
        {/* Center Play/Pause Button Overlay */}
        <div className={`reel-center-btn-overlay ${!isPlaying || showIndicator ? 'visible' : ''}`}>
          <div className="center-play-pause-btn">
            {isPlaying ? (
              <Pause size={24} fill="currentColor" color="white" />
            ) : (
              <Play size={24} fill="currentColor" color="white" style={{ marginLeft: '4px' }} />
            )}
          </div>
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
          <p className="reels-subtitle">Go behind the scenes of every cup.</p>
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

        /* Center Play/Pause Overlay styles */
        .reel-center-btn-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.15);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
          z-index: 10;
        }

        .reel-center-btn-overlay.visible {
          opacity: 1;
          visibility: visible;
        }

        /* Show overlay also on card hover when playing */
        .reel-card:hover .reel-center-btn-overlay {
          opacity: 1;
          visibility: visible;
        }

        .center-play-pause-btn {
          width: 60px;
          height: 60px;
          background: rgba(213, 5, 5, 0.95);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 25px rgba(213, 5, 5, 0.4);
          transition: transform 0.2s ease;
          color: white;
        }

        .reel-card:hover .center-play-pause-btn {
          transform: scale(1.08);
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

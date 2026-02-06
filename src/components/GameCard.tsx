import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { useGameContext } from '../context/GameContext';
import type { Game } from '../types';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const { toggleFavorite, favorites } = useGameContext();
  const isFavorite = favorites.includes(game.id);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="game-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="game-card-inner">
        <div className="game-image-container">
          <img src={game.image} alt={game.title} loading="lazy" className="game-img" />

          {/* Jackpot Tag - Centered at Top */}
          {game.category.includes('JACKPOTS') && (
            <div className="jackpot-tag-top">
              <span className="jackpot-value">$916,917.48</span>
            </div>
          )}

          {/* Favorite Star - Top Right */}
          <div className="fav-corner">
            <button
              className={`favorite-btn ${isFavorite ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(game.id);
              }}
            >
              <Star size={20} fill={isFavorite ? '#FFD200' : 'none'} color="white" strokeWidth={2} />
            </button>
          </div>

          {/* Hot Tag - Image Asset */}
          {game.isHot && (
            <div className="hot-tag-asset">
              <img
                src="https://www.fun88.mx/assets/hot_badge-7eed8532.webp"
                alt="Hot!"
                className="hot-img"
              />
            </div>
          )}

          {/* Play Overlay */}
          <div className={`center-overlay ${hovered ? 'visible' : ''}`}>
            <img
              src="https://www.fun88.mx/assets/play_game-4608cc12.webp"
              alt="Play"
              className="play-btn-img"
            />
          </div>


        </div>
      </div>

      <style>{`
        .game-card {
           position: relative;
           cursor: pointer;
           transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .game-card:hover {
           transform: translateY(-5px);
           z-index: 10;
        }

        .game-image-container {
           position: relative;
           aspect-ratio: 1 / 1;
           border-radius: 12px;
           overflow: hidden;
           box-shadow: 0 4px 10px rgba(0,0,0,0.1);
           background-color: #EEE;
        }

        @media (min-width: 1200px) {
          .game-image-container {
            border-radius: 20px;
          }
        }

        .game-img {
           width: 100%;
           height: 100%;
           object-fit: cover;
           display: block;
           transition: transform 0.5s ease;
        }

        .game-card:hover .game-img {
           transform: scale(1.1);
        }

        /* Jackpot Stylings */
        .jackpot-tag-top {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(to bottom, #FFD200, #FBB034);
          color: white;
          padding: 4px 0;
          z-index: 10;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          text-align: center;
        }

        .jackpot-value {
          font-size: 14px;
          font-weight: 950;
          text-shadow: 0 1px 2px rgba(0,0,0,0.3);
        }

        /* Favorite Star Position */
        .fav-corner {
          position: absolute;
          top: 0;
          right: 0;
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 11;
        }

        .favorite-btn {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .favorite-btn:hover {
          transform: scale(1.2);
        }

        /* Hot Tag Image Asset */
        .hot-tag-asset {
          position: absolute;
          top: 15%;
          left: 4px;
          z-index: 12;
          width: 50px;
          height: auto;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
        }

        .hot-img {
          width: 100%;
          height: auto;
          display: block;
        }

        /* Overlays */
        .center-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 5;
        }

        .center-overlay.visible {
          opacity: 1;
        }

        .play-btn-img {
          width: 80px;
          height: 80px;
          cursor: pointer;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.4));
          transform: scale(0.9);
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .game-card:hover .play-btn-img {
          transform: scale(1);
        }

        .bottom-info-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 25px 15px 15px;
          background: linear-gradient(to top, #9031AF 0%, rgba(144, 49, 175, 0) 100%);
          color: white;
          z-index: 6;
        }

        .info-content {
          text-align: left;
        }

        .game-title-overlay {
          font-size: 16px;
          font-weight: 800;
          margin: 0;
          line-height: 1.2;
          text-transform: uppercase;
          text-shadow: 0 1px 3px rgba(0,0,0,0.5);
        }

        .provider-info {
          margin-top: 4px;
          opacity: 0.9;
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        @media (max-width: 768px) {
           .game-title-overlay {
              font-size: 12px;
           }
           .jackpot-tag-top {
              min-width: 80px;
              padding: 2px 10px;
           }
           .jackpot-value {
              font-size: 11px;
           }
           .hot-text {
              font-size: 10px;
           }
           .flame-bg {
              padding: 4px 8px;
           }
        }
      `}</style>
    </div>
  );
};

export default GameCard;

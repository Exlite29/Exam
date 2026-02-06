import React from 'react';
import { useGameContext } from '../../../context/GameContext';
import GameCard from './GameCard';
import { ChevronRight } from 'lucide-react';

const GameGrid: React.FC = () => {
  const { filteredGames, loading, filters } = useGameContext();
  const [visibleCount, setVisibleCount] = React.useState(20); // Initial load count

  // Reset visible count when filters change
  React.useEffect(() => {
    setVisibleCount(20);
  }, [filters]);

  const handleLoadMore = () => {
    setVisibleCount(filteredGames.length);
  };

  const visibleGames = filteredGames.slice(0, visibleCount);
  const progressPercentage = Math.min((visibleGames.length / filteredGames.length) * 100, 100);

  if (loading) {
    return (
      <div className="container py-xl">
        <div className="loading-grid">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="skeleton-card"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="game-grid-section">
      <div className="container">
        <div className="grid-header">
          <div className="breadcrumb">
            <span>Casino</span>
            <ChevronRight size={14} />
            <span className="current">{filters.category}</span>
          </div>
          <div className="grid-header-main">
            <h2>{filters.category === 'START' ? 'JUEGOS DESTACADOS' : filters.category}</h2>
            <div className="view-options">
              <span className="results-count">{filteredGames.length} juegos encontrados</span>
            </div>
          </div>
        </div>

        <div className="game-grid">
          {visibleGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        {visibleCount < filteredGames.length && (
          <div className="load-more-section">
            <div className="progress-info">
              <span className="count-text">{visibleGames.length} / {filteredGames.length}</span>
              <div className="progress-bar-track">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${progressPercentage}%` }}
                />
                <span className="progress-text-overlay">{Math.round(progressPercentage)}%</span>
              </div>
            </div>
            <button className="btn-load-more" onClick={handleLoadMore}>
              Cargar más
            </button>
          </div>
        )}

        {filteredGames.length === 0 && (
          <div className="no-results">
            <div className="no-results-icon">∅</div>
            <p>No se encontraron juegos con estos criterios.</p>
            <button className="btn btn-primary" onClick={() => window.location.reload()}>Limpiar filtros</button>
          </div>
        )}
      </div>

      <style>{`
        .game-grid-section {
          padding: var(--space-xl) 0;
          background-color: var(--bg-main);
        }

        .grid-header {
          margin-bottom: var(--space-xl);
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.8rem;
          color: var(--text-light);
          margin-bottom: var(--space-sm);
          font-weight: 600;
          text-transform: uppercase;
        }

        .breadcrumb .current {
          color: var(--primary);
        }

        .grid-header-main {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          border-bottom: 2px solid var(--border-color);
          padding-bottom: var(--space-sm);
        }

        .grid-header-main h2 {
          font-size: 1.8rem;
          font-weight: 900;
          color: var(--secondary);
          letter-spacing: -0.5px;
        }

        .results-count {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .game-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 15px;
          margin-bottom: 30px;
        }

        .loading-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 15px;
        }

        /* Load More Section Styles */
        .load-more-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          margin-top: 40px;
          padding-bottom: 20px;
        }

        .progress-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          width: 100%;
          max-width: 300px;
        }

        .count-text {
          font-size: 16px;
          color: var(--text-secondary);
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .progress-bar-track {
          width: 100%;
          height: 18px;
          background-color: #2D3035;
          border-radius: 10px;
          overflow: hidden;
          position: relative;
        }

        .progress-bar-fill {
          height: 100%;
          background-color: var(--highlight);
          border-radius: 10px;
          transition: width 0.3s ease;
        }
        
        .progress-text-overlay {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 10px;
            font-weight: 700;
            z-index: 2;
        }

        .btn-load-more {
          background-color: var(--highlight);
          color: white;
          border: none;
          padding: 12px 60px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 800;
          cursor: pointer;
          transition: var(--transition);
          box-shadow: 0 4px 10px rgba(0, 166, 255, 0.3);
        }

        .btn-load-more:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(0, 166, 255, 0.4);
        }

        @media (max-width: 1200px) {
          .game-grid, .loading-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (max-width: 900px) {
          .game-grid, .loading-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
          }
        }

        @media (max-width: 576px) {
          .game-grid, .loading-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
          }
        }
      `}</style>
    </section>
  );
};

export default GameGrid;

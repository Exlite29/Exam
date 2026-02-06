import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useGameContext } from '../../../context/GameContext';
import { providers } from '../../../data/providers';

const ProviderSlider: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { filters, setFilters } = useGameContext();

  const handleProviderClick = (id: string) => {
    setFilters(prev => ({
      ...prev,
      provider: prev.provider === id ? 'all' : id
    }));
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  // Auto-scroll every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
        // Check if we're near the end
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scroll('right');
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="provider-section">
      <div className="container">
        <div className="provider-header">
          <button className="provider-title-btn">Proveedores de juego</button>
          <div className="provider-controls">
            <button className="btn-mas">MÁS</button>
            <button className="arrow-btn" onClick={() => scroll('left')}>
              <ChevronLeft size={16} />
            </button>
            <button className="arrow-btn" onClick={() => scroll('right')}>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="provider-slider" ref={scrollRef}>
          {providers.map((provider, index) => (
            <div
              key={index}
              className={`provider-card ${filters.provider === provider.id ? 'active' : ''}`}
              onClick={() => handleProviderClick(provider.id)}
            >
              <div className="card-inner">
                <img src={provider.logo} alt={provider.name} className="p-logo" />
                <span className="p-count">({provider.count})</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .provider-section {
          padding: 10px 0 20px;
          background-color: var(--bg-main);
        }

        .provider-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .provider-title-btn {
          font-size: 14px;
          color: var(--text-main);
          font-weight: 400;
          text-align: left;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
        }

        @media (min-width: 1200px) {
          .provider-title-btn {
            font-size: 16px;
          }
        }

        .provider-controls {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .btn-mas {
          background-color: var(--bg-secondary);
          color: var(--text-main);
          padding: 8px 12px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .btn-mas:hover {
          opacity: 0.7;
        }

        .arrow-btn {
          background-color: var(--bg-secondary);
          color: var(--secondary);
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
        }

        .arrow-btn:hover {
          opacity: 0.7;
        }

        .provider-slider {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          scrollbar-width: none;
          padding: 4px 0;
        }

        .provider-slider::-webkit-scrollbar {
          display: none;
        }

        .provider-card {
           flex: 0 0 calc(100% / 3 - 8px);
           aspect-ratio: 165 / 80;
           cursor: pointer; /* Added cursor pointer */
        }

        @media (min-width: 1024px) {
          .provider-card {
            flex: 0 0 calc(100% / 6 - 10px);
          }
        }

        .card-inner {
          background-color: var(--bg-secondary);
          border-radius: 8px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          transition: var(--transition);
          position: relative;
        }
        
        .provider-card.active .card-inner {
           border: 2px solid var(--highlight);
           background-color: #fff;
        }

        @media (min-width: 1200px) {
          .card-inner {
            border-radius: 12px;
            padding: 12px;
            height: 80px;
          }
        }

        .p-logo {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .p-count {
          font-size: 10px;
          color: var(--text-secondary);
          opacity: 0.7;
          margin-left: 4px;
        }
      `}</style>
    </section>
  );
};

export default ProviderSlider;

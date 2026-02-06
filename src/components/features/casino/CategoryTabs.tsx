import React from 'react';
import { useGameContext } from '../../../context/GameContext';
import {
  Home,
  Flame,
  Dices,
  Sparkles,
  Gamepad2,
  Rocket,
  Play,
  LayoutGrid,
  FileText,
  Search,
  ChevronRight,
  Star,
  List
} from 'lucide-react';
import type { Category } from '../../../types';




const CategoryTabs: React.FC = () => {
  const { filters, setFilters, setIsProviderModalOpen } = useGameContext();


  const categories: { id: Category; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'START', label: 'INICIO', icon: <Home size={25} />, badge: '8926' },
    { id: 'POPULAR', label: 'POPULAR', icon: <Flame size={25} /> },
    { id: 'NEW', label: 'NUEVO', icon: <Sparkles size={25} /> },
    { id: 'SLOTS', label: 'SLOTS', icon: <LayoutGrid size={25} /> },
    { id: 'JACKPOTS', label: 'JACKPOT', icon: <Dices size={25} />, badge: 'HOT' },
    { id: 'CASUAL', label: 'CASUAL', icon: <Gamepad2 size={25} /> },
    { id: 'CRASH', label: 'CRASH', icon: <Rocket size={25} /> },
    { id: 'LIVE', label: 'LIVE', icon: <Play size={25} /> },
    { id: 'TABLE', label: 'TABLE', icon: <Gamepad2 size={25} /> },
    { id: 'FAVORITES', label: 'FAVORITOS', icon: <Star size={25} /> },
    { id: 'OTHERS', label: 'OTROS', icon: <FileText size={25} /> },
  ];

  const handleCategoryClick = (id: Category) => {
    setFilters(prev => ({ ...prev, category: id }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFilters(prev => ({
      ...prev,
      search: val,
    }));
  };

  return (
    <div className="category-nav">
      <div className="container nav-container">
        <div className="nav-items">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`nav-item ${filters.category === cat.id ? 'active' : ''}`}
              onClick={() => handleCategoryClick(cat.id)}
            >
              <div className="icon-wrapper">
                {cat.icon}
                {cat.badge && (
                  <span className={`badge ${cat.badge === 'HOT' ? 'badge-hot' : 'badge-count'}`}>
                    {cat.badge}
                  </span>
                )}
              </div>
              <span className="nav-label">{cat.label}</span>
            </button>
          ))}
          <div className="nav-scroll-indicator">
            <ChevronRight size={14} />
          </div>
        </div>

        <div className="nav-search">
          <div className="search-input-wrapper">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Encuentra tu juego"
              value={filters.search}
              onChange={handleSearchChange}
            />
          </div>
          <button className="filter-btn" onClick={() => setIsProviderModalOpen(true)}>
            <List size={18} />
          </button>
        </div>
      </div>



      <style>{`
        .category-nav {
          background-color: white;
          border-bottom: none;
          position: relative;
          z-index: 10;
          box-shadow: none;
          width: 100%;
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 4px;
          padding-bottom: 4px;
          gap: 20px;
        }

        .nav-items {
          display: flex;
          gap: 2px;
          overflow-x: auto;
          scrollbar-width: none;
          align-items: center;
          flex: 1;
        }

        .nav-items::-webkit-scrollbar {
          display: none;
        }

        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px 15px;
          color: var(--text-secondary);
          transition: var(--transition);
          min-width: 80px;
          position: relative;
          justify-content: center;
          border-radius: 8px;
          border: none;
          background: none;
          cursor: pointer;
        }

        .nav-item:hover {
          color: var(--highlight);
          background-color: #f8fbff;
        }

        .nav-item.active {
          color: var(--highlight);
        }

        .nav-item.active::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 3px;
          background-color: var(--highlight);
          border-radius: var(--radius-full);
        }

        .icon-wrapper {
          position: relative;
          margin-bottom: 7px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
        }

        .nav-label {
          font-size: 10px;
          font-weight: 700;
          text-align: center;
          white-space: nowrap;
        }

        .badge {
          position: absolute;
          top: -11px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 8px;
          font-weight: 800;
          padding: 1px 4px;
          border-radius: 3px;
          color: white;
          z-index: 2;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .badge-count {
          background-color: var(--highlight);
        }

        .badge-hot {
          background-color: #ff3b30;
        }

        .nav-scroll-indicator {
          display: none;
          color: var(--highlight);
          padding: 0 10px;
        }

        .nav-search {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .search-input-wrapper {
          display: flex;
          align-items: center;
          background-color: var(--bg-secondary);
          height: 38px;
          padding: 0 12px;
          border-radius: 6px;
          gap: 8px;
          width: 280px;
        }

        .search-icon {
          color: var(--text-secondary);
        }

        .search-input-wrapper input {
          width: 100%;
          font-size: 13px;
          font-weight: 500;
          color: var(--text-main);
        }

        .search-input-wrapper input::placeholder {
          color: var(--text-secondary);
          opacity: 0.6;
        }

        .filter-btn {
          background-color: var(--highlight);
          color: white;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          border: none;
          cursor: pointer;
        }

        @media (max-width: 1024px) {
          .nav-search {
            display: none;
          }
          .nav-scroll-indicator {
            display: flex;
          }
        }
      `}</style>
    </div>
  );
};

export default CategoryTabs;


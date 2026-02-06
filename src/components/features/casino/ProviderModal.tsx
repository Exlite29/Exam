import React, { useEffect } from 'react';
import { X, List } from 'lucide-react';
import { providers } from '../../../data/providers';
import { useGameContext } from '../../../context/GameContext';

const ProviderModal: React.FC = () => {
  const { filters, setFilters, isProviderModalOpen, setIsProviderModalOpen } = useGameContext();

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isProviderModalOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isProviderModalOpen]);


  if (!isProviderModalOpen) return null;

  const handleClose = () => setIsProviderModalOpen(false);


  const handleProviderClick = (id: string) => {
    setFilters(prev => ({
      ...prev,
      provider: prev.provider === id ? 'all' : id
    }));
    handleClose();
  };


  return (
    <>
      <div className="modal-overlay" onClick={handleClose} />
      <div className="modal-container">
        <div className="modal-header">
          <div className="modal-title">
            <List size={20} className="modal-icon" />
            <span>Proveedor de Juegos</span>
            <span className="provider-count">{providers.length}</span>
          </div>
          <button className="close-btn" onClick={handleClose}>
            <X size={24} color="white" />
          </button>
        </div>

        <div className="modal-body">
          <div className="provider-grid">
            {providers.map((provider) => (
              <button
                key={provider.id}
                className={`modal-provider-card ${filters.provider === provider.id ? 'active' : ''}`}
                onClick={() => handleProviderClick(provider.id)}

              >
                <img src={provider.logo} alt={provider.name} className="modal-p-logo" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.7);
          z-index: 9999;
          backdrop-filter: blur(4px);
        }


        .modal-container {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 90%;
          max-width: 800px;
          max-height: 85vh;
          background-color: #f5f7fa;
          z-index: 10000;
          border-radius: 12px;

          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 50px rgba(0,0,0,0.3);
          overflow: hidden;
        }

        .modal-header {
          background-color: #0093ff; /* Matched from screenshot */
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: white;
        }

        .modal-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 16px;
          font-weight: 600;
        }

        .modal-icon {
          opacity: 0.9;
        }

        .provider-count {
          background-color: rgba(255,255,255,0.2);
          border: 1px solid rgba(255,255,255,0.4);
          border-radius: 12px;
          padding: 2px 8px;
          font-size: 12px;
        }

        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          border-radius: 50%;
          transition: background-color 0.2s;
        }

        .close-btn:hover {
          background-color: rgba(255,255,255,0.1);
        }

        .modal-body {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
        }

        .provider-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        @media (min-width: 640px) {
          .provider-grid {
             grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 900px) {
          .provider-grid {
             grid-template-columns: repeat(4, 1fr);
          }
        }

        .modal-provider-card {
          background-color: white;
          border-radius: 8px;
          padding: 12px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 60px;
          transition: transform 0.2s, box-shadow 0.2s;
          width: 100%;
        }

        .modal-provider-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .modal-provider-card.active {
          border: 2px solid #0093ff;
          background-color: #f0f9ff;
        }

        .modal-p-logo {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
      `}</style>
    </>
  );
};

export default ProviderModal;

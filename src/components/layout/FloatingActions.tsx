import React, { useState, useEffect } from 'react';
import { Send, Sun, Moon, MessageSquare, ChevronUp, Headphones } from 'lucide-react';

const FloatingActions: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="floating-actions">
      {/* Scroll Up */}
      {showScrollTop && (
        <button
          className="floating-btn scroll-up-btn"
          onClick={scrollToTop}
          title="Subir"
        >
          <ChevronUp size={24} color="#666" />
        </button>
      )}

      {/* Telegram */}
      <a href="#" className="floating-btn tg-circle" title="Canal de Telegram">
        <Send size={24} fill="white" color="white" strokeWidth={0} className="tg-icon" />
      </a>

      {/* Message Chat */}
      <a href="#" className="floating-btn msg-circle" title="Chatear con nosotros">
        <MessageSquare size={24} fill="white" color="white" />
      </a>

      {/* Customer Service */}
      <button className="floating-btn support-btn" title="Atención al cliente">
        <Headphones size={28} color="#00A6FF" />
        <div className="support-dot"></div>
      </button>

      {/* Theme Toggle */}
      <button
        className="floating-btn theme-btn"
        onClick={() => setIsDark(!isDark)}
        title={isDark ? "Modo Claro" : "Modo Oscuro"}
      >
        {isDark ? <Moon size={24} /> : <Sun size={24} />}
      </button>

      <style>{`
        .floating-actions {
          position: fixed;
          bottom: 30px;
          right: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 100;
          align-items: center;
          pointer-events: none;
        }

        .floating-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          background: white;
          border: none;
          position: relative;
          pointer-events: auto;
        }

        .floating-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.15);
        }

        .scroll-up-btn {
          background-color: white;
        }

        .tg-circle {
          background-color: #0088CC;
        }

        .tg-icon {
          transform: translate(-1px, 1px);
        }

        .msg-circle {
          background-color: #FF9500;
        }

        .support-btn {
          background-color: white;
          border: 2px solid #EEE;
        }

        .support-dot {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 10px;
          height: 10px;
          background-color: #4cd964;
          border-radius: 50%;
          border: 2px solid white;
        }

        .theme-btn {
          background-color: #f2f2f7;
          color: #1c1c1e;
        }

        @media (max-width: 768px) {
          .floating-actions {
            bottom: 20px;
            right: 15px;
            gap: 10px;
          }
          .floating-btn {
            width: 42px;
            height: 42px;
          }
        }

        @media (min-width: 1200px) {
          .floating-actions {
            right: max(20px, calc((100vw - 1440px) / 2 + 20px));
          }
        }

      `}</style>
    </div>
  );
};

export default FloatingActions;

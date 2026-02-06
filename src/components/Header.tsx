import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigation } from '../App';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navigateTo } = useNavigation();

  const navLinks = [
    { label: 'Deportes 1', page: 'lobby' as const },
    { label: 'Deportes 2', page: 'lobby' as const },
    { label: 'Deportes 3', page: 'lobby' as const },
    { label: 'CASINO', page: 'lobby' as const, active: true },
    { label: 'Promociones', page: 'lobby' as const },
    { label: 'BLOGS', page: 'lobby' as const },
    { label: 'NOTICIAS', page: 'lobby' as const },
  ];



  return (
    <header className="header">
      <div className="container header-container">
        <div className="header-content">
          <div className="header-left">
            <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
            <div className="logo">
              <img
                src="https://sfgdefe0923.fun88adrods.online/mexicoimages/logo/dark.webp"
                alt="FUN88"
                className="logo-img"
              />
            </div>
          </div>

          <nav className="header-nav">
            {navLinks.map((link) => (
              <a
                key={link.label}
                onClick={() => navigateTo(link.page)}
                className={`nav-link ${link.active ? 'active' : ''}`}
                style={{ cursor: 'pointer' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-right">
            <div className="header-actions">
              <button className="btn btn-acceso">Acceso</button>
              <button className="btn btn-registrate">Regístrate</button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div className={`mobile-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)} />

      {/* Mobile Drawer Content */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <img
            src="https://sfgdefe0923.fun88adrods.online/mexicoimages/logo/dark.webp"
            alt="FUN88"
            className="logo-img-drawer"
          />
          <button className="close-btn" onClick={() => setMobileMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <nav className="drawer-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              onClick={() => {
                navigateTo(link.page);
                setMobileMenuOpen(false);
              }}
              className={`drawer-link ${link.active ? 'active' : ''}`}
              style={{ cursor: 'pointer' }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <style>{`
        .header {
          height: 60px;
          background-color: #ffffff;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          box-shadow: var(--header-shadow);
          transition: var(--transition);
        }

        .header-container {
          height: 100%;
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }

        .header-left {
          display: flex;
          align-items: center;
          flex: 1;
        }

        .mobile-menu-btn {
          display: none;
          color: var(--secondary);
          margin-right: 15px;
        }

        .logo {
          display: flex;
          align-items: center;
          cursor: pointer;
          min-width: 78px;
        }

        .logo-img {
          width: 100px;
          aspect-ratio: 471 / 104;
          display: block;
        }

        .logo-img-drawer {
          width: 120px;
          aspect-ratio: 471 / 104;
        }

        .header-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 700px;
          margin-right: 30px;
        }

        @media (min-width: 1536px) {
          .header-nav {
            margin-right: 100px;
          }
        }

        .nav-link {
          font-weight: 600;
          color: var(--secondary);
          font-size: 14px;
          position: relative;
          text-transform: uppercase;
          transition: var(--transition);
          white-space: nowrap;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--highlight);
        }

        .header-right {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex: 1;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .btn {
          cursor: pointer;
          border: none;
          border-radius: 6px;
          height: 35px;
          padding: 0 12px;
          font-size: 12px;
          font-weight: 300;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }

        .btn-acceso {
          background-color: var(--highlight);
          color: white;
        }

        .btn-registrate {
          background-color: var(--primary-btn-bg);
          color: white;
        }

        .btn:hover {
          opacity: 0.8;
          transform: translateY(-1px);
        }

        /* Mobile Drawer */
        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 59, 92, 0.8);
          z-index: 2000;
          opacity: 0;
          visibility: hidden;
          transition: var(--transition);
        }

        .mobile-overlay.open {
          opacity: 1;
          visibility: visible;
        }

        .mobile-drawer {
          position: fixed;
          top: 0;
          left: -320px;
          width: 310px;
          height: 100%;
          background: #ffffff;
          z-index: 2001;
          transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .mobile-drawer.open {
          left: 0;
        }

        .drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 20px;
          border-bottom: 1px solid #f0f0f0;
        }

        .close-btn {
          color: var(--secondary);
        }

        .drawer-nav {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .drawer-link {
          font-size: 16px;
          font-weight: 600;
          color: var(--secondary);
          padding: 10px 0;
          text-transform: uppercase;
        }

        .drawer-link.active {
          color: var(--highlight);
        }

        @media (max-width: 1280px) {
          .header-nav {
            display: none;
          }
          .mobile-menu-btn {
            display: flex;
          }
          .header-left {
            flex: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;

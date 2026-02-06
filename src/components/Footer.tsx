import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Send, Music2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Links */}
        <div className="footer-links">
          {/* Column 1: Información */}
          <div className="footer-col">
            <h3>INFORMACIÓN</h3>
            <a href="#">Sobre Nosotros</a>
            <a href="#">Términos y condiciones</a>
            <a href="#">Juego Responsable</a>
            <a href="#">Aviso de privacidad y cookies del sitio</a>
            <a href="#">Programa de afiliación</a>
            <a href="#">Mecánica de apuestas</a>
            <a href="#">Condiciones de apuesta</a>
          </div>

          {/* Column 2: Nuestras Secciones */}
          <div className="footer-col">
            <h3>NUESTRAS SECCIONES</h3>
            <a href="#">Deportes</a>
            <a href="#">Juegos</a>
            <a href="#">Promociones</a>
            <a href="#">Patrocinadoras</a>
          </div>

          {/* Column 3: Ayuda */}
          <div className="footer-col">
            <h3>AYUDA</h3>
            <a href="#">Preguntas frecuentes</a>
            <a href="#">Depósito</a>
            <a href="#">Retirar</a>
            <a href="#">Política de reembolso</a>
          </div>

          {/* Column 4: Contacto */}
          <div className="footer-col">
            <h3>CONTACTO</h3>
            <a href="#">Contacto</a>
          </div>
        </div>

        {/* App Store Buttons */}
        <div className="app-buttons">
          <a href="#" className="app-btn">
            <div className="app-btn-content">
              <span className="app-btn-small">Descarga en el</span>
              <span className="app-btn-large">App Store</span>
            </div>
          </a>
          <a href="#" className="app-btn">
            <div className="app-btn-content">
              <span className="app-btn-small">Descarga en el</span>
              <span className="app-btn-large">Android APK</span>
            </div>
          </a>
        </div>

        {/* International Links */}
        <div className="international-links">
          <a href="#">Fun88 Vietnam</a>
          <span className="separator">|</span>
          <a href="#">Fun88 Vietnam 1</a>
          <span className="separator">|</span>
          <a href="#">Fun88 Vietnam EN</a>
          <span className="separator">|</span>
          <a href="#">Fun88 Thailand</a>
          <span className="separator">|</span>
          <a href="#">Fun88 Thailand 1</a>
          <span className="separator">|</span>
          <a href="#">Fun88 Thailand EN</a>
          <span className="separator">|</span>
          <a href="#">Fun88 China</a>
          <span className="separator">|</span>
          <a href="#">Fun88 Mexico</a>
          <span className="separator">|</span>
          <a href="#">Fun88 Chile</a>
          <span className="separator">|</span>
          <a href="#">Fun88 Argentina</a>
          <span className="separator">|</span>
          <a href="#">Fun88 Paraguay</a>
          <span className="separator">|</span>
          <a href="#">Fun88 India</a>
          <span className="separator">|</span>
          <a href="#">Fun88 Global</a>
        </div>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="#" className="social-icon telegram"><Send size={20} /></a>
          <a href="#" className="social-icon instagram"><Instagram size={20} /></a>
          <a href="#" className="social-icon facebook"><Facebook size={20} /></a>
          <a href="#" className="social-icon twitter"><Twitter size={20} /></a>
          <a href="#" className="social-icon tiktok"><Music2 size={20} /></a>
          <a href="#" className="social-icon youtube"><Youtube size={20} /></a>
        </div>

        <div className="divider"></div>

        {/* Newcastle Partnership Logo */}
        <div className="partnership-section">
          <img
            src="https://www.fun88.mx/assets/newcastle-beac8089.webp"
            alt="Newcastle United"
            className="newcastle-img"
          />
        </div>

        {/* Payment Methods */}
        <div className="payment-methods">
          <div className="payment-logos">
            <img src="https://www.fun88.mx/assets/calimax-5ada92fb.webp" alt="Calimax" className="payment-logo" />
            <img src="https://www.fun88.mx/assets/santader-33b8d65c.webp" alt="Santander" className="payment-logo" />
            <img src="data:image/webp;base64,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" alt="Payment Method" className="payment-logo" />
          </div>
        </div>

        {/* Legal Text */}
        <div className="legal-text">
          <p>
            WWW.FUN88MX.MX OPERADA EN MÉXICO POR PRODUCCIONES MÓVILES S.A. DE C.V., TITULAR DEL PERMISO DGJS/SCEVP-001/2025-TER EN LÍNEA DE JUEGOS/APUESTA LA PAZ OPERADORA S.A. DE C.V. DE CONFORMIDAD CON LOS OFICIOS DGJS/SCAJ/2021 Y DGJS/SCAJ/2023. JUEGOS PROHIBIDOS PARA MENORES DE EDAD. JUEGUE RESPONSABLEMENTE. NO OLVIDE QUE EL PRINCIPAL PROPÓSITO DE LA RECREACIÓN EN JUEGO Y APUESTAS ES EL ENTRETENIMIENTO.
          </p>
        </div>

      </div>

      <style>{`
        .footer {
          background-color: #002335;
          color: white;
          padding: 50px 0 20px;
          margin-top: auto;
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 30px;
          margin-bottom: 40px;
        }

        @media (min-width: 768px) {
          .footer-links {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .footer-links {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .footer-col h3 {
          color: #46aef7;
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .footer-col a {
          display: block;
          color: #46aef7;
          font-size: 12px;
          margin-bottom: 10px;
          text-decoration: none;
          transition: opacity 0.2s;
          font-weight: 300;
        }

        .footer-col a:hover {
          opacity: 0.7;
        }

        .app-buttons {
          display: flex;
          gap: 15px;
          justify-content: center;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }

        .app-btn {
          background: linear-gradient(135deg, #1e5a8e 0%, #2a7ab8 100%);
          border-radius: 8px;
          padding: 10px 20px;
          text-decoration: none;
          color: white;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: transform 0.2s;
          min-width: 150px;
        }

        .app-btn:hover {
          transform: translateY(-2px);
        }

        .app-btn-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .app-btn-small {
          font-size: 10px;
          opacity: 0.9;
        }

        .app-btn-large {
          font-size: 16px;
          font-weight: 700;
        }

        .international-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
          margin-bottom: 30px;
          font-size: 12px;
          align-items: center;
        }

        .international-links a {
          color: #46aef7;
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .international-links a:hover {
          opacity: 0.7;
        }

        .separator {
          color: rgba(255, 255, 255, 0.3);
        }

        .social-icons {
          display: flex;
          gap: 15px;
          justify-content: center;
          margin-bottom: 30px;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s;
          color: white;
        }

        .social-icon:hover {
          transform: scale(1.1);
        }

        .social-icon.telegram {
          background-color: #0088cc;
        }

        .social-icon.instagram {
          background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
        }

        .social-icon.facebook {
          background-color: #1877f2;
        }

        .social-icon.twitter {
          background-color: #000000;
        }

        .social-icon.tiktok {
          background-color: #000000;
        }

        .social-icon.youtube {
          background-color: #ff0000;
        }

        .divider {
          height: 1px;
          background-color: rgba(70, 174, 247, 0.2);
          margin: 30px 0;
          width: 100%;
        }

        .partnership-section {
          display: flex;
          justify-content: center;
          margin-bottom: 30px;
        }

        .newcastle-img {
          max-width: 300px;
          height: auto;
          object-fit: contain;
        }

        .payment-methods {
          text-align: center;
          margin-bottom: 30px;
        }

        .payment-logos {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          align-items: center;
        }

        .payment-logo {
          height: 40px;
          width: auto;
          object-fit: contain;
          filter: brightness(0.9);
          transition: filter 0.2s;
        }

        .payment-logo:hover {
          filter: brightness(1.1);
        }

        .legal-text {
          text-align: center;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid rgba(70, 174, 247, 0.1);
        }

        .legal-text p {
          color: rgba(70, 174, 247, 0.6);
          font-size: 9px;
          line-height: 1.6;
          max-width: 900px;
          margin: 0 auto;
        }
      `}</style>
    </footer>
  );
};

export default Footer;

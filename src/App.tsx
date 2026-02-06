import React, { useState, createContext, useContext } from 'react';
import { GameProvider } from './context/GameContext';
import Header from './components/layout/Header';
import HeroBanner from './components/features/casino/HeroBanner';
import ProviderSlider from './components/features/casino/ProviderSlider';
import CategoryTabs from './components/features/casino/CategoryTabs';
import GameGrid from './components/features/casino/GameGrid';
import FloatingActions from './components/layout/FloatingActions';
import Footer from './components/layout/Footer';
import CasinoInfo from './components/features/casino/CasinoInfo';
import ProviderModal from './components/features/casino/ProviderModal';

// Create a navigation context
type Page = 'lobby' | 'casino-info';
interface NavigationContextType {
  currentPage: Page;
  navigateTo: (page: Page) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('lobby');

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <NavigationContext.Provider value={{ currentPage, navigateTo }}>
      <GameProvider>
        <div className="app-wrapper">
          <Header />
          <main className="main-content">
            <HeroBanner />
            <ProviderSlider />
            <CategoryTabs />
            <GameGrid />
            <CasinoInfo />
          </main>

          <FloatingActions />
          <Footer />
          <ProviderModal />


          <style>{`
            .app-wrapper {
              display: flex;
              flex-direction: column;
              min-height: 100vh;
              background-color: var(--bg-main);
            }

            .main-content {
              flex: 1;
              display: flex;
              flex-direction: column;
              padding-top: 60px; /* Compensate for fixed header */
            }
          `}</style>
        </div>
      </GameProvider>
    </NavigationContext.Provider>
  );
};

export default App;

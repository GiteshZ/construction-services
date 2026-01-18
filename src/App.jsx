import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LayoutProvider, useLayout } from './context/LayoutContext';

// Classic Components
import ClassicHeader from './components/classic/layout/Header';
import ClassicHero from './components/classic/sections/Hero';
import ClassicServices from './components/classic/sections/Services';
import ClassicGallery from './components/classic/sections/Gallery';
import ClassicContact from './components/classic/sections/Contact';
import ClassicFooter from './components/classic/layout/Footer';
import ClassicProjectDetail from './components/classic/pages/ProjectDetail';

// Modern Components
import ModernHeader from './components/modern/layout/ModernHeader';
import ModernHero from './components/modern/sections/ModernHero';
import ModernServices from './components/modern/sections/ModernServices';
import ModernGallery from './components/modern/sections/ModernGallery';
import ModernContact from './components/modern/sections/ModernContact';
import ModernFooter from './components/modern/layout/ModernFooter';
import ModernProjectDetail from './components/modern/pages/ModernProjectDetail';

import ScrollToTop from './components/ScrollToTop';

const Home = () => {
  const { layout } = useLayout();

  if (layout === 'classic') {
    return (
      <>
        <ClassicHero />
        <ClassicServices />
        <ClassicGallery />
        <ClassicContact />
      </>
    );
  }

  // Modern Home
  return (
    <>
      <ModernHero />
      <ModernServices />
      <ModernGallery />
      <ModernContact />
    </>
  );
};

const AppContent = () => {
  const { layout, toggleLayout } = useLayout();

  return (
    <div className={`app ${layout}-layout`}>
      <ScrollToTop />

      {/* Global Layout Toggle */}
      <button
        onClick={toggleLayout}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 9999,
          padding: '0.75rem 1.5rem',
          backgroundColor: layout === 'classic' ? '#000' : '#fff',
          color: layout === 'classic' ? '#fff' : '#000',
          border: 'none',
          borderRadius: '50px',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
          fontSize: '0.8rem',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}
      >
        Switch to {layout === 'classic' ? 'Modern' : 'Classic'}
      </button>

      {layout === 'classic' ? <ClassicHeader /> : <ModernHeader />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/project/:id"
          element={layout === 'classic' ? <ClassicProjectDetail /> : <ModernProjectDetail />}
        />
      </Routes>

      {layout === 'classic' ? <ClassicFooter /> : <ModernFooter />}
    </div>
  );
};

function App() {
  return (
    <LayoutProvider>
      <Router>
        <AppContent />
      </Router>
    </LayoutProvider>
  );
}

export default App;

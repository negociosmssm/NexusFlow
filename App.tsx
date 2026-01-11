
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { DashboardPreview } from './components/DashboardPreview';
import { Integrations } from './components/Integrations';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { BackgroundEffect } from './components/BackgroundEffect';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Legal } from './pages/Legal';

export type Page = 'home' | 'about' | 'contact' | 'privacy' | 'terms';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <BentoGrid />
            <DashboardPreview />
            <Integrations />
            <Pricing />
          </>
        );
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'privacy':
      case 'terms':
        return <Legal type={currentPage} />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0B0E14] text-white selection:bg-[#00F5FF]/30">
      <BackgroundEffect />
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="relative z-10">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;

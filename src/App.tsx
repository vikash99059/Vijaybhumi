import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { BusinessesHubPage } from './pages/BusinessesHubPage';
import { MiningBusinessPage } from './pages/MiningBusinessPage';
import { PropertiesBusinessPage } from './pages/PropertiesBusinessPage';
import { SolarEnergyBusinessPage } from './pages/SolarEnergyBusinessPage';
import { MiningLimitedPage } from './pages/MiningLimitedPage';
import { BizharHeritagePage } from './pages/BizharHeritagePage';
import { ServicesPage } from './pages/ServicesPage';
import { OperationalStrengthPage } from './pages/OperationalStrengthPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { PartnersPage } from './pages/PartnersPage';
import { FuturePage } from './pages/FuturePage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  // Use hash or state-based routing for robust multi-page SPA navigation
  const [currentPath, setCurrentPath] = useState<string>(() => {
    const hash = window.location.hash.replace(/^#/, '');
    return hash || window.location.pathname || '/';
  });

  const [isEnquiryOpen, setIsEnquiryOpen] = useState<boolean>(false);
  const [enquiryDefaultVertical, setEnquiryDefaultVertical] = useState<string>('mining');

  // Handle browser history and hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '');
      const path = hash || '/';
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    window.location.hash = path;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnquiry = (defaultVertical = 'mining') => {
    setEnquiryDefaultVertical(defaultVertical);
    setIsEnquiryOpen(true);
  };

  // Render active page based on current path
  const renderPage = () => {
    if (currentPath === '/' || currentPath === '') {
      return <HomePage onNavigate={handleNavigate} onOpenEnquiry={() => handleOpenEnquiry('mining')} />;
    }
    if (currentPath === '/about') {
      return <AboutPage onNavigate={handleNavigate} onOpenEnquiry={() => handleOpenEnquiry('mining')} />;
    }
    if (currentPath === '/businesses') {
      return <BusinessesHubPage onNavigate={handleNavigate} onOpenEnquiry={() => handleOpenEnquiry('mining')} />;
    }
    if (currentPath === '/business/mining') {
      return <MiningBusinessPage onNavigate={handleNavigate} onOpenEnquiry={() => handleOpenEnquiry('mining')} />;
    }
    if (currentPath === '/business/properties') {
      return <PropertiesBusinessPage onNavigate={handleNavigate} onOpenEnquiry={() => handleOpenEnquiry('properties')} />;
    }
    if (currentPath === '/business/solar-energy') {
      return <SolarEnergyBusinessPage onNavigate={handleNavigate} onOpenEnquiry={() => handleOpenEnquiry('solar')} />;
    }
    if (currentPath === '/business/mining-limited') {
      return <MiningLimitedPage onNavigate={handleNavigate} onOpenEnquiry={() => handleOpenEnquiry('mining-limited')} />;
    }
    if (currentPath === '/business/bizhar-heritage') {
      return <BizharHeritagePage onNavigate={handleNavigate} onOpenEnquiry={() => handleOpenEnquiry('bizhar-heritage')} />;
    }
    if (currentPath === '/services' || currentPath.startsWith('/services/')) {
      return <ServicesPage currentPath={currentPath} onNavigate={handleNavigate} onOpenEnquiry={() => handleOpenEnquiry('mining')} />;
    }
    if (currentPath === '/operational-strength') {
      return <OperationalStrengthPage onNavigate={handleNavigate} onOpenEnquiry={() => handleOpenEnquiry('mining')} />;
    }
    if (currentPath === '/projects') {
      return <ProjectsPage onNavigate={handleNavigate} onOpenEnquiry={() => handleOpenEnquiry('mining')} />;
    }
    if (currentPath === '/partners') {
      return <PartnersPage onNavigate={handleNavigate} onOpenEnquiry={() => handleOpenEnquiry('mining')} />;
    }
    if (currentPath === '/future') {
      return <FuturePage onNavigate={handleNavigate} onOpenEnquiry={() => handleOpenEnquiry('mining')} />;
    }
    if (currentPath === '/contact') {
      return <ContactPage />;
    }

    // Default fallback to HomePage
    return <HomePage onNavigate={handleNavigate} onOpenEnquiry={() => handleOpenEnquiry('mining')} />;
  };

  return (
    <div className="min-h-screen bg-surface-50 text-slate-800 flex flex-col justify-between selection:bg-gold-500 selection:text-navy-950">
      {/* Sticky Header with Mega Menu & Navigation */}
      <Header
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenEnquiry={() => handleOpenEnquiry('mining')}
      />

      {/* Main Page Area */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Corporate Multi-Column Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenEnquiry={() => handleOpenEnquiry('mining')}
      />

      {/* Global Project / Business Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        defaultVertical={enquiryDefaultVertical}
      />
    </div>
  );
};

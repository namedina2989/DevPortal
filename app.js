import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { ApiCatalogPage } from './pages/ApiCatalogPage';
import { GetStartedPage } from './pages/GetStartedPage';
import { DocumentationPage } from './pages/DocumentationPage';
import { SupportPage } from './pages/SupportPage';
import { TermsOfServiceModal } from './components/TermsOfServiceModal';
import { ContactUsPage } from './pages/ContactUsPage';
import { RegisterPage } from './pages/RegisterPage';
import { BillsPaymentPage } from './pages/BillsPaymentPage';
import { FundTransferPage } from './pages/FundTransferPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const openTermsModal = useCallback(() => setIsTermsModalOpen(true), []);
  const closeTermsModal = useCallback(() => setIsTermsModalOpen(false), []);

  const handleSignIn = useCallback(() => {
    setIsLoggedIn(true);
    setCurrentPage('home');
  }, []);

  const handleSignOut = useCallback(() => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'api-catalog':
        return <ApiCatalogPage setCurrentPage={setCurrentPage} />;
      case 'get-started':
        return <GetStartedPage setCurrentPage={setCurrentPage} />;
      case 'documentation':
        return <DocumentationPage setCurrentPage={setCurrentPage} />;
      case 'support':
        return <SupportPage setCurrentPage={setCurrentPage} />;
      case 'contact-us':
        return <ContactUsPage />;
      case 'register':
        return <RegisterPage setCurrentPage={setCurrentPage} onSignIn={handleSignIn} onOpenTerms={openTermsModal} />;
      case 'bills-payment':
        return <BillsPaymentPage setCurrentPage={setCurrentPage} />;
      case 'fund-transfer':
        return <FundTransferPage setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  const mainBgClass = () => {
    if (['get-started', 'bills-payment', 'documentation', 'fund-transfer'].includes(currentPage)) return 'bg-white';
    return 'bg-white';
  }

  if (currentPage === 'register') {
    return (
      <>
        <RegisterPage setCurrentPage={setCurrentPage} onSignIn={handleSignIn} onOpenTerms={openTermsModal} />
        <TermsOfServiceModal isOpen={isTermsModalOpen} onClose={closeTermsModal} />
      </>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col ${mainBgClass()}`}>
      <Header 
        isLoggedIn={isLoggedIn} 
        onSignOut={handleSignOut}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <div className="flex-grow">
        {renderPage()}
      </div>
      {currentPage !== 'get-started' && <Footer setCurrentPage={setCurrentPage} currentPage={currentPage} onOpenTerms={openTermsModal} />}
      <TermsOfServiceModal isOpen={isTermsModalOpen} onClose={closeTermsModal} />
    </div>
  );
};

const Footer = ({ setCurrentPage, currentPage, onOpenTerms }) => {
    const footerBgClass = ['bills-payment', 'documentation', 'fund-transfer'].includes(currentPage) ? 'bg-gray-100' : 'bg-gray-50';
    const textColorClass = ['bills-payment', 'documentation', 'fund-transfer'].includes(currentPage) ? 'text-gray-600' : 'text-gray-500';

    return (
        <footer className={`${footerBgClass} border-t border-gray-200`}>
            <div className={`container mx-auto px-6 py-8 text-center ${textColorClass} text-sm`}></div>
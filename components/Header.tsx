import React, { useState, useEffect } from 'react';
import { NAV_LINKS, LOGO_URL } from '../constants';

// Componente de logo temporal
const TempLogo: React.FC = () => (
  <div className="flex items-center space-x-2">
    <div className="w-12 h-12 bg-adv-red rounded-lg flex items-center justify-center">
      <span className="text-white font-bold text-xl">A</span>
    </div>
    <div>
      <div className="text-adv-blue font-bold text-lg">Academia del Valle</div>
      <div className="text-gray-600 text-sm">EC</div>
    </div>
  </div>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#inicio');
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map(link => link.path.substring(1));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { 
        rootMargin: '-40% 0px -60% 0px',
        threshold: 0
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const activeLinkStyle = {
    color: '#FF0000',
    textDecoration: 'underline',
    textUnderlineOffset: '4px'
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#inicio" className="transform hover:scale-105 transition-transform duration-300">
          {logoError ? (
            <TempLogo />
          ) : (
            <img 
              src={LOGO_URL} 
              alt="Academia del Valle EC Logo" 
              className="h-14 md:h-16"
              onError={() => setLogoError(true)}
            />
          )}
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-adv-blue hover:text-adv-red transition-all duration-300 font-semibold text-lg relative group"
              style={activeSection === link.path ? activeLinkStyle : {}}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-adv-red transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-adv-blue focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md py-4 border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col items-center space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-adv-blue hover:text-adv-red transition-all duration-300 font-semibold text-lg py-2 px-4 rounded-lg hover:bg-gray-50"
                style={activeSection === link.path ? activeLinkStyle : {}}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
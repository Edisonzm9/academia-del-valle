import React, { useState, useEffect } from 'react';
import { NAV_LINKS, LOGO_URL } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#inicio');

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
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#inicio">
          <img src={LOGO_URL} alt="Academia del Valle EC Logo" className="h-12 md:h-16" />
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-adv-blue hover:text-adv-red transition-colors duration-300 font-semibold"
              style={activeSection === link.path ? activeLinkStyle : {}}
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-adv-blue focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          <nav className="flex flex-col items-center space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-adv-blue hover:text-adv-red transition-colors duration-300 font-semibold py-2"
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
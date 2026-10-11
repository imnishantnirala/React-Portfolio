import React, { useState } from 'react';
import { headerData } from '../data/constants';
import logoImg from '../assets/profile-logo.png';

function Header() {
  const { title, menuList, buttonText, buttonClasses, buttonSpanClasses, link } = headerData;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/85 backdrop-blur-md border-b border-gray-800/70 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Brand */}
          <a href="#About" className="flex items-center gap-2 group" onClick={handleLinkClick}>
            <img
              src={logoImg}
              className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              alt="Profile Logo"
            />
            <span className="sr-only">{title.firstName} {title.lastName}</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-0.5 lg:space-x-1.5 xl:space-x-2">
            {menuList.map((item, index) => (
              <a
                key={index}
                href={'#' + item.replace(/\s+/g, '')}
                className="px-2.5 lg:px-3.5 py-1.5 lg:py-2 text-xs lg:text-sm xl:text-base font-medium text-gray-300 hover:text-white rounded-lg hover:bg-white/5 whitespace-nowrap transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center shrink-0">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button className={buttonClasses}>
                <span className={buttonSpanClasses}>
                  {buttonText}
                </span>
              </button>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/60 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                /* Close Icon */
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                /* Hamburger Icon */
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-950/95 backdrop-blur-xl border-b border-gray-800 shadow-2xl animate-fadeIn">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {menuList.map((item, index) => (
              <a
                key={index}
                href={'#' + item.replace(/\s+/g, '')}
                onClick={handleLinkClick}
                className="block px-4 py-3 rounded-xl text-base font-medium text-gray-200 hover:text-white hover:bg-purple-600/10 hover:border-l-4 hover:border-purple-500 transition-all duration-150"
              >
                {item}
              </a>
            ))}
            <div className="pt-4 px-2">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="block w-full"
              >
                <button className={`${buttonClasses} w-full justify-center`}>
                  <span className={`${buttonSpanClasses} w-full text-center block`}>
                    {buttonText}
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

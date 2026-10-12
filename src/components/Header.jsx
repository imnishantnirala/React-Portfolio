import { useState } from 'react';
import { Sun, Moon, Menu, X, ExternalLink } from 'lucide-react';
import { headerData } from '../data/constants';
import logoImg from '../assets/profile-logo.png';
import { useTheme } from '../hooks/useTheme';
import { useScrollSpy } from '../hooks/useScrollSpy';

function Header() {
  const { title, menuList, buttonText, link } = headerData;
  const [menuOpen, setMenuOpen] = useState(false);
  const { toggleTheme, isDark } = useTheme();

  const sectionIds = menuList.map(item => item.replace(/\s+/g, ''));
  const activeSection = useScrollSpy(sectionIds);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Accessible Skip-to-content Link */}
      <a
        href="#About"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[999] focus:px-4 focus:py-2.5 focus:rounded-xl focus:bg-primary-600 focus:text-white focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent-400 font-medium text-sm transition-all"
      >
        Skip to main content
      </a>

      <header
        className="fixed top-0 left-0 right-0 z-40 bg-surface-50/85 dark:bg-surface-950/85 backdrop-blur-xl border-b border-surface-200/70 dark:border-white/[0.07] transition-colors duration-300 shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Brand Logo */}
            <a
              href="#About"
              className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-primary-500 rounded-lg p-1 -ml-1 transition-transform"
              onClick={handleLinkClick}
              aria-label={`${title.firstName} ${title.lastName} Home`}
            >
              {/* <div className="relative">
                <img
                  src={logoImg}
                  className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  alt="Profile Logo"
                  width="44"
                  height="44"
                />
              </div> */}
              <span className="font-mono text-sm sm:text-base font-bold tracking-tight text-surface-900 dark:text-white hidden xs:inline-block">
                <span className="text-primary-600 dark:text-primary-400">&lt;</span>
                {title.firstName}
                <span className="text-surface-400 font-light mx-0.5">/</span>
                {title.lastName}
                <span className="text-primary-600 dark:text-primary-400">&gt;</span>
              </span>
              <span className="sr-only">{title.firstName} {title.lastName}</span>
            </a>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center space-x-1 p-1 rounded-full bg-surface-200/50 dark:bg-white/[0.04] border border-surface-300/40 dark:border-white/[0.06] backdrop-blur-md"
              aria-label="Main Navigation"
            >
              {menuList.map((item, index) => {
                const targetId = item.replace(/\s+/g, '');
                const isActive = activeSection === targetId;

                return (
                  <a
                    key={index}
                    href={'#' + targetId}
                    className={`relative px-3.5 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-primary-500 ${
                      isActive
                        ? 'text-white bg-primary-600 dark:bg-primary-500 shadow-sm shadow-primary-500/25'
                        : 'text-surface-600 dark:text-surface-300 hover:text-surface-950 dark:hover:text-white hover:bg-surface-300/30 dark:hover:bg-white/[0.06]'
                    }`}
                  >
                    {item}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Right Actions: Theme Toggle + CTA */}
            <div className="hidden md:flex items-center gap-3">
              {/* Theme Toggle Button */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-surface-600 dark:text-surface-300 hover:text-surface-950 dark:hover:text-white bg-surface-200/60 dark:bg-white/[0.05] hover:bg-surface-300/60 dark:hover:bg-white/[0.1] border border-surface-300/50 dark:border-white/[0.08] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary-500"
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
                ) : (
                  <Moon className="w-4 h-4 text-primary-600 transition-transform hover:-rotate-12" />
                )}
              </button>

              {/* LinkedIn CTA Button */}
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 px-4 py-2 text-xs lg:text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600 hover:from-primary-500 hover:to-accent-500 shadow-md shadow-primary-600/20 hover:shadow-primary-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary-400"
              >
                <span>{buttonText}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>

            {/* Mobile Controls: Theme Toggle + Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-surface-600 dark:text-surface-300 bg-surface-200/60 dark:bg-white/[0.05] border border-surface-300/50 dark:border-white/[0.08] transition-colors focus-visible:ring-2 focus-visible:ring-primary-500"
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-primary-600" />
                )}
              </button>

              <button
                onClick={toggleMenu}
                type="button"
                className="w-10 h-10 inline-flex items-center justify-center rounded-xl text-surface-700 dark:text-surface-200 bg-surface-200/60 dark:bg-white/[0.05] border border-surface-300/50 dark:border-white/[0.08] hover:bg-surface-300/60 dark:hover:bg-white/[0.1] focus-visible:ring-2 focus-visible:ring-primary-500 transition-colors"
                aria-controls="mobile-menu"
                aria-expanded={menuOpen}
                aria-label="Toggle navigation menu"
              >
                {menuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden border-b border-surface-200 dark:border-surface-800 bg-surface-50/98 dark:bg-surface-950/98 backdrop-blur-2xl shadow-2xl transition-all animate-fade-in"
          >
            <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-1.5">
              {menuList.map((item, index) => {
                const targetId = item.replace(/\s+/g, '');
                const isActive = activeSection === targetId;

                return (
                  <a
                    key={index}
                    href={'#' + targetId}
                    onClick={handleLinkClick}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-primary-600/10 text-primary-600 dark:bg-primary-500/15 dark:text-primary-400 border-l-4 border-primary-600 dark:border-primary-400'
                        : 'text-surface-700 dark:text-surface-300 hover:bg-surface-200/60 dark:hover:bg-white/[0.04] hover:text-surface-950 dark:hover:text-white'
                    }`}
                  >
                    <span>{item}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-600 dark:bg-primary-400" />
                    )}
                  </a>
                );
              })}

              <div className="pt-3 px-1">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-semibold text-white text-sm bg-gradient-to-r from-primary-600 to-accent-600 shadow-md shadow-primary-600/25"
                >
                  <span>{buttonText}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;

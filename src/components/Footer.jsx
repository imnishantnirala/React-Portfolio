import React from 'react';
import { headerData } from '../data/constants';

function Footer() {
  const { menuList, link } = headerData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-850/80 bg-black/60 mt-16 sm:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <a href="#About" className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors">
            <span className="font-mono text-lg sm:text-xl font-bold tracking-tight">
              <span className="text-purple-400 font-extrabold">&lt;</span>
              {' Nishant '}
              <span className="text-gray-500 font-normal">/</span>
              {' Nirala '}
              <span className="text-purple-400 font-extrabold">&gt;</span>
            </span>
          </a>

          {/* Nav Links */}
          <ul className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-gray-400">
            {menuList.map((item, index) => (
              <li key={index}>
                <a
                  href={'#' + item.replace(/\s+/g, '')}
                  className="hover:text-purple-400 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {currentYear} Nishant Nirala. All Rights Reserved.</p>
          <p className="text-gray-600">Built with React &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
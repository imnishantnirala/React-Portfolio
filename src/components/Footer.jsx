import { headerData } from '../data/constants';

function Footer() {
  const { menuList, link, githubLink } = headerData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-200 dark:border-white/[0.08] bg-surface-100/60 dark:bg-surface-950/80 mt-16 sm:mt-24 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <a
            href="#About"
            className="flex items-center space-x-2 text-surface-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500 rounded-lg p-1"
            aria-label="Back to top"
          >
            <span className="font-mono text-lg sm:text-xl font-bold tracking-tight">
              <span className="text-primary-600 dark:text-primary-400">&lt;</span>
              {' Nishant '}
              <span className="text-surface-400 dark:text-surface-600 font-light">/</span>
              {' Nirala '}
              <span className="text-primary-600 dark:text-primary-400">&gt;</span>
            </span>
          </a>

          {/* Navigation Links */}
          <nav aria-label="Footer Navigation">
            <ul className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-surface-600 dark:text-surface-400">
              {menuList.map((item, index) => (
                <li key={index}>
                  <a
                    href={'#' + item.replace(/\s+/g, '')}
                    className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
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
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
                >
                  LinkedIn
                </a>
              </li>
              {githubLink && (
                <li>
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
                  >
                    GitHub
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-surface-200 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-surface-500 dark:text-surface-400">
          <p>© {currentYear} Nishant Nirala. All Rights Reserved.</p>
          <p className="font-medium text-surface-600 dark:text-surface-400">
            Full Stack Engineer &amp; Video Editor
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
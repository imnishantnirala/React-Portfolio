import { ExternalLink, Calendar } from 'lucide-react';
import { projects } from '../data/constants';

function Projects() {
  return (
    <section
      id="Projects"
      className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      aria-label="Software Engineering Projects"
    >
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 mb-3.5 rounded-full bg-primary-600/10 dark:bg-primary-500/15 border border-primary-600/20 dark:border-primary-400/25 text-primary-700 dark:text-primary-300 text-xs font-semibold tracking-wider uppercase font-mono">
          <span>Featured Work</span>
        </div>
        <h2 className="text-fluid-h2 font-extrabold text-surface-950 dark:text-white tracking-tight">
          Projects
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto leading-relaxed readable-measure">
          A showcase of enterprise fleet management platforms, client portals, microservices, and web applications.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <article
            key={index}
            className="group flex flex-col bg-surface-100/80 dark:bg-surface-900/60 backdrop-blur-md border border-surface-200/80 dark:border-white/[0.08] rounded-2xl overflow-hidden shadow-sm dark:shadow-glass-dark hover:border-primary-500/40 dark:hover:border-primary-400/35 transition-all duration-300 hover:-translate-y-1.5"
          >
            {/* Project Image Frame (Fixed aspect ratio to prevent CLS) */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-200 dark:bg-surface-950">
              <img
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                src={project.image}
                alt={project.title}
                loading="lazy"
                width="640"
                height="400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-950/60 via-transparent to-transparent opacity-40 dark:opacity-70 group-hover:opacity-30 transition-opacity" />
            </div>

            {/* Project Card Content */}
            <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-surface-950 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors line-clamp-1">
                  {project.title}
                </h3>

                <p className="text-xs font-mono font-medium text-primary-600 dark:text-primary-400 mt-1 mb-3 flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 opacity-80" />
                  <span>{project.date}</span>
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="inline-block text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-md bg-surface-200/80 dark:bg-white/[0.05] text-surface-700 dark:text-surface-300 border border-surface-300/70 dark:border-white/[0.08]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-surface-600 dark:text-surface-400 leading-relaxed line-clamp-4">
                  {project.description}
                </p>
              </div>

              {/* Action Links */}
              {project.links && project.links.length > 0 && (
                <div className="mt-5 pt-4 border-t border-surface-200 dark:border-white/[0.08] flex flex-wrap items-center gap-2">
                  {project.links.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-950/40 hover:bg-primary-100 dark:hover:bg-primary-900/50 border border-primary-200 dark:border-primary-800/40 hover:border-primary-400 dark:hover:border-primary-500/50 transition-all duration-200 shadow-sm focus-visible:ring-2 focus-visible:ring-primary-500"
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="w-3 h-3 opacity-80" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;

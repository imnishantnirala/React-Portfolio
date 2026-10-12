import { Sparkles } from 'lucide-react';
import { skillsData } from '../data/constants';

function Skills() {
  return (
    <section
      id="Skills"
      className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      aria-label="Skills and Technical Expertise"
    >
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 mb-3.5 rounded-full bg-primary-600/10 dark:bg-primary-500/15 border border-primary-600/20 dark:border-primary-400/25 text-primary-700 dark:text-primary-300 text-xs font-semibold tracking-wider uppercase font-mono">
          <span>Technical Expertise</span>
        </div>
        <h2 className="text-fluid-h2 font-extrabold text-surface-950 dark:text-white tracking-tight">
          Skills &amp; Technologies
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto leading-relaxed readable-measure">
          Languages, frameworks, databases, modern AI workflows, and post-production tools I use to deliver end-to-end digital solutions.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {skillsData.map((category) => {
          const isAiCategory = category.title.includes('AI');

          return (
            <div
              key={category.title}
              className={`flex flex-col rounded-2xl p-6 sm:p-7 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden ${
                isAiCategory
                  ? 'bg-gradient-to-b from-primary-950/20 via-surface-100/80 to-surface-100/90 dark:from-primary-950/40 dark:via-surface-900/80 dark:to-surface-900/90 border-b border-primary-500/40 dark:border-primary-400/35 shadow-lg shadow-primary-500/5 ring-1 ring-primary-500/20'
                  : 'bg-surface-100/80 dark:bg-surface-900/60 backdrop-blur-md border border-surface-200/80 dark:border-white/[0.08] shadow-sm dark:shadow-glass-dark hover:border-primary-500/30 dark:hover:border-primary-400/30'
              }`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-surface-200 dark:border-white/[0.08] mb-5">
                <h3 className="text-lg sm:text-xl font-bold text-surface-950 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors">
                  {category.title}
                </h3>
                {isAiCategory && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-sm">
                    <Sparkles className="w-3 h-3" />
                    AI Tools
                  </span>
                )}
              </div>

              {/* Skills Tag Pills */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-3 py-1.5 sm:py-2 bg-surface-50 dark:bg-surface-800/90 hover:bg-surface-200/70 dark:hover:bg-surface-700/90 border border-surface-300/60 dark:border-white/[0.08] hover:border-primary-500/40 dark:hover:border-primary-400/40 text-surface-800 dark:text-surface-200 rounded-xl text-xs sm:text-sm font-medium shadow-sm transition-all duration-200 hover:scale-[1.03] cursor-default select-none"
                  >
                    <img
                      className="h-4 w-4 sm:h-5 sm:w-5 object-contain shrink-0"
                      src={skill.image}
                      alt={skill.name}
                      loading="lazy"
                      width="20"
                      height="20"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;

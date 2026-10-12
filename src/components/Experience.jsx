import { Calendar, Building2 } from 'lucide-react';
import t2bicon from '../assets/t2b-icon.png';
import { experiences } from '../data/constants';

function Experience() {
  return (
    <section
      id="Experience"
      className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      aria-label="Work Experience and Career History"
    >
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 mb-3.5 rounded-full bg-primary-600/10 dark:bg-primary-500/15 border border-primary-600/20 dark:border-primary-400/25 text-primary-700 dark:text-primary-300 text-xs font-semibold tracking-wider uppercase font-mono">
          <span>Career Journey</span>
        </div>
        <h2 className="text-fluid-h2 font-extrabold text-surface-950 dark:text-white tracking-tight">
          Work Experience
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto leading-relaxed readable-measure">
          Over 3.5+ years of engineering scalable web applications, enterprise REST APIs, and digital media solutions.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 relative">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group relative rounded-2xl bg-surface-100/80 dark:bg-surface-900/60 backdrop-blur-md border border-surface-200/80 dark:border-white/[0.08] p-6 sm:p-8 shadow-sm dark:shadow-glass-dark hover:border-primary-500/40 dark:hover:border-primary-400/35 transition-all duration-300"
          >
            {/* Header: Company & Role */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-surface-200 dark:border-white/[0.08]">
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl p-1.5 bg-surface-50 dark:bg-white/[0.06] border border-surface-300/80 dark:border-white/[0.1] shadow-sm flex items-center justify-center shrink-0">
                  <img
                    className="w-full h-full object-contain rounded-lg"
                    src={exp.companyLogo || t2bicon}
                    alt={`${exp.company} logo`}
                    loading="lazy"
                    width="48"
                    height="48"
                    onError={(e) => {
                      e.currentTarget.src = t2bicon;
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-surface-950 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors leading-snug">
                    {exp.role}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-primary-600 dark:text-primary-400 mt-0.5 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 opacity-70" />
                    <span>{exp.company}</span>
                  </p>
                </div>
              </div>

              {exp.duration && (
                <div className="self-start sm:self-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-surface-200/80 dark:bg-white/[0.05] text-surface-700 dark:text-surface-300 border border-surface-300/60 dark:border-white/[0.08] whitespace-nowrap shadow-sm">
                    <Calendar className="w-3 h-3 text-accent-500" />
                    {exp.duration}
                  </span>
                </div>
              )}
            </div>

            {/* Bullet Points */}
            {exp.points && exp.points.length > 0 ? (
              <ul className="mt-5 space-y-3 text-xs sm:text-sm md:text-base text-surface-700 dark:text-surface-300">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3">
                    <span className="text-primary-600 dark:text-primary-400 mt-1 shrink-0 font-bold leading-none select-none">
                      ▹
                    </span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            ) : exp.description ? (
              <p className="mt-5 text-xs sm:text-sm md:text-base text-surface-700 dark:text-surface-300 leading-relaxed">
                {exp.description}
              </p>
            ) : null}

            {/* Skills Badges */}
            {exp.skills && exp.skills.length > 0 && (
              <div className="mt-6 pt-4 border-t border-surface-200 dark:border-white/[0.08] flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-surface-500 dark:text-surface-400 mr-1">
                  Skills:
                </span>
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-block px-2.5 py-1 text-xs font-mono font-medium rounded-lg bg-surface-200/70 dark:bg-surface-800/80 text-surface-800 dark:text-surface-200 border border-surface-300/60 dark:border-white/[0.06]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
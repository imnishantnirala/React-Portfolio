import { GraduationCap, Award, Calendar } from 'lucide-react';
import { educationData, certificationsData } from '../data/constants';

const EducationCard = ({ data }) => (
  <article className="flex flex-col justify-between bg-surface-100/80 dark:bg-surface-900/60 backdrop-blur-md border border-surface-200/80 dark:border-white/[0.08] rounded-2xl p-6 sm:p-7 shadow-sm dark:shadow-glass-dark hover:border-primary-500/40 dark:hover:border-primary-400/35 transition-all duration-300 hover:-translate-y-1">
    <div>
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl p-1.5 bg-surface-50 dark:bg-white/[0.06] border border-surface-300/80 dark:border-white/[0.1] shadow-sm flex items-center justify-center shrink-0">
          <img
            className="w-full h-full object-contain rounded-lg"
            src={data.logo}
            alt={data.institution}
            loading="lazy"
            width="48"
            height="48"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
        <div className="min-w-0">
          <h3 className="text-base sm:text-lg font-bold text-surface-950 dark:text-white leading-snug">
            {data.institution}
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-primary-600 dark:text-primary-400 mt-1">
            {data.degree}
          </p>
          {data.period && (
            <p className="text-xs font-mono text-surface-500 dark:text-surface-400 mt-1 flex items-center gap-1.5">
              <Calendar className="w-3 h-3 text-accent-500" />
              <span>{data.period}</span>
            </p>
          )}
        </div>
      </div>

      {data.description && (
        <p className="mt-4 pt-4 border-t border-surface-200 dark:border-white/[0.08] text-xs sm:text-sm text-surface-600 dark:text-surface-400 leading-relaxed">
          {data.description}
        </p>
      )}
    </div>
  </article>
);

const Education = () => (
  <section
    id="Education"
    className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    aria-label="Education and Certifications"
  >
    {/* Section Header */}
    <div className="text-center mb-12 sm:mb-16">
      <div className="inline-flex items-center gap-1.5 px-3.5 py-1 mb-3.5 rounded-full bg-accent-600/10 dark:bg-accent-500/15 border border-accent-600/20 dark:border-accent-400/25 text-accent-700 dark:text-accent-300 text-xs font-semibold tracking-wider uppercase font-mono">
        <GraduationCap className="w-3.5 h-3.5" />
        <span>Academic &amp; Credentials</span>
      </div>
      <h2 className="text-fluid-h2 font-extrabold text-surface-950 dark:text-white tracking-tight">
        Education &amp; Certifications
      </h2>
      <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto leading-relaxed readable-measure">
        My formal academic foundation in Computer Applications and industry-recognized certifications.
      </p>
    </div>

    {/* Degrees Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
      {educationData.map((data) => (
        <EducationCard key={data.id} data={data} />
      ))}
    </div>

    {/* Certifications Section */}
    {certificationsData && certificationsData.length > 0 && (
      <div className="mt-14 sm:mt-20 max-w-5xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-bold text-center text-surface-950 dark:text-white mb-8 flex items-center justify-center gap-2">
          <Award className="w-6 h-6 text-primary-500" />
          <span>Certifications &amp; Professional Training</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {certificationsData.map((cert, index) => (
            <article
              key={index}
              className="bg-surface-100/80 dark:bg-surface-900/60 backdrop-blur-md border border-surface-200/80 dark:border-white/[0.08] rounded-2xl p-6 shadow-sm dark:shadow-glass-dark hover:border-primary-500/40 dark:hover:border-primary-400/35 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-surface-950 dark:text-white">
                    {cert.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-primary-600 dark:text-primary-400 mt-0.5">
                    {cert.issuer}
                  </p>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-primary-600/10 dark:bg-primary-500/15 text-primary-700 dark:text-primary-300 border border-primary-600/20 dark:border-primary-400/25 shrink-0">
                  {cert.year}
                </span>
              </div>
              <p className="mt-3.5 pt-3.5 border-t border-surface-200 dark:border-white/[0.08] text-xs sm:text-sm text-surface-600 dark:text-surface-400 leading-relaxed">
                {cert.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    )}
  </section>
);

export default Education;

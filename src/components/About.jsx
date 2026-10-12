import { ExternalLink, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { aboutData } from '../data/constants';

function About() {
  const {
    aboutText,
    title,
    profile,
    secondaryProfile,
    buttonText,
    resumeLink,
    profileImage,
    location,
    experienceYears,
    github
  } = aboutData;

  return (
    <section
      id="About"
      className="relative pt-28 sm:pt-32 md:pt-40 lg:pt-44 pb-16 sm:pb-20 md:pb-28 overflow-hidden"
      aria-label="Introduction and Hero"
    >
      {/* Ambient Radial Backdrops (Linear / Stripe aesthetic) */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 -translate-y-12 w-[340px] sm:w-[600px] lg:w-[800px] h-[340px] sm:h-[500px] bg-gradient-to-tr from-primary-600/15 via-accent-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -right-24 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Hero Information (7 cols on large desktop) */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-6 rounded-full bg-surface-200/80 dark:bg-white/[0.05] border border-surface-300/80 dark:border-white/[0.08] shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-surface-800 dark:text-surface-200 tracking-wide">
                Available for Remote / Full-time
              </span>
              {experienceYears && (
                <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded-full bg-primary-600/15 text-primary-700 dark:bg-primary-500/20 dark:text-primary-300">
                  {experienceYears} Exp
                </span>
              )}
            </div>

            {/* Main Single H1 */}
            <h1 className="text-fluid-h1 font-extrabold text-surface-950 dark:text-white tracking-tight leading-[1.1]">
              {title}
            </h1>

            {/* Profile H2 & Tagline */}
            <h2 className="mt-3 text-lg sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 dark:from-primary-400 dark:via-accent-300 dark:to-accent-400 bg-clip-text text-transparent">
              {profile}
            </h2>

            {/* Secondary Profile & Location Meta */}
            <div className="mt-2.5 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-surface-600 dark:text-surface-400">
              {secondaryProfile && (
                <span className="font-medium text-surface-700 dark:text-surface-300">
                  {secondaryProfile}
                </span>
              )}
              {location && (
                <>
                  <span className="hidden sm:inline text-surface-300 dark:text-surface-700">•</span>
                  <span className="inline-flex items-center gap-1 font-medium text-surface-500 dark:text-surface-400">
                    <MapPin className="w-3.5 h-3.5 text-accent-500" />
                    {location}
                  </span>
                </>
              )}
            </div>

            {/* Bio Paragraph with 60-75ch line length for maximum readability */}
            <p className="mt-6 text-sm sm:text-base lg:text-lg text-surface-700 dark:text-surface-300 leading-relaxed readable-measure text-center lg:text-left">
              {aboutText}
            </p>

            {/* Primary Action Buttons (Fitts's Law large touch targets) */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3.5 w-full sm:w-auto">
              {/* Check Resume CTA */}
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 min-h-[48px] focus-visible:ring-2 focus-visible:ring-primary-500"
              >
                <span>{buttonText}</span>
                <ExternalLink className="w-4 h-4 opacity-90" />
              </a>

              {/* GitHub Button */}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-surface-800 dark:text-surface-200 bg-surface-200/80 dark:bg-white/[0.06] hover:bg-surface-300/80 dark:hover:bg-white/[0.12] border border-surface-300 dark:border-white/[0.08] hover:border-surface-400 dark:hover:border-white/[0.18] transition-all duration-200 min-h-[48px] focus-visible:ring-2 focus-visible:ring-primary-500"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              )}

              {/* Contact Me Anchor */}
              <a
                href="#Contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-950/40 hover:bg-primary-100 dark:hover:bg-primary-900/40 border border-primary-200 dark:border-primary-800/40 transition-all duration-200 min-h-[48px] focus-visible:ring-2 focus-visible:ring-primary-500"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Profile Visual (5 cols on large desktop) */}
          <div className="lg:col-span-5 flex justify-center order-first lg:order-last">
            <div className="relative group">
              {/* Multilayered ambient backlight aura */}
              <div
                className="absolute -inset-2 sm:-inset-4 bg-gradient-to-tr from-primary-600/30 via-accent-500/20 to-primary-400/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden="true"
              />

              {/* Profile Card Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl p-2 bg-gradient-to-b from-white/80 via-white/40 to-white/10 dark:from-white/10 dark:via-white/[0.05] dark:to-transparent border border-surface-300/70 dark:border-white/[0.1] shadow-2xl backdrop-blur-xl">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-surface-900 relative">
                  <img
                    src={profileImage}
                    alt="Nishant Nirala"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                    width="384"
                    height="384"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-950/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Experience Badge */}
                {experienceYears && (
                  <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 px-4 py-2 rounded-2xl bg-surface-50/95 dark:bg-surface-900/95 border border-surface-200 dark:border-white/[0.1] shadow-xl backdrop-blur-md flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-primary-600/15 dark:bg-primary-500/20 flex items-center justify-center text-primary-600 dark:text-primary-400">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-mono text-xs font-bold text-surface-950 dark:text-white leading-tight">
                        {experienceYears}
                      </div>
                      <div className="text-[10px] text-surface-500 dark:text-surface-400 font-medium leading-none">
                        Engineering Exp
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;

import React from 'react';
import { aboutData } from '../data/constants';

function About() {
  const {
    aboutText,
    title,
    profile,
    buttonText,
    buttonClasses,
    resumeLink,
    profileImage,
    location,
    experienceYears,
    github,
    linkedin
  } = aboutData;

  return (
    <section className="relative pt-24 sm:pt-28 md:pt-36 pb-12 sm:pb-16 md:pb-20 overflow-hidden" id="About">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 md:w-[500px] h-72 sm:h-96 md:h-[500px] bg-gradient-to-tr from-purple-600/20 to-[#c5a375]/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="w-full md:w-7/12 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-4 rounded-full bg-purple-950/60 border border-purple-800/40 text-purple-300 text-xs sm:text-sm font-medium tracking-wide">
              <span>👋</span>
              <span>Full Stack &amp; Backend Engineer</span>
              {experienceYears && (
                <span className="ml-1 px-2 py-0.2 rounded-full bg-purple-800/60 text-[11px] text-purple-200">
                  {experienceYears} Exp
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              {title}
            </h1>

            <h2 className="mt-3 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              {profile}
            </h2>

            {location && (
              <p className="mt-2 text-xs sm:text-sm text-gray-400 flex items-center justify-center md:justify-start gap-1.5">
                <span>📍</span>
                <span>{location}</span>
                <span className="text-gray-600">•</span>
                <span className="text-emerald-400">Available for Remote / Full-time</span>
              </p>
            )}

            <p className="mt-5 text-sm sm:text-base md:text-lg text-gray-300/90 leading-relaxed max-w-2xl mx-auto md:mx-0">
              {aboutText}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a href={resumeLink} target="_blank" rel="noopener noreferrer">
                <button type="button" className={buttonClasses}>
                  <span className="flex items-center gap-2">
                    {buttonText}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </button>
              </a>

              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl text-sm sm:text-base font-medium text-gray-200 bg-gray-900/80 hover:bg-gray-800 border border-gray-700/80 hover:border-gray-600 transition-all duration-200 hover:text-white flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>GitHub</span>
                </a>
              )}

              <a href="#Contact">
                <button
                  type="button"
                  className="px-5 py-3 rounded-xl text-sm sm:text-base font-medium text-gray-300 hover:text-white bg-gray-900/60 hover:bg-gray-800/80 border border-gray-800 hover:border-gray-700 transition-all duration-200"
                >
                  Contact Me
                </button>
              </a>
            </div>
          </div>

          {/* Profile Image with modern glowing frame */}
          <div className="w-full md:w-5/12 flex justify-center">
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-[#c5a375] rounded-full blur-xl opacity-60 group-hover:opacity-90 transition duration-500" />

              <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-gray-800/80 shadow-2xl bg-gray-900">
                <img
                  src={profileImage}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  alt="Nishant Nirala"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

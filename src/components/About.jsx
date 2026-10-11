import React from 'react';
import { aboutData } from '../data/constants';

function About() {
  const { aboutText, title, profile, buttonText, buttonClasses, resumeLink, imageClasses, profileImage } = aboutData;

  return (
    <section className="relative pt-24 sm:pt-28 md:pt-36 pb-12 sm:pb-16 md:pb-20 overflow-hidden" id="About">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 md:w-[500px] h-72 sm:h-96 md:h-[500px] bg-gradient-to-tr from-purple-600/20 to-blue-600/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="w-full md:w-7/12 text-center md:text-left">
            <div className="inline-block px-3.5 py-1.5 mb-4 rounded-full bg-purple-950/60 border border-purple-800/40 text-purple-300 text-xs sm:text-sm font-medium tracking-wide">
              👋 Welcome to my portfolio
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              {title}
            </h1>

            <h2 className="mt-3 text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              {profile}
            </h2>

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

              <a href="#Contact">
                <button
                  type="button"
                  className="px-6 py-3 rounded-xl text-sm sm:text-base font-medium text-gray-200 bg-gray-900/80 hover:bg-gray-800 border border-gray-700/80 hover:border-gray-600 transition-all duration-200 hover:text-white"
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
              <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-xl opacity-60 group-hover:opacity-90 transition duration-500" />
              
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-gray-800/80 shadow-2xl bg-gray-900">
                <img
                  src={profileImage}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  alt="Profile"
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

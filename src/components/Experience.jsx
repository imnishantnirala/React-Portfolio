import React from 'react';
import t2bicon from '../assets/t2b-icon.png';
import { experiences } from '../data/constants';

function Experience() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="Experience">
      <div className="text-center mb-10 sm:mb-14">
        <div className="inline-block px-3.5 py-1 mb-3 rounded-full bg-purple-950/60 border border-purple-800/40 text-purple-300 text-xs font-semibold tracking-wide uppercase">
          Career Journey
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Work Experience
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
          Over 3.5+ years of engineering scalable web applications, enterprise REST APIs, and digital media solutions.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-5 sm:p-7 md:p-8 shadow-xl hover:border-purple-500/40 hover:shadow-purple-500/10 transition-all duration-300"
          >
            {/* Header: Company & Role */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-800/80">
              <div className="flex items-center gap-3 sm:gap-4">
                <img
                  className="h-12 w-12 sm:h-14 sm:w-14 object-contain rounded-xl p-1 bg-white/10 border border-gray-700 shrink-0"
                  src={exp.companyLogo || t2bicon}
                  alt={`${exp.company} logo`}
                  onError={(e) => {
                    e.currentTarget.src = t2bicon;
                  }}
                />
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug">
                    {exp.role}
                  </h3>
                  <p className="text-sm sm:text-base text-purple-400 font-medium">
                    {exp.company}
                  </p>
                </div>
              </div>

              {exp.duration && (
                <div className="self-start sm:self-center">
                  <span className="inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-purple-950/60 text-purple-300 border border-purple-800/40 whitespace-nowrap">
                    {exp.duration}
                  </span>
                </div>
              )}
            </div>

            {/* Bullet Points or Description */}
            {exp.points && exp.points.length > 0 ? (
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm md:text-base text-gray-300">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <span className="text-purple-400 mt-0.5 shrink-0 font-bold">▹</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            ) : exp.description ? (
              <p className="mt-4 text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
                {exp.description}
              </p>
            ) : null}

            {/* Skills Badges */}
            {exp.skills && exp.skills.length > 0 && (
              <div className="mt-5 pt-4 border-t border-gray-800/70 flex flex-wrap items-center gap-2">
                <span className="text-xs sm:text-sm font-semibold text-gray-400 mr-1">
                  Skills:
                </span>
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-block px-2.5 py-1 text-xs font-medium rounded-lg bg-gray-800 text-gray-300 border border-gray-700/60"
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
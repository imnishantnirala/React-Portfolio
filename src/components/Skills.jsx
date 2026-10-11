import React from 'react';
import { skillsData } from '../data/constants';

function Skills() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="Skills">
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-block px-3.5 py-1 mb-3 rounded-full bg-purple-950/60 border border-purple-800/40 text-purple-300 text-xs font-semibold tracking-wide uppercase">
          Technical Expertise
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Skills &amp; Technologies
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
          Languages, frameworks, databases, modern AI workflows, and post-production tools I use to deliver end-to-end digital solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {skillsData.map((category) => {
          const isAiCategory = category.title.includes('AI');
          return (
            <div
              key={category.title}
              className={`flex flex-col bg-gray-900/70 backdrop-blur-sm border rounded-2xl p-6 sm:p-7 shadow-xl transition-all duration-300 group hover:-translate-y-1 ${isAiCategory
                ? 'border-purple-500/50 hover:border-purple-400 shadow-purple-500/10 hover:shadow-purple-500/20 ring-1 ring-purple-500/20'
                : 'border-gray-800/90 hover:border-purple-500/40 hover:shadow-purple-500/10'
                }`}
            >
              <div className="flex items-center justify-center gap-2 pb-4 border-b border-gray-800/80 mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-center text-white group-hover:text-purple-300 transition-colors">
                  {category.title}
                </h3>
                {isAiCategory && (
                  <span className="text-[8px] font-bold tracking-wider px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-600 to-gray-600 text-white shadow-sm">
                    AI_Tools
                  </span>
                )}
              </div>

              <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 bg-gray-800/80 hover:bg-gray-750 border border-gray-700/60 hover:border-purple-400/50 text-gray-200 rounded-xl text-xs sm:text-sm font-medium shadow-sm transition-all duration-200 hover:scale-105 cursor-default"
                  >
                    <img
                      className="h-5 w-5 sm:h-6 sm:w-6 object-contain shrink-0"
                      src={skill.image}
                      alt={skill.name}
                      loading="lazy"
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

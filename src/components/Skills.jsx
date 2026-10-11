import React from 'react';
import { skillsData } from '../data/constants';

function Skills() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="Skills">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Skills
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
          Here are the technologies and tools I have been working with to build scalable web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {skillsData.map((category) => (
          <div
            key={category.title}
            className="flex flex-col bg-gray-900/70 backdrop-blur-sm border border-gray-800/90 rounded-2xl p-6 sm:p-7 shadow-xl hover:border-purple-500/40 hover:shadow-purple-500/10 transition-all duration-300 group"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-center text-white pb-4 border-b border-gray-800/80 mb-6 group-hover:text-purple-300 transition-colors">
              {category.title}
            </h3>

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
        ))}
      </div>
    </section>
  );
}

export default Skills;

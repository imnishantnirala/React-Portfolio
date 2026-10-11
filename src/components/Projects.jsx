import React from 'react';
import { projects } from '../data/constants';

function Projects() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="Projects">
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Projects
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
          A showcase of my recent work, from enterprise platforms to full-stack web applications and APIs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group flex flex-col bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-xl hover:border-purple-500/40 hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Project Image */}
            <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gray-950">
              <img
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                src={project.image}
                alt={project.title}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
            </div>

            {/* Project Content */}
            <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-1">
                  {project.title}
                </h3>

                <p className="text-xs text-purple-400/90 font-medium mt-1 mb-3">
                  {project.date}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="inline-block text-[11px] sm:text-xs font-medium px-2.5 py-0.5 rounded-md bg-purple-950/60 text-purple-300 border border-purple-800/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-4">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

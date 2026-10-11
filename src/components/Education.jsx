import React from 'react';
import { educationData } from '../data/constants';

const EducationCard = ({ data }) => (
  <div className="flex flex-col justify-between bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-5 sm:p-7 shadow-xl hover:border-blue-500/40 hover:shadow-blue-500/10 transition-all duration-300">
    <div>
      <div className="flex items-start gap-3 sm:gap-4">
        <img
          className="h-12 w-12 sm:h-14 sm:w-14 object-contain rounded-xl p-1 bg-white/10 border border-gray-700 shrink-0"
          src={data.logo}
          alt={data.institution}
          loading="lazy"
        />
        <div className="min-w-0">
          <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
            {data.institution}
          </h3>
          <p className="text-xs sm:text-sm text-blue-400 font-medium mt-0.5">
            {data.degree}
          </p>
          {data.period && (
            <p className="text-xs text-gray-400 mt-1">
              {data.period}
            </p>
          )}
        </div>
      </div>

      {data.description && (
        <p className="mt-4 pt-4 border-t border-gray-800/70 text-xs sm:text-sm text-gray-300 leading-relaxed">
          {data.description}
        </p>
      )}
    </div>
  </div>
);

const Education = () => (
  <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="Education">
    <div className="text-center mb-10 sm:mb-14">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
        Education
      </h2>
      <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
        My educational background and academic foundation.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
      {educationData.map((data) => (
        <EducationCard key={data.id} data={data} />
      ))}
    </div>
  </section>
);

export default Education;

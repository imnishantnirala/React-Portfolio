import React from 'react';
import { educationData, certificationsData } from '../data/constants';

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
      <div className="inline-block px-3.5 py-1 mb-3 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-300 text-xs font-semibold tracking-wide uppercase">
        Academic &amp; Credentials
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
        Education &amp; Certifications
      </h2>
      <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
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
      <div className="mt-12 sm:mt-16 max-w-5xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-bold text-center text-white mb-6 flex items-center justify-center gap-2">
          <span>📜</span> Certifications &amp; Professional Training
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-900/60 backdrop-blur-sm border border-gray-800/90 rounded-2xl p-5 sm:p-6 shadow-lg hover:border-purple-500/40 hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    {cert.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-purple-400 font-medium mt-0.5">
                    {cert.issuer}
                  </p>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-950/70 text-purple-300 border border-purple-800/50 shrink-0">
                  {cert.year}
                </span>
              </div>
              <p className="mt-3 pt-3 border-t border-gray-800/70 text-xs sm:text-sm text-gray-300/90 leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    )}
  </section>
);

export default Education;

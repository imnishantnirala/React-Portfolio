import React from 'react';
import t2bicon from '../assets/t2b-icon.png';
import { experiences } from '../data/constants';

function Experience() {

  return (
    <div className="container mx-auto pt-11" id="Experience">
      <h1 className="text-center text-4xl font-bold text-white">Experience</h1>
      <p className="text-center text-xl text-gray-300 mt-4">My work experience as a software engineer and working on different companies and projects.</p>

      <div className="flex justify-center mt-12 space-x-10">
        {experiences.map((exp, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-5">
            <div className={` h-auto flex flex-col items-start justify-start p-8 text-center ${index === 0 ? 'bg-white dark:bg-gray-900 rounded-xl shadow-xl shadow-slate-900 border-2 border-blue-950 mb-10' : 'ml-[-40px] mb-10'}`}>
              <figcaption className="flex items-center justify-center">
                <img className={`rounded-lg ${index === 0 ? 'h-9' : 'bg-black rounded-full h-11 w-11 border-4 border-white'}`} src={index === 0 ? exp.companyLogo : t2bicon} alt="company logo" />
                <div className="space-y-1 font-medium dark:text-white text-left rtl:text-right ml-3">
                  <div className="text-lg text-gray-900 dark:text-white">{exp.role}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{exp.company}</div>
                  {index === 0 && <div className='text-xs text-gray-500 dark:text-gray-400'>{exp.duration}</div>}
                </div>
              </figcaption>
              {index === 0 && (
                <blockquote className="max-w-2xl mx-auto mt-4 mb-4 text-gray-700 dark:text-gray-400">
                  <p className="my-4 text-left">{exp.description}</p>
                  <p>
                    <span className='font-bold'>Skills:</span> {exp.skills.join(' • ')}
                  </p>
                </blockquote>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
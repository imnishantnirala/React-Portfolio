import React from 'react';

import { skillsData } from '../data/constants';

function Skills() {
  return (
    <div className='container mx-auto py-12 px-4' id='Skills'>
      <h1 className='text-center text-4xl font-bold text-white mb-6'>Skills</h1>
      <p className='text-center text-xl text-gray-400 mb-10'>
        Here are some of my skills on which I have been working on for the past 3 years.
      </p>
      <div className='flex flex-wrap justify-center gap-8'>
        {skillsData.map((category) => (
          <div
            key={category.title}
            className='max-w-sm w-full bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105'
          >
            <h5 className='text-center text-2xl font-semibold text-gray-800 dark:text-gray-400 py-4 dark:bg-gray-800'>
              {category.title}
            </h5>
            <div className='p-6 flex flex-wrap justify-center'>
              {category.skills.map((skill) => (
                <button
                  key={skill.name}
                  type='button'
                  className='m-2 flex items-center gap-2 p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition'
                >
                  <img className='h-6 w-6' src={skill.image} alt={skill.name} />
                  {skill.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;

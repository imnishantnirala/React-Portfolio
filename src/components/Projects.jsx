import React from 'react';
import { projects } from '../data/constants';

function Projects() {

  return (
    <div className='container mx-auto pt-11 px-4' id='Projects'>
      <h1 className='text-center text-[35px] font-bold text-white'> Projects </h1>
      <p className='text-center text-[20px] text-gray-300 mt-2'> I have worked on a wide range of projects. From web apps to web apis. Here are some of my projects. </p>

      <div className='flex flex-wrap justify-center mt-9 gap-7'>
        {projects.map((project, index) => (
          <div key={index} className='max-w-sm rounded-xl shadow-lg dark:bg-gray-900 p-3 transition-transform transform hover:scale-105 hover:shadow-2xl'>
            <a href="#">
              <img className='rounded-t-xl' src={project.image} alt={project.title} />
            </a>
            <div className='p-5'>
              <a href="#">
                <h5 className='text-2xl font-bold tracking-tight text-gray-100'>{project.title}</h5>
                <p className='text-[10px] text-gray-400 mb-2'>{project.date}</p>
              </a>
              <div className='flex flex-wrap gap-2 mb-2'>
                {project.tags.map((tag, index) => (
                  <div key={index} className='bg-blue-700 text-gray-100 font-bold rounded-xl pl-2 pr-2 p-1 text-[12px]'>
                    {tag}
                  </div>
                ))}
              </div>
              <p className='mb-3 font-normal text-gray-400'>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

import React from 'react';
import { educationData } from '../data/constants';

const Card = ({ data }) => (
  <figure className={`h-[350px] w-full sm:w-[500px] flex flex-col items-start justify-start p-4 sm:p-8 text-center bg-white dark:bg-gray-900 rounded-xl shadow-xl border-2 border-blue-950 mb-6 sm:mb-10 ${data.position === 'left' ? 'left-card' : 'right-card'}`}>
    <figcaption className="flex items-center justify-center">
      <img className="rounded-lg h-9" src={data.logo} alt="profile picture" />
      <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
        <div>{data.institution}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400 pb-1">{data.degree}</div>
        {data.period && <div className='text-[10px] text-gray-500 dark:text-gray-400'>{data.period}</div>}
      </div>
    </figcaption>
    {data.description && <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400"><p className="my-4 text-left">{data.description}</p></blockquote>}
  </figure>
);

const Education = () => (
  <div className='container mx-auto pt-11' id='Education'>
    <h1 className='text-center text-2xl sm:text-[35px] font-bold text-white'> Education </h1>
    <p className='text-center text-lg sm:text-[20px] text-gray-400'> My education has been a journey of self-discovery and growth. My educational details are as follows. </p>
    <div className='flex flex-wrap justify-center mt-6 sm:mt-9 gap-4 sm:gap-5 p-11'>
      {educationData.map(data => <Card key={data.id} data={data} />)}
    </div>
  </div>
);

export default Education;

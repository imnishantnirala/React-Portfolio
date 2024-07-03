import React from 'react';
import profileImg from '../assets/1673502997607.jpeg';
import { aboutData } from '../data/constants';

function About() {
  const { aboutText, title, profile, buttonText, buttonClasses, resumeLink, imageClasses} = aboutData;

  return (
    <div className='relative container mx-auto px-4 py-10' id='About'>
      <div className='absolute inset-0 md:hidden opacity-10'>
        <img src={profileImg} className={imageClasses +  'object-cover mt-20'} alt='Background' />
      </div>
      <div className='relative flex flex-col md:flex-row justify-center p-5 bg-opacity-90 md:bg-opacity-100'>
        <div className='md:w-[700px] p-6 text-[20px] md:text-[25px] mt-10 md:mt-20'>
          <h1 className='text-[30px] md:text-[40px] font-bold'>{title}</h1>
          <h1>{profile}</h1>
          <h3 className='pt-5'>{aboutText}</h3>
          <div className='mt-5'>
            <a href={resumeLink} target='_blank' rel='noopener noreferrer'>
              <button type="button" className={buttonClasses}>
                {buttonText}
              </button>
            </a>
          </div>
        </div>
        <div className='hidden md:block img w-full md:w-[400px] p-5 mt-10 md:mt-20'>
          <img src={profileImg} className={imageClasses +  ''} alt='Profile' />
        </div>
      </div>
    </div>
  );
}

export default About;

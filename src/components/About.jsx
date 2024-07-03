import React from 'react';
import profileImg from '../assets/1673502997607.jpeg';
import { aboutData } from '../data/constants';

function About() {
  const { aboutText, title, profile, buttonText, buttonClasses, profileImage, imageClasses, resumeLink } = aboutData;

  return (
    <div className='container mx-auto' id='About'>
      <div className='flex justify-center p-5'>
        <div className='w-[700px] p-6 text-[25px] mt-20'>
          <h1 className='text-[40px] font-bold'>{title}</h1>
          <h1>{profile}</h1>
          <h3 className='pt-5'>{aboutText}</h3>
          <div className='mt-5'>
            <a href={resumeLink} target='_blank'>
              <button type="button" className={buttonClasses}>
                {buttonText}
              </button>
            </a>
          </div>
        </div>
        <div className='img w-[400px] p-5 mt-20'>
          <img src={profileImg} className={imageClasses} />
        </div>
      </div>
    </div>
  );
}

export default About;
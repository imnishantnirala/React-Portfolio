import React from 'react';
import { headerData } from '../data/constants';
import logoImg from '../assets/profile-logo.png';

const MenuItem = ({ item }) => (
  <li>
    <a href={'#'+item} className="me-4 hover:text-violet-700 md:me-6">{item}</a>
  </li>
);

function Header() {
  const { title, menuList, buttonText, buttonClasses, buttonSpanClasses, link } = headerData;
  const { firstName, lastName } = title;

  return (
    <div className='w-full h-[70px] fixed z-10'>
      <div className='container mx-auto h-[70px] p-5 bg-black'>
        <div className='flex justify-between'>
          <div className='title'>
            {/* <h2 className='font-bold'>
              <span className='font-extrabold'>&lt;</span> 
              {firstName} <span> / </span> {lastName} 

              <span className='font-extrabold'>&gt;</span>
            </h2> */}

            <img src={logoImg} className=' h-20 mt-[-25px]' />
          </div>

          <div className='menu'>
            <ul className="flex flex-wrap items-center justify-center text-gray-900 dark:text-white">
              {menuList.map((item, index) => (
                <MenuItem key={index} item={item} />
              ))}
            </ul>
          </div>  

          <div className='header-button'>
          <a href={link} target='_blank'>
            <button className={buttonClasses}>
              <span className={buttonSpanClasses}>
                {buttonText}
              </span>
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

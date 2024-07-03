import React, { useState } from 'react';
import { headerData } from '../data/constants';
import logoImg from '../assets/profile-logo.png';

const MenuItem = ({ item }) => (
  <li>
    <a href={'#' + item} className="me-4 hover:text-violet-700 md:me-6">{item}</a>
  </li>
);

function Header() {
  const { title, menuList, buttonText, buttonClasses, buttonSpanClasses, link } = headerData;
  const { firstName, lastName } = title;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='w-full h-[70px] fixed z-10'>
      <div className='container mx-auto h-[70px] p-5 bg-black'>
        <div className='flex justify-between items-center'>
          <div className='title flex items-center'>
            <img src={logoImg} className='h-10 mt-[-15px]' alt="Profile Logo" />
          </div>

          <div className='menu hidden md:block'>
            <ul className="flex items-center justify-center text-white">
              {menuList.map((item, index) => (
                <MenuItem key={index} item={item} />
              ))}
            </ul>
          </div>

          <div className='header-button hidden md:block'>
            <a href={link} target='_blank' rel='noopener noreferrer'>
              <button className={buttonClasses}>
                <span className={buttonSpanClasses}>
                  {buttonText}
                </span>
              </button>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className='md:hidden'>
            <button onClick={toggleMenu} className="text-white">
              {menuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className='menu md:hidden bg-black'>
            <ul className="flex flex-col items-center justify-center text-white">
              {menuList.map((item, index) => (
                <MenuItem key={index} item={item} />
              ))}
              <div className='header-button mt-4 items-center'>
                <a href={link} target='_blank' rel='noopener noreferrer'>
                  <button className={buttonClasses}>
                    <span className={buttonSpanClasses}>
                      {buttonText}
                    </span>
                  </button>
                </a>
              </div>
            </ul>

           
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;

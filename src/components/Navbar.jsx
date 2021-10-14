import React, { useState } from 'react';
import { IoLogoFoursquare } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import Burger from './Burger';
import NavbarMenu from './NavbarMenu';
import { BsTwitter, BsGithub } from 'react-icons/bs';
import ExtensionDropdown from './ExtenstionDropdown';
import { BiChevronDown } from 'react-icons/bi';
const Navbar = () => {
  const [open, setOpen] = useState(false);

  /* md:max-w-screen-lg */
  return (
    <header className='h-14  sticky mx-auto container flex justify-between items-center px-2 lg:px-40 sm:px-0 top-0 z-50 bg-black w-full md:mt-4 opacity-90'>
      <Link to='/' className='w-1/6'>
        <div className='flex items-center'>
          <IoLogoFoursquare
            className='mr-2 text-red-500 min-w-min'
            size='2rem'
          />
          <p className='text-base'>Raycast</p>
        </div>
      </Link>

      <nav className=' w-4/6 hidden md:block xl:px-16 '>
        <ul className='flex items-center justify-between h-full'>
          <li className='text-md text-gray-400 hover:text-gray-200 hover:cursor-pointer  px-2'>
            Features
          </li>
          <ExtensionDropdown>
            <li className='text-md text-gray-400 flex items-center hover:text-gray-200 hover:cursor-pointer px-2'>
              Extensions <BiChevronDown />
            </li>
          </ExtensionDropdown>
          <li className='text-md text-gray-400 hover:text-gray-200 hover:cursor-pointer px-2'>
            Manifesto
          </li>
          <li className='text-md text-gray-400 hover:text-gray-200 hover:cursor-pointer px-2'>
            Changelog
          </li>
          <li className='text-md text-gray-400 hover:text-gray-200 hover:cursor-pointer px-2'>
            Blog
          </li>
          <li className='text-md text-gray-400 hover:text-gray-200 hover:cursor-pointer px-2'>
            Jobs
          </li>
        </ul>
      </nav>

      <div className='hidden w-1/6 justify-end md:flex'>
        <BsTwitter
          size='1.5rem'
          className='hover:text-gray-400 hover:cursor-pointer'
        />
        <BsGithub
          size='1.5rem'
          className='ml-4 hover:text-gray-400 hover:cursor-pointer'
        />
      </div>

      {/* MOBILE  */}
      <Burger
        open={open}
        size='2rem'
        onClick={() => setOpen(!open)}
        className='md:!hidden'
      />

      {open ? <NavbarMenu /> : ''}
    </header>
  );
};

export default Navbar;

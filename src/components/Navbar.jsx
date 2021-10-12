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

  return (
    <header className='h-14  sticky mx-auto container flex justify-between items-center px-2 top-0 z-50 bg-black md:max-w-screen-lg md:mt-4'>
      <Link to='/' className='w-1/6'>
        <div className='flex items-center'>
          <IoLogoFoursquare
            className='mr-2 text-red-500 min-w-min'
            size='2rem'
          />
          <p className='text-base'>Raycast</p>
        </div>
      </Link>

      <nav className=' w-4/6 px-20 hidden md:block '>
        <ul className='flex items-center justify-between h-full'>
          <li className='text-md text-gray-400'>Features</li>
          <ExtensionDropdown>
            <li className='text-md text-gray-400 flex items-center'>
              Extensions <BiChevronDown />
            </li>
          </ExtensionDropdown>
          <li className='text-md text-gray-400'>Manifesto</li>
          <li className='text-md text-gray-400'>Changelog</li>
          <li className='text-md text-gray-400'>Blog</li>
          <li className='text-md text-gray-400'>Jobs</li>
        </ul>
      </nav>

      <div className='hidden w-1/6 justify-end md:flex'>
        <BsTwitter size='1.5rem' />
        <BsGithub size='1.5rem' className='ml-4' />
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

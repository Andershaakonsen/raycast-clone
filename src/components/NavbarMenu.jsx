import React from 'react';
import { BsTwitter, BsGithub } from 'react-icons/bs';

const NavbarMenu = () => {
  return (
    <nav className='absolute top-14 left-0 z-50 w-full md:hidden'>
      <ul className='pt-10 pb-10'>
        <li className='mb-4 ml-6 text-xl text-gray-400'>Extensions</li>
        <li className='mb-4 ml-6 text-xl text-gray-400'>Features</li>
        <li className='mb-4 ml-6 text-xl text-gray-400'>Manifesto</li>
        <li className='mb-4 ml-6 text-xl text-gray-400'>Changelog</li>
        <li className='mb-4 ml-6 text-xl text-gray-400'>Blog</li>
        <li className='mb-4 ml-6 text-xl text-gray-400'>Jobs</li>
      </ul>
      <div className='flex justify-center w-full'>
        <div className='border border-gray-500 border-l-0 w-1/2 flex flex-col items-center py-4'>
          <BsTwitter size='1.2rem' />
          <p className='text-base text-gray-400'>Follow on Twitter</p>
        </div>
        <div className='border border-gray-500 w-1/2 flex flex-col items-center py-4 border-r-0 border-l-0'>
          <BsGithub size='1.2rem' />
          <p className='text-base text-gray-400'>Contribute on GitHub</p>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMenu;

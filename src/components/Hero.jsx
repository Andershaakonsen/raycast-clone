import React, { useState } from 'react';

const Hero = () => {
  return (
    <div className='mt-40 flex flex-col items-center h-screen'>
      <div className='flex flex-col items-center max-w-3xl '>
        <h1 className='text-headline text-center'>
          Level up your productivity{' '}
        </h1>
        <p className='mt-8 text-xl text-gray-500 text-center'>
          Raycast lets you control your tools with a few keystrokes. <br />
          It’s designed to keep you focused.
        </p>
        <div className='w-max'>
          <button className='border-none px-14 py-2 rounded-sm text-lg text-gray-600 mt-12 bg-gray-300 hover:bg-white'>
            Download for mac
          </button>
          <p className='mt-3 text-gray-500'>or</p>
          <div className='w-full border border-gray-700 rounded mt-3 flex justify-center'>
            <p className='py-2 text-gray-500'>$ brew install --cask raycast</p>
          </div>
          <div className='mt-2 text-gray-500'>
            <ul className='flex w-full justify-around text-xs'>
              <li className=''>v1.24.0</li>
              <li className=''>macOS 10.14+</li>
              <li className='bg-red-800 text-red-500 px-2 rounded-sm'>Beta</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

//Css
//Setter max-content på div'en til button som gjør at vi kan sette den andre diven til width: 100% så de blir like brede

export default Hero;

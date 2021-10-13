import React from 'react';
import { IoLogoFoursquare } from 'react-icons/io';

const Footer = () => {
  return (
    <div className='w-full flex justify-center mb-12'>
      <div className='w-1/4 flex md:justify-center'>
        <IoLogoFoursquare size='2rem' className='text-red-500' />
      </div>
      <div className='w-1/4 flex flex-col md:items-center  text-sm'>
        <ul>
          <li className='text-white mb-2'>Store</li>
          <li className='text-gray-600'>Explore</li>
          <li className='text-gray-600'>Create an Extension</li>
          <li className='text-gray-600'>Developer program</li>

          <li className='text-white mb-2 mt-8'>Core Extensions</li>
          <li className='text-gray-600'>Explore</li>
          <li className='text-gray-600'>Create an Extension</li>
          <li className='text-gray-600'>Developer program</li>
          <li className='text-gray-600'>Explore</li>
          <li className='text-gray-600'>Create an Extension</li>
          <li className='text-gray-600'>Developer program</li>
        </ul>
      </div>

      <div className='w-1/4 flex flex-col md:items-center  text-sm'>
        <ul>
          <li className='text-white mb-2'>Store</li>
          <li className='text-gray-600'>Explore</li>
          <li className='text-gray-600'>Create an Extension</li>
          <li className='text-gray-600'>Developer program</li>

          <li className='text-white mb-2 mt-8'>Core Extensions</li>
          <li className='text-gray-600'>Explore</li>
          <li className='text-gray-600'>Create an Extension</li>
          <li className='text-gray-600'>Developer program</li>
          <li className='text-gray-600'>Explore</li>
          <li className='text-gray-600'>Create an Extension</li>
          <li className='text-gray-600'>Developer program</li>
        </ul>
      </div>
      <div className='w-1/4 flex flex-col md:items-center  text-sm'>
        <ul>
          <li className='text-white mb-2'>Store</li>
          <li className='text-gray-600'>Explore</li>
          <li className='text-gray-600'>Create an Extension</li>
          <li className='text-gray-600'>Developer program</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

import Hero from '@/components/Hero';
import React from 'react';

//Icons
import {
  FcGoogle,
  FcDebian,
  FcAndroidOs,
  FcBiotech,
  FcCurrencyExchange,
  FcEngineering,
  FcFeedIn,
} from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { BiRightArrowAlt } from 'react-icons/bi';
import CardList from '@/components/CardList';

export default function Home() {
  return (
    <div className='md:container md:w-4/5  mx-auto'>
      <Hero />

      {/* After hero */}

      <div className='h-screen w-full mb-40'>
        <div className='flex flex-col mx-auto items-center mt-60 max-w-lg'>
          <h3 className='text-5xl text-center'>Turn on superpowers</h3>
          <p className='mt-6 max-w-xl text-center text-lg text-gray-600'>
            Use the built-in extensions to connect with common tools and build
            your own custom extensions with our API.
          </p>
          <ul className='flex justify-around w-full  mt-6'>
            <li>
              <FcGoogle
                size='2rem'
                className='opacity-50 hover:opacity-100 hover:cursor-pointer'
              />
            </li>
            <li>
              <FcDebian
                size='2rem'
                className='opacity-50 hover:opacity-100 hover:cursor-pointer'
              />
            </li>
            <li>
              <FcAndroidOs
                size='2rem'
                className='opacity-50 hover:opacity-100 hover:cursor-pointer'
              />
            </li>
            <li>
              <FcBiotech
                size='2rem'
                className='opacity-50 hover:opacity-100 hover:cursor-pointer'
              />
            </li>
            <li>
              <FcCurrencyExchange
                size='2rem'
                className='opacity-50 hover:opacity-100 hover:cursor-pointer'
              />
            </li>
            <li>
              <FcEngineering
                size='2rem'
                className='opacity-50 hover:opacity-100 hover:cursor-pointer'
              />
            </li>
            <li>
              <FcFeedIn
                size='2rem'
                className='opacity-50 hover:opacity-100 hover:cursor-pointer'
              />
            </li>
          </ul>
        </div>

        <div className='w-full md:h-4/6 block md:flex mt-10 '>
          <div className='md:w-1/2 flex flex-col justify-center px-20 bg-gray-600 bg-opacity-20'>
            <div className='flex items-center '>
              <BsGithub size='2rem' />
              <h4 className='text-2xl ml-4 font-thin'>Github</h4>
            </div>
            <p className='max-w-xs mt-4 text-secondary'>
              Deal with issues, pull requests, notifications and workflows in a
              keyboard-driven way.
            </p>
            <div className='flex items-center mt-4 hover:ml-2 hover:cursor-pointer'>
              <p className='text-red-400'>Learn more</p>
              <BiRightArrowAlt size='2rem' className=' text-red-400' />
            </div>
          </div>
          <div className='md:w-1/2 md:h-full gradient'>
            <img
              src='https://www.raycast.com/superpowers/screenshot-github.png'
              alt='github screenshot'
              className='w-full h-full object-cover object-left'
            />
          </div>
        </div>

        <div className='flex justify-center font-thin items-center mt-4 hover:ml-2 hover:cursor-pointer'>
          <p className='text-lg'>Miss something? Build it yourself</p>
          <BiRightArrowAlt size='1.5rem' />
        </div>
      </div>

      <CardList />
      <p className='mt-96'>Bottom!</p>
    </div>
  );
}

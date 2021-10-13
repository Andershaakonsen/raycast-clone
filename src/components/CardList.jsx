import React from 'react';
import Card from './Card';

//Icons
import { BsSpeedometer2, BsTerminal } from 'react-icons/bs';
import { AiFillLock } from 'react-icons/ai';
import { MdOutlineDesignServices } from 'react-icons/md';

const CardList = () => {
  return (
    <div>
      <div className='flex flex-col items-center  mx-auto'>
        <h2 className='text-5xl'>
          More focus <span className='text-gray-600'>,less clutter.</span>
        </h2>
        <p className='max-w-lg text-center mt-6 text-lg text-gray-600'>
          Calm down your workspace and take actions from a central place. Built
          with performance and privacy in mind.
        </p>
      </div>

      <div className='flex flex-col mt-10'>
        <div className='md:flex md:justify-between'>
          <Card
            icon={<BsSpeedometer2 size='3rem' className='text-red-800' />}
            headline='Perform tasks in seconds '
            text='Every action is optimized for speed and accessible via keyboard shortcuts. The app is built natively to be fast, lightweight and efficient.'
          />
          <Card
            icon={<AiFillLock size='3rem' className='text-red-800' />}
            headline='Security by default'
            text='No login is required to use Raycast. Everything is stored encrypted on your local disk and nothing sensitive is tracked. You and your data stay anonymous.'
          />
        </div>
        <div className='md:flex md:justify-between'>
          <Card
            icon={<BsTerminal size='3rem' className='text-red-800' />}
            headline='Learn once, control everything'
            text='Raycast is inspired by command line interfaces. Your tools are unified as commands and follow the same structure to make you more productive.'
          />
          <Card
            icon={
              <MdOutlineDesignServices size='3rem' className='text-red-800' />
            }
            headline='Tailor it to your needs'
            text='Enable the built-in extensions for an initial productivity boost. Use the script commands and our API to optimize for your workflow.'
          />
        </div>
      </div>
    </div>
  );
};

export default CardList;

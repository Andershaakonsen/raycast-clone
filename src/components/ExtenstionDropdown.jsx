import { Menu } from '@headlessui/react';
import React from 'react';

//Icons
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai';
import { SiJirasoftware } from 'react-icons/si';

export default function ExtensionDropdown({ children }) {
  return (
    <Menu as='li' className='relative flex justify-center'>
      <Menu.Button>{children}</Menu.Button>

      <Menu.Items className='flex flex-col absolute top-8  w-80  bg-gray-900 border-gra rounded-md bg-opacity-80 backdrop-blur-md'>
        <Menu.Item>
          {({ active }) => <a className={`${active && 'bg-blue-500'}`}></a>}
        </Menu.Item>

        <Menu.Item>
          {({ active }) => (
            <div
              className={`${
                active && 'bg-gray-800'
              } flex items-center px-3 py-3 border border-gray-800`}
            >
              <FcGoogle size='1.2rem' className='mr-2' />
              <p className='text-sm'>G suite</p>
            </div>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <div
              className={`${
                active && 'bg-gray-800'
              } flex items-center px-3 py-3 border border-gray-800`}
            >
              <AiOutlineGithub size='1.2rem' className='mr-2' />
              <p className='text-sm'>Github</p>
            </div>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <div
              className={`${
                active && 'bg-gray-800'
              } flex items-center px-3 py-3 border border-gray-800`}
            >
              <SiJirasoftware size='1.2rem' className='mr-2' />
              <p className='text-sm'>Jira</p>
            </div>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <div
              className={`${
                active && 'bg-gray-800'
              } flex items-center px-3 py-3 border border-gray-800`}
            >
              <AiOutlineInstagram size='1.2rem' className='mr-2' />
              <p className='text-sm'>Instagram</p>
            </div>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

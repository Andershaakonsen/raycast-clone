import React from 'react';

const Card = ({ icon, text, headline }) => {
  return (
    <div className='w-full my-4 md:mx-4 flex flex-col border border-black rounded-lg bg-gray-600 bg-opacity-20 pl-6 pr-6'>
      <div className='pt-4'>{icon}</div>
      <h4 className='mt-4'>{headline}</h4>
      <p className='pb-12 mt-2 text-gray-400'>{text}</p>
    </div>
  );
};

export default Card;

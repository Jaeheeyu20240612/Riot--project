import React from 'react';
import TopButton from './TopButton';

const Footer = () => {
  return (
    <div className='mt-auto'>
      <TopButton />
      <footer className='w-full mt-auto text-white bg-gray-600'>
        <p className='flex items-center justify-center text-center min-h-10 p-1'>
          [JH LoL-Info-Project] is not endorsed by Riot Games and does not
          reflect the views or opinions of Riot Games or anyone officially
          involved in producing or managing Riot Games properties. Riot Games
          and all associated properties are trademarks or registered trademarks
          of Riot Games, Inc.
        </p>
      </footer>
    </div>
  );
};

export default Footer;

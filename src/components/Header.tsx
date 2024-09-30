import Link from 'next/link';
import React from 'react';
import DarkModeButton from './DarkModeButton';

const Header = () => {
  return (
    <header className='z-20'>
      <nav className='w-full '>
        <div className='flex'>
          <Link
            className='nav-link hover:w-1/3 hover:bg-red-600 transition-all duration-300'
            href={'/'}
          >
            Home
          </Link>
          <Link
            className='nav-link hover:w-1/3 hover:bg-red-600 transition-all duration-300'
            href={'/champions'}
          >
            Champions
          </Link>
          <Link
            className='nav-link hover:w-1/3 hover:bg-red-600 transition-all duration-300'
            href={'/items'}
          >
            Items
          </Link>
          <Link
            className='nav-link hover:w-1/3 hover:bg-red-600 transition-all duration-300'
            href={'/rotation'}
          >
            Rotation
          </Link>
        </div>
        <DarkModeButton />
      </nav>
    </header>
  );
};

export default Header;

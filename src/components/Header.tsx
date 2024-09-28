import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header>
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
      </nav>
    </header>
  );
};

export default Header;

import Link from 'next/link';
import React from 'react';
import DarkModeButton from './DarkModeButton';

const Header = () => {
  return (
    <header className='z-20'>
      <nav className='w-full '>
        <div className='flex'>
          <Link className='nav-link' href={'/'}>
            Home
          </Link>
          <Link className='nav-link' href={'/champions'}>
            Champions
          </Link>
          <Link className='nav-link' href={'/items'}>
            Items
          </Link>
          <Link className='nav-link' href={'/rotation'}>
            Rotation
          </Link>
        </div>
        <DarkModeButton />
      </nav>
    </header>
  );
};

export default Header;

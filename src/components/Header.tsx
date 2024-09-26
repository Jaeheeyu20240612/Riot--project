import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header>
      <nav className='w-full'>
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
      </nav>
    </header>
  );
};

export default Header;

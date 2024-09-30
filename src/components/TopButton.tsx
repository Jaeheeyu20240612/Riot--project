'use client';
import Image from 'next/image';
import circleUpBright from '../public/circleUpBright.svg';

const TopButton = () => {
  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <Image
      onClick={handleButtonClick}
      src={circleUpBright}
      width={25}
      height={25}
      alt='탑버튼'
      className='fixed ml bottom-4 right-1 cursor-pointer'
    />
  );
};

export default TopButton;

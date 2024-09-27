'use client';
import Image from 'next/image';
import circleUpBright from '../public/circleUpBright.svg';

const TopButton = () => {
  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <Image
        onClick={handleButtonClick}
        src={circleUpBright}
        width={40}
        height={40}
        alt='탑버튼'
        className='fixed bottom-20 right-2 cursor-pointer'
      />
    </>
  );
};

export default TopButton;

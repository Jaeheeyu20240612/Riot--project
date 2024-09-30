'use client';
import { useThemeStore } from '@/app/store/useThemeStore';
import Image from 'next/image';
import toggleOn from '../public/toggleOn.svg';
import toggleOff from '../public/toggleOff.svg';

const DarkModeButton = () => {
  const { darkMode, toggleDarkMode } = useThemeStore();

  return (
    <Image
      onClick={toggleDarkMode}
      className='ml-auto mr-1'
      src={darkMode ? toggleOn : toggleOff}
      alt='다크모드 토글 버튼'
      width={30}
      height={30}
    />
  );
};

export default DarkModeButton;

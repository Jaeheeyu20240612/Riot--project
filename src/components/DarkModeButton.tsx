'use client';
import { useThemeStore } from '@/app/store/useThemeStore';
import { Switch } from './ui/switch';
import { Label } from './ui/label';

const DarkModeButton = () => {
  const { darkMode, toggleDarkMode } = useThemeStore();

  return (
    <div className='flex flex-row items-center justify-center mt-3 mr-2'>
      <div className='ml-auto'>
        <Label className='text-4xl' htmlFor='toggleSwitch'>
          {darkMode ? '☀️' : '🌕'}
        </Label>
        <Switch id='toggleSwitch' onClick={toggleDarkMode} className='' />
      </div>
    </div>
  );
};

export default DarkModeButton;

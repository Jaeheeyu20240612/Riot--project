'use client';

import { useEffect } from 'react';
import { useThemeStore } from '../store/useThemeStore';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { darkMode } = useThemeStore();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return <div>{children}</div>;
};

export default ThemeProvider;

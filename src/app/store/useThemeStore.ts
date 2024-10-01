import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface useThemeStoreProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const useThemeStore = create<useThemeStoreProps>(
  persist(
    (set) => ({
      darkMode: false,
      toggleDarkMode: () => {
        set((state) => ({
          darkMode: !state.darkMode,
        }));
      },
    }),
    {
      name: 'theme-storage', // localStorage에 저장될 키
      getStorage: () => localStorage, // 기본 스토리지로 localStorage 사용
    }
  )
);

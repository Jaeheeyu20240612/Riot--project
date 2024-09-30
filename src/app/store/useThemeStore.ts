import { create } from 'zustand';

interface useThemeStoreProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const useThemeStore = create<useThemeStoreProps>((set) => ({
  darkMode: false,
  toggleDarkMode: () => {
    set((state) => ({
      darkMode: !state.darkMode,
    }));
  },
}));

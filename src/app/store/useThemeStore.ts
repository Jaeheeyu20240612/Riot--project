import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface useThemeStoreProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

// export const useThemeStore = create(
//   persist<useThemeStoreProps>(
//     (set) => ({
//       darkMode: false,
//       toggleDarkMode: () => {
//         set((state) => ({
//           darkMode: !state.darkMode,
//         }));
//       },
//     }),
//     {
//       name: 'theme-storage', // localStorage에 'theme-storage'라는 키로 상태를 저장
//       storage: createJSONStorage(() => localStorage),
//     }
//   )
// );

export const useThemeStore = create<useThemeStoreProps>()(
  persist(
    (set) => ({
      darkMode: false,
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
    }),
    { name: 'theme-stroe' }
  )
);

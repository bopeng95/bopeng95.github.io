import { MdDarkMode, MdLightMode } from 'react-icons/md';

import { useTheme } from '../hooks/useTheme';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="text-latte-subtext dark:text-mocha-subtext inline-flex cursor-pointer items-center justify-center rounded-full p-2 transition-colors hover:bg-black/5 dark:hover:bg-white/10"
    >
      {isDark ? (
        <MdLightMode className="size-6" />
      ) : (
        <MdDarkMode className="size-6" />
      )}
    </button>
  );
};

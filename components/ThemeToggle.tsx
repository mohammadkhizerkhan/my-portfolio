'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 leftx-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 transition-colors duration-200 hover:scale-110"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};
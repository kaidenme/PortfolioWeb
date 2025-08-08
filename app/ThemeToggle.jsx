"use client";

import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  // Initialize with dark mode by default
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage if preference exists, otherwise default to dark
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme ? savedTheme === 'dark' : true;
    }
    return true; // Server-side fallback (default dark)
  });

  useEffect(() => {
    // Apply theme on mount/change
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-4 right-4 p-2 rounded-full bg-slate-200 dark:bg-slate-700 z-50"
    >
      {darkMode ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}
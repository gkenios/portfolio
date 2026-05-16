import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

/** Custom hook to manage theme (light/dark). Doesn't take into account user's default */
export function useTheme(defaultTheme: Theme | 'system') {
  const [theme, setTheme] = useState<Theme>(() => {
    // SSR fallback
    if (typeof window === 'undefined') {
      return 'dark';
    }
    // Check previously saved theme in localStorage
    const saved = localStorage.getItem('theme') as Theme | null;
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
    // If set to system, check user's OS preference
    if (defaultTheme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    // Otherwise, use the provided default theme
    return defaultTheme;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));
  return { theme, isDark: theme === 'dark', toggle };
}

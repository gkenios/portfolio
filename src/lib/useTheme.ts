import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

/** Custom hook to manage theme (light/dark). Doesn't take into account user's default */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    // 1. Safe fallback for Server-Side Rendering (SSR)
    if (typeof window === 'undefined') return 'light';

    // 2. Check for a previously saved preference
    const saved = localStorage.getItem('theme') as Theme | null;

    // 3. If they explicitly saved 'dark', use it. Otherwise, default to 'light'.
    return saved === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return { theme, isDark: theme === 'dark', toggle };
}

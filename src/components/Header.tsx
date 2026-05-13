import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Intro', href: '#intro' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'About', href: '#about' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(
    () => typeof window !== 'undefined' && window.scrollY > 20
  );
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const rafRef = useRef<number>(0);

  const handleScroll = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const currentY = window.scrollY;
      const lastY = lastScrollYRef.current;
      setIsVisible(!(currentY > lastY && currentY > 100));
      setIsScrolled(currentY > 20);
      lastScrollYRef.current = currentY;
    });
  }, []);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.5 }}
          className={`fixed top-4 left-1/2 z-40 w-fit -translate-x-1/2 rounded-xl px-8 py-2 transition-all duration-300 ${
            isScrolled
              ? 'bg-bg/70 backdrop-blur-md border border-border-main/40 shadow-lg'
              : 'bg-bg/20 backdrop-blur-sm border border-border-main/10'
          }`}
        >
          <nav className="flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-1.5 text-sm font-medium text-muted rounded-lg hover:bg-bg-subtle hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}

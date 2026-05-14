import { useCallback, useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

type HeaderProps = {
  titleMapping: Record<string, string>;
  isDark: boolean;
  onToggleTheme: () => void;
};

export function Header({ titleMapping, isDark, onToggleTheme }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(
    () => typeof window !== 'undefined' && window.scrollY > 20
  );
  const [isVisible, setIsVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
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

  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 900, damping: 35, mass: 0.15 }}
            className={`fixed top-4 right-4 md:right-auto md:left-1/2 z-50 w-fit md:-translate-x-1/2 rounded-xl px-4 py-2 transition-all duration-300 ${
              isScrolled
                ? 'bg-bg/70 backdrop-blur-md border border-border-main/40 shadow-lg'
                : 'bg-bg/20 backdrop-blur-sm border border-border-main/10'
            }`}
          >
            <nav className="flex items-center gap-0.5">
              {/* Desktop nav links */}
              <div className="hidden md:flex items-center gap-0.5 mr-2">
                {Object.entries(titleMapping).map(([key, label]) => (
                  <a
                    key={key}
                    href={`#${key}`}
                    className="px-4 py-1.5 text-sm font-medium text-muted rounded-lg hover:bg-bg-subtle hover:text-foreground transition-colors duration-200"
                  >
                    {label}
                  </a>
                ))}
              </div>

              {/* Theme toggle — always visible */}
              <button
                onClick={onToggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-lg text-muted hover:bg-bg-subtle hover:text-foreground transition-colors duration-200"
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              {/* Burger — mobile only */}
              <button
                onClick={() => setMobileOpen((o) => !o)}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                className="md:hidden p-2 rounded-lg text-muted hover:bg-bg-subtle hover:text-foreground transition-colors duration-200"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </nav>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Blurred backdrop */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-30 md:hidden bg-bg/60 backdrop-blur-sm"
              onClick={handleNavClick}
            />

            {/* Dropdown panel */}
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="fixed top-16 left-0 right-0 z-40 md:hidden mx-4 rounded-xl bg-bg/95 backdrop-blur-md border border-border-main/40 shadow-lg overflow-hidden"
            >
              {Object.entries(titleMapping).map(([key, label]) => (
                <a
                  key={key}
                  href={`#${key}`}
                  onClick={handleNavClick}
                  className="block px-6 py-3.5 text-sm font-medium text-muted hover:bg-bg-subtle hover:text-foreground transition-colors duration-200 border-b border-border-main/20 last:border-b-0"
                >
                  {label}
                </a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

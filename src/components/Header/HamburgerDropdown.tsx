import { AnimatePresence, motion } from 'framer-motion';

type HamburgerDropdownProps = {
  titleMapping: Record<string, string>;
  mobileOpen: boolean;
  onClick: () => void;
};

export function HamburgerDropdown({ titleMapping, mobileOpen, onClick }: HamburgerDropdownProps) {
  return (
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
            onClick={onClick}
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
                onClick={onClick}
                className="block px-6 py-3.5 text-sm font-medium text-muted hover:bg-bg-subtle hover:text-foreground transition-colors duration-200 border-b border-border-main/20 last:border-b-0"
              >
                {label}
              </a>
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

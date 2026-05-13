import { AnimatePresence, motion, type BezierDefinition } from 'framer-motion';
import { useEffect, useState } from 'react';

import { ImageSlide } from './ImageSlide';
import { TerminalSlide } from './TerminalSlide';
import { HOBBIES } from '../../data';
import { fadeUp } from '../../lib/animations';

const INTERVAL = 4500;
const TOTAL = HOBBIES.length;

const ease: BezierDefinition = [0.25, 0.1, 0.25, 1];
const cardVariants = {
  left: {
    x: '-58%',
    rotateY: 24,
    scale: 0.8,
    opacity: 0.6,
    zIndex: 1,
    transition: { duration: 0.55, ease },
  },
  center: {
    x: '0%',
    rotateY: 0,
    scale: 1,
    opacity: 1,
    zIndex: 3,
    transition: { duration: 0.55, ease },
  },
  right: {
    x: '58%',
    rotateY: -24,
    scale: 0.8,
    opacity: 0.6,
    zIndex: 1,
    transition: { duration: 0.55, ease },
  },
  hidden: {
    x: '0%',
    rotateY: 0,
    scale: 0.6,
    opacity: 0,
    zIndex: 0,
    transition: { duration: 0.3, ease },
  },
};

/** Returns -1 (left), 0 (center), 1 (right) for direct neighbours, or null for non-visible slides. */
function getOffset(index: number, active: number): -1 | 0 | 1 | null {
  const raw = (((index - active) % TOTAL) + TOTAL) % TOTAL;
  if (raw === 0) return 0;
  if (raw === 1) return 1;
  if (raw === TOTAL - 1) return -1;
  return null;
}

export function About() {
  // State
  const [active, setActive] = useState(0);

  // Effects
  useEffect(() => {
    const timer = setTimeout(() => setActive((a) => (a + 1) % TOTAL), INTERVAL);
    return () => clearTimeout(timer);
  }, [active]);

  // Derived
  const hobby = HOBBIES[active];

  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      {/* 3D Carousel */}
      <div
        className="relative flex items-center justify-center h-64 md:h-80"
        style={{ perspective: '1000px' }}
      >
        {HOBBIES.map((h, i) => {
          const offset = getOffset(i, active);
          const variant =
            offset === 0 ? 'center' : offset === -1 ? 'left' : offset === 1 ? 'right' : 'hidden';
          const isCenter = offset === 0;
          return (
            <motion.div
              key={i}
              variants={cardVariants}
              animate={variant}
              onClick={() => !isCenter && setActive(i)}
              className="absolute w-48 md:w-60 aspect-square rounded-2xl overflow-hidden"
              style={{
                cursor: !isCenter ? 'pointer' : 'default',
                transformStyle: 'preserve-3d',
                background: `radial-gradient(ellipse at 50% 120%, ${h.accentColor}28 0%, #111 100%)`,
                border: `1px solid ${isCenter ? h.accentColor + '44' : 'rgba(255,255,255,0.06)'}`,
              }}
            >
              {h.type === 'image' && <ImageSlide hobby={h} isCenter={isCenter} />}
              {h.type === 'terminal' && <TerminalSlide hobby={h} isCenter={isCenter} />}
            </motion.div>
          );
        })}
      </div>

      {/* Text — centered under the front card */}
      <div className="mt-14 flex justify-center">
        <div className="w-48 md:w-60 min-h-50 md:min-h-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h3
                className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-center"
                style={{ color: hobby.accentColor }}
              >
                {hobby.title}
              </h3>
              <p className="text-base text-muted italic leading-relaxed">{hobby.text}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

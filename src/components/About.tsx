import { useEffect, useState } from 'react';

import { AnimatePresence, motion, type BezierDefinition } from 'framer-motion';

import { TerminalWindow } from './TerminalWindow';
import ShoesImg from '../assets/shoes.png';
import FilmImg from '../assets/film.png';
import { fadeUp } from '../lib/animations';

const INTERVAL = 4500;

const HOBBIES = [
  {
    id: 'running',
    title: 'Run.',
    quote: 'Running is my way to distress. My left knee is "broken", but my spirit is not.',
    image: ShoesImg,
    accentColor: '#f59e0b',
  },
  {
    id: 'movies',
    title: 'Watch.',
    quote: 'No-netflix, go-to-cinema type of guy. One of my favourite movies is Inception.',
    image: FilmImg,
    accentColor: '#c084fc',
  },
  {
    id: 'coding',
    title: 'Code.',
    quote: 'No sleep if my side project is about to finish? Who needs sleep anyway.',
    accentColor: '#34d399',
  },
];

const CODE_SNIPPET = `from pyspark.sql import SparkSession

spark = (SparkSession
  .builder
  .getOrCreate())

df = spark.read.csv("data.csv")
df.show()`;

const TOTAL = HOBBIES.length;

/** Returns -1 (left), 0 (center), 1 (right), or null (hidden) for a 3-item carousel. */
function getOffset(index: number, active: number): -1 | 0 | 1 {
  const raw = (((index - active) % TOTAL) + TOTAL) % TOTAL;
  if (raw === 0) return 0;
  if (raw === 1) return 1;
  return -1;
}

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
};

export function About() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setActive((a) => (a + 1) % TOTAL), INTERVAL);
    return () => clearTimeout(timer);
  }, [active]);

  const hobby = HOBBIES[active];

  return (
    <section id="about" className="scroll-mt-20 py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Section header — identical structure to Skills, Education, Experience */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">About</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            A bit more personal.
          </h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* 3D Carousel */}
          <div
            className="relative flex items-center justify-center h-64 md:h-80"
            style={{ perspective: '1000px' }}
          >
            {HOBBIES.map((h, i) => {
              const offset = getOffset(i, active);
              const variant = offset === 0 ? 'center' : offset === -1 ? 'left' : 'right';
              return (
                <motion.div
                  key={h.id}
                  variants={cardVariants}
                  animate={variant}
                  onClick={() => offset !== 0 && setActive(i)}
                  className="absolute w-48 md:w-60 aspect-square rounded-2xl overflow-hidden"
                  style={{
                    cursor: offset !== 0 ? 'pointer' : 'default',
                    transformStyle: 'preserve-3d',
                    background: `radial-gradient(ellipse at 50% 120%, ${h.accentColor}28 0%, #111 100%)`,
                    border: `1px solid ${offset === 0 ? h.accentColor + '44' : 'rgba(255,255,255,0.06)'}`,
                  }}
                >
                  {'image' in h ? (
                    <img
                      src={(h as { image: string }).image}
                      alt={h.title}
                      className="w-full h-full object-contain p-6"
                      style={{
                        filter:
                          offset === 0
                            ? `drop-shadow(0 24px 32px ${h.accentColor}55) grayscale(0%)`
                            : 'grayscale(90%) brightness(0.6)',
                        transition: 'filter 0.5s ease',
                      }}
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center p-7"
                      style={{
                        filter: offset !== 0 ? 'grayscale(80%) brightness(0.5)' : undefined,
                        transition: 'filter 0.5s ease',
                      }}
                    >
                      <div className="w-full h-full">
                        <TerminalWindow codeSnippet={CODE_SNIPPET} accentColor={h.accentColor} />
                      </div>
                    </div>
                  )}
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
                  <p className="text-base text-muted italic leading-relaxed">{hobby.quote}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { type BezierDefinition } from 'framer-motion';

const ease = [0.25, 0.1, 0.25, 1] as BezierDefinition;

/** Standard fade-up animation for sections. */
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
};

/** Staggered fade-up for children of a section. */
export const fadeChild = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

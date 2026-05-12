import { type BezierDefinition, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ease: BezierDefinition = [0.25, 0.1, 0.25, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } }
};

export function Intro() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="max-w-4xl"
      >
        <h2 className="text-xl md:text-2xl font-semibold text-gray-400 mb-4 tracking-wide">
          Data Engineer.
        </h2>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-tight">
          Architecting <br /> the flow of data.
        </h1>
        <p className="text-lg md:text-2xl text-gray-400 font-medium max-w-2xl mx-auto">
          Pro-level pipelines. Massive scalability. Zero compromises.
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10"
      >
        <ChevronDown className="w-8 h-8 animate-bounce text-gray-500" />
      </motion.div>
    </section>
  );
}

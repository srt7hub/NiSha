import { motion } from 'motion/react';
import { TornEdge } from './TornEdge';

interface HeroProps {
  names: string;
  photo: string;
}

export function Hero({ names, photo }: HeroProps) {
  return (
    <div className="relative w-full h-screen min-h-[600px] flex flex-col bg-wedding-bg overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <img 
          src={photo} 
          alt={names} 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" /> {/* Subtle overlay for text readability */}
      </motion.div>
      
      <div className="absolute bottom-16 left-0 w-full z-10 flex flex-col items-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl sm:text-5xl text-white text-center uppercase font-serif drop-shadow-md"
        >
          {names}
        </motion.h1>
      </div>

      <div className="absolute bottom-0 w-full z-20 translate-y-px">
        <TornEdge position="bottom" variant={3} fill="var(--color-wedding-bg)" className="h-10 sm:h-14" />
      </div>
    </div>
  );
}

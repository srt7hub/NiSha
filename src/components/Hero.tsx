import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { TornEdge } from './TornEdge';

interface HeroProps {
  names: string;
  photo: string;
}

export function Hero({ names, photo }: HeroProps) {
  // Подсказка нужна только тем, кто ещё не понял, что страницу можно листать.
  // Как только гость начал скроллить — убираем её и больше не показываем.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 24) setScrolled(true);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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

      {/* Подсказка: страницу можно листать вниз */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.6, delay: scrolled ? 0 : 1.6 }}
        className="pointer-events-none absolute bottom-6 left-0 z-10 flex w-full justify-center"
      >
        <motion.svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="h-5 w-5 stroke-white/80 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]"
          fill="none"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9 L12 15 L18 9" />
        </motion.svg>
      </motion.div>

      <div className="absolute bottom-0 w-full z-20 translate-y-px">
        <TornEdge position="bottom" variant={3} fill="var(--color-wedding-bg)" className="h-10 sm:h-14" />
      </div>
    </div>
  );
}

import { motion } from 'motion/react';
import { TornEdge } from './TornEdge';
import { Countdown } from './Countdown';

interface FooterProps {
  photo: string;
  date: string;
  text: string;
  countdownTitle: string;
  targetDate: string;
}

export function Footer({ photo, date, text, countdownTitle, targetDate }: FooterProps) {
  return (
    <div className="relative w-full h-[680px] flex flex-col items-center overflow-hidden">
      <TornEdge position="top" variant={1} className="absolute top-0 left-0 w-full z-10 h-12 sm:h-16" />
      
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <img 
          src={photo} 
          alt="Нияз и Шаура"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>
      
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-[100px] sm:text-[110px] font-serif text-white/90 leading-none font-light mb-7 whitespace-pre-line text-center">
            {date}
          </h2>

          <Countdown title={countdownTitle} targetDate={targetDate} />

          <p className="text-white uppercase tracking-[0.2em] text-sm text-center max-w-[200px] whitespace-pre-line mt-8">
            {text}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

import { motion } from 'motion/react';
import { ReactNode } from 'react';

export function Section({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`px-6 py-9 flex flex-col items-center ${className}`}
    >
      {children}
    </motion.section>
  );
}

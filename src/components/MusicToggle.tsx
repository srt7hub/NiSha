import { motion } from 'motion/react';

interface MusicToggleProps {
  playing: boolean;
  onToggle: () => void;
}

/** Плавающая кнопка в углу: включает/выключает музыку. */
export function MusicToggle({ playing, onToggle }: MusicToggleProps) {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      aria-label={playing ? 'Выключить музыку' : 'Включить музыку'}
      aria-pressed={playing}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-wedding-olive/25 bg-wedding-bg/80 text-wedding-olive shadow-[0_2px_10px_rgba(80,70,50,0.15)] backdrop-blur-sm transition-colors duration-300 hover:border-wedding-olive/50 hover:bg-wedding-bg"
      style={{ right: 'max(1.25rem, calc(50vw - 225px + 1.25rem))' }}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-[18px] w-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* корпус динамика */}
        <path d="M4 9.5 H7.5 L12 5.5 V18.5 L7.5 14.5 H4 Z" />
        {playing ? (
          <>
            {/* звуковые волны */}
            <path d="M15.5 9.2 C16.9 10.7 16.9 13.3 15.5 14.8" />
            <path d="M18.2 6.8 C20.8 9.5 20.8 14.5 18.2 17.2" />
          </>
        ) : (
          /* крестик — звук выключен */
          <>
            <path d="M16 9.5 L21 14.5" />
            <path d="M21 9.5 L16 14.5" />
          </>
        )}
      </svg>
    </motion.button>
  );
}

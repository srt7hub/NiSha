import { motion } from 'motion/react';

interface EnvelopeProps {
  /** Вызывается по клику. Сюда позже вешается анимация раскрытия и запуск музыки. */
  onOpen: () => void;
}

export function Envelope({ onOpen }: EnvelopeProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 mx-auto w-full max-w-[450px] bg-[#EFE9DE]"
    >
      <button
        type="button"
        onClick={onOpen}
        aria-label="Открыть приглашение"
        className="group relative h-full w-full cursor-pointer overflow-hidden text-left"
      >
        {/* Фотография конверта — на весь экран */}
        <img
          src="/fon.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
        />

        {/* Верхний блок: веточка + заголовок, над печатью */}
        <span className="pointer-events-none absolute inset-x-0 top-[22%] flex flex-col items-center px-10 text-center">
          <HeartGlyph className="h-[13px] w-[13px] text-wedding-olive/45" />

          <svg
            viewBox="0 0 200 34"
            aria-hidden="true"
            className="mt-3 h-[34px] w-[190px] text-wedding-olive/55"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
          >
            {/* стебель */}
            <path d="M14 17 H186" />
            {/* листья: пары, раскрытые к концам ветки */}
            {[
              { x: 44, dir: -1 },
              { x: 66, dir: -1 },
              { x: 88, dir: -1 },
              { x: 112, dir: 1 },
              { x: 134, dir: 1 },
              { x: 156, dir: 1 },
            ].map(({ x, dir }) => (
              <g key={x} transform={`translate(${x} 17) scale(${dir} 1)`} fill="currentColor" fillOpacity="0.5" stroke="none">
                <path d="M0 0 C4 -9 13 -12 19 -10 C15 -2 7 1 0 0 Z" />
                <path d="M0 0 C4 9 13 12 19 10 C15 2 7 -1 0 0 Z" />
              </g>
            ))}
            {/* ягодки */}
            <circle cx="100" cy="17" r="2.4" fill="currentColor" fillOpacity="0.55" stroke="none" />
            <circle cx="30" cy="17" r="2.2" fill="currentColor" fillOpacity="0.55" stroke="none" />
            <circle cx="170" cy="17" r="2.2" fill="currentColor" fillOpacity="0.55" stroke="none" />
          </svg>

          <span className="mt-5 font-serif text-[19px] uppercase tracking-[0.34em] text-wedding-olive/85">
            Приглашение
          </span>
          <span className="mt-1 font-serif text-[19px] italic text-wedding-olive/70">
            на нашу свадьбу
          </span>

          <HeartGlyph className="mt-3 h-[13px] w-[13px] text-wedding-olive/45" />
        </span>

        {/* Нижний блок: подсказка и стрелка, под печатью */}
        <span className="pointer-events-none absolute inset-x-0 bottom-[16%] flex flex-col items-center px-10 text-center">
          <span className="max-w-[280px] text-[15px] leading-relaxed text-wedding-olive/80">
            Нажмите на конверт,
            <br />
            чтобы открыть приглашение
          </span>

          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="mt-6 block"
          >
            <svg
              viewBox="0 0 24 30"
              aria-hidden="true"
              className="h-8 w-6 stroke-wedding-olive/70 transition-transform duration-500 group-hover:translate-y-1"
              fill="none"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* изогнутая стрелка вниз, как в референсе */}
              <path d="M6 3 C16 6 19 14 15 25" />
              <path d="M9 20 L15 26 L20 19" />
            </svg>
          </motion.span>
        </span>
      </button>
    </motion.div>
  );
}

function HeartGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 22"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20 C12 20 2 14 2 7.5 A5 5 0 0 1 12 5.5 A5 5 0 0 1 22 7.5 C22 14 12 20 12 20 Z" />
    </svg>
  );
}

import { motion } from 'motion/react';
import { SectionTitle } from './SectionTitle';
import { BodyText } from './BodyText';

interface GroupChatProps {
  title: string;
  text: string;
  buttonLabel: string;
  link: string;
}

/** Блок «Общий чат»: веточка, заголовок, текст и кнопка вступления. */
export function GroupChat({ title, text, buttonLabel, link }: GroupChatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="flex w-full flex-col items-center text-center"
    >
      <Sprig className="mb-6 h-[81px] w-[96px] text-wedding-olive/60" />

      <SectionTitle className="mb-4">{title}</SectionTitle>

      {/* Разделитель с сердечком — как в референсе */}
      <span
        aria-hidden="true"
        className="mb-6 flex items-center justify-center gap-3 text-wedding-olive/45"
      >
        <span className="h-px w-[52px] bg-current opacity-50" />
        <svg viewBox="0 0 24 22" className="h-[13px] w-[13px]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20 C12 20 2 14 2 7.5 A5 5 0 0 1 12 5.5 A5 5 0 0 1 22 7.5 C22 14 12 20 12 20 Z" />
        </svg>
        <span className="h-px w-[52px] bg-current opacity-50" />
      </span>

      <BodyText className="mx-auto mb-8 max-w-[330px]">{text}</BodyText>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-[52px] items-center justify-center rounded-full bg-wedding-olive px-11 text-[13px] uppercase tracking-[0.14em] text-white transition-opacity duration-300 hover:opacity-90"
      >
        {buttonLabel}
      </a>
    </motion.div>
  );
}

/** Ботаническая веточка над заголовком: стебель по диагонали, листья веером. */
function Sprig({ className }: { className?: string }) {
  // Листья вдоль стебля: точка крепления, наклон и размер.
  // Идут от самого низа до верхушки — иначе внизу остаётся голый
  // хвост, а листва сбивается в правый верхний угол.
  // Ближе к верхушке — мельче, как у живой ветки.
  const leaves = [
    { x: 22, y: 71, r: -18, s: 1.0 },
    { x: 42, y: 55, r: -24, s: 0.92 },
    { x: 62, y: 39, r: -32, s: 0.8 },
    { x: 82, y: 22, r: -42, s: 0.62 },
  ];

  // viewBox обнимает фактические границы рисунка (замерены через getBBox),
  // иначе внутри рамки остаются пустые поля и ветка съезжает от центра блока.
  return (
    <svg
      viewBox="11 -10 109 92"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
    >
      {/* стебель */}
      <path d="M18 74 C40 64 76 42 106 4" strokeWidth="1.1" opacity="0.75" />

      {leaves.map(({ x, y, r, s }) => (
        <g key={x} transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
          {/* Оба листа смотрят вверх вдоль стебля, как у живой оливы.
              Разный наклон — чтобы они не сливались в один силуэт. */}
          <path
            d="M0 0 C5 -8 18 -12 28 -9 C20 -2 8 2 0 0 Z"
            fill="currentColor"
            fillOpacity="0.4"
            stroke="none"
            transform="rotate(-16)"
          />
          <path
            d="M0 0 C5 -8 18 -12 28 -9 C20 -2 8 2 0 0 Z"
            fill="currentColor"
            fillOpacity="0.4"
            stroke="none"
            transform="rotate(14)"
          />
        </g>
      ))}

      {/* верхушечный листок */}
      <path
        d="M106 4 C107 -2 111 -6 117 -7 C115 0 111 4 106 4 Z"
        fill="currentColor"
        fillOpacity="0.5"
        stroke="none"
      />
    </svg>
  );
}

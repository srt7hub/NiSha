import { Section } from './Section';
import { SectionTitle } from './SectionTitle';
import { BodyText } from './BodyText';
import { motion } from 'motion/react';

interface DressCodeProps {
  title: string;
  text: string;
  womenPhoto: string;
  menPhoto: string;
  womenTitle: string;
  womenText: string;
  womenColors: string[];
  menTitle: string;
  menText: string;
  menColors: string[];
}

/** Тонкая линия с ромбом по центру — разделяет ряды. */
function RowDivider() {
  return (
    <div className="flex items-center w-full max-w-[380px] mx-auto my-8">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-wedding-olive/30" />
      <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 mx-2 shrink-0 stroke-wedding-olive/50 fill-none">
        <path d="M6 1 L11 6 L6 11 L1 6 Z" strokeWidth="1" />
      </svg>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-wedding-olive/30" />
    </div>
  );
}

function Swatches({ colors, size = 30 }: { colors: string[]; size?: number }) {
  return (
    <div className="flex items-center gap-2">
      {colors.map((color, i) => (
        <motion.span
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-full ring-1 ring-wedding-olive/20 shrink-0"
          style={{ backgroundColor: color, width: size, height: size }}
        />
      ))}
    </div>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

export function DressCode({
  title, text, womenPhoto, menPhoto,
  womenTitle, womenText, womenColors,
  menTitle, menText, menColors,
}: DressCodeProps) {
  return (
    <Section className="w-full py-9">
      <SectionTitle className="text-center mb-4">{title}</SectionTitle>

      <BodyText className="text-center mb-2">{text}</BodyText>

      <RowDivider />

      {/* Ряд 1: девушки слева, подпись справа */}
      <motion.div {...fadeUp} className="flex items-center w-full gap-3">
        <div className="w-[56%] shrink-0">
          <img
            src={womenPhoto}
            alt="Дресс-код для дам"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-[13px] font-serif text-wedding-text uppercase tracking-[0.18em] mb-3">
            {womenTitle}
          </h3>

          <Swatches colors={womenColors} size={26} />

          <BodyText size="small" className="mt-4">
            {womenText}
          </BodyText>
        </div>
      </motion.div>

      <RowDivider />

      {/* Ряд 2: подпись слева, мужчина справа */}
      <motion.div {...fadeUp} className="flex items-center w-full gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-[13px] font-serif text-wedding-text uppercase tracking-[0.18em] mb-3">
            {menTitle}
          </h3>

          <Swatches colors={menColors} size={26} />

          <BodyText size="small" className="mt-4">
            {menText}
          </BodyText>
        </div>

        <div className="w-[52%] shrink-0">
          <img
            src={menPhoto}
            alt="Дресс-код для мужчин"
            className="w-full h-auto object-contain"
          />
        </div>
      </motion.div>
    </Section>
  );
}

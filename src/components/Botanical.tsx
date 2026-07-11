import { motion } from 'motion/react';

/**
 * Тонкая ботаническая веточка-разделитель.
 * Рисуется линиями в currentColor, поэтому наследует цвет темы.
 */
export function Botanical({ className = '' }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0.6 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className={`flex justify-center text-wedding-olive ${className}`}
    >
      <svg
        viewBox="0 0 220 40"
        className="w-[180px] h-[34px] overflow-visible"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      >
        {/* центральный стебель */}
        <path d="M20 20 H200" strokeWidth="0.5" opacity="0.45" />

        {/* листья слева, попарно вверх/вниз */}
        <path d="M62 20 C 74 10, 88 10, 96 20 C 88 30, 74 30, 62 20 Z" opacity="0.55" />
        <path d="M44 20 C 52 13, 62 13, 68 20" opacity="0.4" />
        <path d="M44 20 C 52 27, 62 27, 68 20" opacity="0.4" />

        {/* листья справа — зеркально */}
        <path d="M158 20 C 146 10, 132 10, 124 20 C 132 30, 146 30, 158 20 Z" opacity="0.55" />
        <path d="M176 20 C 168 13, 158 13, 152 20" opacity="0.4" />
        <path d="M176 20 C 168 27, 158 27, 152 20" opacity="0.4" />

        {/* центральный ромб-бутон */}
        <path d="M110 12 L 116 20 L 110 28 L 104 20 Z" opacity="0.7" />

        {/* усики на концах */}
        <path d="M20 20 C 12 16, 8 22, 4 20" opacity="0.35" />
        <path d="M200 20 C 208 16, 212 22, 216 20" opacity="0.35" />
      </svg>
    </motion.div>
  );
}

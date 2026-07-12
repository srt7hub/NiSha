import type { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

/**
 * Единый стиль заголовка секции: «Дорогие родные», «Регистрация»,
 * «Сбор гостей», «Дресс-код», «Важно».
 *
 * Все пять заголовков берут стиль отсюда — правка размера или трекинга
 * в одном месте меняет их разом.
 */
export function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <h2
      className={`font-serif font-medium uppercase text-wedding-text text-[26px] sm:text-3xl tracking-[0.14em] leading-snug whitespace-pre-line ${className}`}
    >
      {children}
    </h2>
  );
}

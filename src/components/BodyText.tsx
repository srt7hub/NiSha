import type { ReactNode } from 'react';

interface BodyTextProps {
  children: ReactNode;
  /** 'base' — основной абзац; 'small' — подпись, адрес, описание. */
  size?: 'base' | 'small';
  className?: string;
}

/**
 * Единый стиль основного текста. Два размера — больше не нужно:
 * 'base'  — то, что гость читает (вступление, дресс-код, важно, подвал);
 * 'small' — вспомогательное (адреса, описания образов).
 *
 * Цвет и межстрочный заданы здесь же, чтобы правка была в одном месте.
 */
export function BodyText({ children, size = 'base', className = '' }: BodyTextProps) {
  const sizeClass = size === 'base' ? 'text-[14px]' : 'text-[13px]';

  return (
    <p
      className={`font-sans font-medium text-wedding-olive leading-[1.55] whitespace-pre-line ${sizeClass} ${className}`}
    >
      {children}
    </p>
  );
}

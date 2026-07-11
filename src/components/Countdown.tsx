import { useEffect, useState } from 'react';

interface CountdownProps {
  title: string;
  /** ISO-строка с моментом начала торжества, например "2026-09-05T14:30:00+05:00" */
  targetDate: string;
}

interface Parts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function diff(target: number): Parts {
  const total = Math.max(0, Math.floor((target - Date.now()) / 1000));
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}

/** Русские окончания: 1 день, 2 дня, 5 дней. */
function plural(n: number, forms: [string, string, string]) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod100 >= 11 && mod100 <= 14) return forms[2];
  if (mod10 === 1) return forms[0];
  if (mod10 >= 2 && mod10 <= 4) return forms[1];
  return forms[2];
}

export function Countdown({ title, targetDate }: CountdownProps) {
  const target = new Date(targetDate).getTime();
  const [parts, setParts] = useState<Parts>(() => diff(target));

  useEffect(() => {
    const id = setInterval(() => setParts(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const cells = [
    { value: parts.days, label: plural(parts.days, ['день', 'дня', 'дней']) },
    { value: parts.hours, label: plural(parts.hours, ['час', 'часа', 'часов']) },
    { value: parts.minutes, label: plural(parts.minutes, ['минута', 'минуты', 'минут']) },
    { value: parts.seconds, label: plural(parts.seconds, ['секунда', 'секунды', 'секунд']) },
  ];

  return (
    <div className="w-full flex flex-col items-center text-white">
      <p className="text-[19px] sm:text-xl font-light mb-4 drop-shadow-sm">
        {title}
      </p>

      <div className="flex items-start justify-center gap-5 sm:gap-7">
        {cells.map((cell) => (
          <div key={cell.label} className="flex flex-col items-center min-w-[52px]">
            <span className="text-[30px] sm:text-[34px] font-light leading-none tabular-nums drop-shadow-sm">
              {cell.value}
            </span>
            <span className="text-[13px] font-light text-white/85 mt-1.5">
              {cell.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

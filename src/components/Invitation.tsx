import { Section } from './Section';
import { SectionTitle } from './SectionTitle';
import { BodyText } from './BodyText';

interface InvitationProps {
  title: string;
  text: string;
  date: {
    day: string;
    month: string;
    year: string;
    dayOfWeek: string;
  };
}

export function Invitation({ title, text, date }: InvitationProps) {
  return (
    <Section className="text-center max-w-lg mx-auto py-8">
      <SectionTitle className="mb-5">{title}</SectionTitle>

      <BodyText className="mb-6 max-w-[380px] mx-auto">{text}</BodyText>

      <div className="flex flex-col items-center justify-center text-wedding-olive w-full max-w-[320px] mx-auto">
        <svg viewBox="0 0 200 60" className="w-[240px] h-[60px] -mb-9 overflow-visible">
          <path id="curve" d="M 10 50 Q 100 0 190 50" fill="transparent" />
          <text width="200">
            <textPath href="#curve" startOffset="50%" textAnchor="middle" className="text-[22px] uppercase tracking-[0.25em] font-serif font-medium fill-wedding-olive">
              {date.month}
            </textPath>
          </text>
        </svg>
        
        <div className="grid grid-cols-[1fr_auto_1fr] items-baseline w-full gap-4">
          <div className="border-y border-wedding-olive/40 py-2.5 text-center w-full max-w-[96px] mx-auto">
            <span className="text-[12px] font-semibold uppercase tracking-[0.15em]">
              {date.dayOfWeek}
            </span>
          </div>

          <div className="flex justify-center">
            <span className="text-[95px] font-serif font-light leading-none">{date.day}</span>
          </div>

          <div className="border-y border-wedding-olive/40 py-2.5 text-center w-full max-w-[96px] mx-auto">
            <span className="text-[12px] font-semibold uppercase tracking-[0.15em]">
              {date.year}
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}

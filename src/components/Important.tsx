import { Section } from './Section';
import { SectionTitle } from './SectionTitle';
import { BodyText } from './BodyText';

interface ImportantProps {
  title: string;
  text: string;
}

export function Important({ title, text }: ImportantProps) {
  return (
    <Section className="text-center w-full max-w-lg mx-auto py-9">
      <SectionTitle className="mb-6">{title}</SectionTitle>

      <BodyText className="max-w-[340px] mx-auto">{text}</BodyText>
    </Section>
  );
}

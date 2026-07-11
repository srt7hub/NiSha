import { Section } from './Section';

interface ImportantProps {
  title: string;
  text: string;
}

export function Important({ title, text }: ImportantProps) {
  return (
    <Section className="text-center w-full max-w-lg mx-auto py-9">
      <h2 className="text-3xl font-serif text-wedding-olive uppercase mb-6">
        {title}
      </h2>

      <p className="text-sm max-w-[340px] mx-auto whitespace-pre-line opacity-80">
        {text}
      </p>
    </Section>
  );
}

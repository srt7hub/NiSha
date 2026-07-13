import { Section } from './Section';
import { SectionTitle } from './SectionTitle';
import { BodyText } from './BodyText';
import { GroupChat } from './GroupChat';

interface ImportantProps {
  title: string;
  text: string;
  chatTitle: string;
  chatText: string;
  chatButton: string;
  chatLink: string;
}

export function Important({
  title,
  text,
  chatTitle,
  chatText,
  chatButton,
  chatLink,
}: ImportantProps) {
  return (
    <Section className="text-center w-full max-w-lg mx-auto py-9">
      <SectionTitle className="mb-6">{title}</SectionTitle>

      <BodyText className="max-w-[340px] mx-auto">{text}</BodyText>

      <div className="mt-16">
        <GroupChat
          title={chatTitle}
          text={chatText}
          buttonLabel={chatButton}
          link={chatLink}
        />
      </div>
    </Section>
  );
}

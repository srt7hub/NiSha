import { motion } from 'motion/react';
import { Section } from './Section';
import { TornEdge } from './TornEdge';
import { Botanical } from './Botanical';

interface Venue {
  time: string;
  label: string;
  placeName: string;
  address: string;
  mapLink: string;
}

interface LocationProps {
  photo: string;
  title: string;
  venues: Venue[];
}

export function Location({ photo, venues }: LocationProps) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full h-[350px] md:h-[450px]">
        <TornEdge position="top" variant={2} className="absolute top-0 left-0 w-full z-10 h-10 sm:h-14" />
        <img
          src={photo}
          alt="Location"
          className="w-full h-full object-cover"
        />
        <TornEdge position="bottom" variant={1} className="absolute bottom-0 left-0 w-full z-10 h-10 sm:h-14" />
      </div>

      <Section className="text-center w-full max-w-lg mx-auto py-8">
        {venues.map((venue, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center w-full"
          >
            <h2 className="text-[22px] sm:text-2xl font-serif font-medium text-wedding-text uppercase tracking-[0.22em] mb-2">
              {venue.label}
            </h2>

            <span className="text-[46px] sm:text-[52px] font-serif font-light text-wedding-olive leading-none mb-2">
              {venue.time}
            </span>

            {/* Место и адрес — одна связка, разделены минимальным шагом */}
            <p className="text-[17px] sm:text-lg font-serif text-wedding-olive uppercase tracking-[0.14em] mb-1">
              {venue.placeName}
            </p>

            <p className="text-[13px] font-normal text-wedding-olive whitespace-pre-line leading-[1.45] mb-4">
              {venue.address}
            </p>

            {venue.mapLink && (
              <a
                href={venue.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-[165px] h-[46px] bg-wedding-olive text-white text-[11px] uppercase tracking-[0.2em] rounded-full hover:opacity-90 transition-opacity duration-300"
              >
                Карта
              </a>
            )}

            {index < venues.length - 1 && <Botanical className="mt-8 mb-12 opacity-70" />}
          </motion.div>
        ))}
      </Section>
    </div>
  );
}

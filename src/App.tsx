/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import data from './data.json';
import { Envelope } from './components/Envelope';
import { MusicToggle } from './components/MusicToggle';
import { Hero } from './components/Hero';
import { Invitation } from './components/Invitation';
import { Location } from './components/Location';
import { DressCode } from './components/DressCode';
import { Important } from './components/Important';
import { Botanical } from './components/Botanical';
import { Footer } from './components/Footer';

const MUSIC_SRC = '/Mot_-_Svadebnaya_55604836.mp3';

export default function App() {
  const [opened, setOpened] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Аудио живёт вне рендера: элемент создаётся один раз и не пересоздаётся.
  useEffect(() => {
    const audio = new Audio(MUSIC_SRC);
    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = 0.6;
    audioRef.current = audio;

    // Если браузер сам поставил на паузу (звонок, другая вкладка) — синхронизируем кнопку.
    const sync = () => setPlaying(!audio.paused);
    audio.addEventListener('play', sync);
    audio.addEventListener('pause', sync);

    return () => {
      audio.removeEventListener('play', sync);
      audio.removeEventListener('pause', sync);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    // For iOS soft scrolling
    document.body.style.overscrollBehaviorY = 'none';
    return () => {
      document.body.style.overscrollBehaviorY = 'auto';
    };
  }, []);

  // Пока конверт закрыт, страница под ним не должна прокручиваться.
  useEffect(() => {
    document.body.style.overflow = opened ? '' : 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [opened]);

  // Клик по конверту — это пользовательский жест, поэтому браузер разрешает старт звука.
  const handleOpen = () => {
    setOpened(true);
    // Если автоплей всё же заблокирован, просто остаёмся с выключенной музыкой:
    // гость включит её кнопкой.
    audioRef.current?.play().catch(() => setPlaying(false));
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => setPlaying(false));
    } else {
      audio.pause();
    }
  };

  return (
    <>
      <AnimatePresence>
        {!opened && <Envelope onOpen={handleOpen} />}
      </AnimatePresence>

      {opened && <MusicToggle playing={playing} onToggle={toggleMusic} />}

      <main className="paper-texture w-full max-w-[450px] mx-auto min-h-screen bg-wedding-bg shadow-2xl relative overflow-x-hidden">
        <Hero {...data.hero} />
        <Invitation {...data.invitation} />
        <Location {...data.location} />
        <Botanical />
        <DressCode {...data.dresscode} />
        <Botanical />
        <Important {...data.important} />
        <Footer {...data.footer} />
      </main>
    </>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import data from './data.json';
import { Hero } from './components/Hero';
import { Invitation } from './components/Invitation';
import { Location } from './components/Location';
import { DressCode } from './components/DressCode';
import { Important } from './components/Important';
import { Botanical } from './components/Botanical';
import { Footer } from './components/Footer';
import { useEffect } from 'react';

export default function App() {
  // Mobile only constraint enforcement (optional visual guide, but handled by max-w mostly)
  useEffect(() => {
    // For iOS soft scrolling
    document.body.style.overscrollBehaviorY = 'none';
    return () => {
      document.body.style.overscrollBehaviorY = 'auto';
    };
  }, []);

  return (
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
  );
}


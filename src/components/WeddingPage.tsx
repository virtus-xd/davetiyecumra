import { useEffect, useState } from 'react';
import FlowersPinkHero from '../themes/flowers-pink/HeroSection';
import FlowersPinkHennaDetails from '../themes/flowers-pink/HennaDetailsSection';
import FlowersPinkEventDetails from '../themes/flowers-pink/EventDetailsSection';
import FlowersPinkFooter from '../themes/flowers-pink/Footer';

interface WeddingPageProps {
  showTransition: boolean;
  isOpen: boolean;
}

export default function WeddingPage({ showTransition, isOpen }: WeddingPageProps) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setFadeIn(true), 100);
    }
  }, [isOpen]);

  return (
    <div
      className={`wedding-page ${showTransition ? 'transitioning' : ''} ${fadeIn ? 'fade-in' : ''
        }`}
    >
      <FlowersPinkHero />
      <FlowersPinkHennaDetails />
      <FlowersPinkEventDetails />
      <FlowersPinkFooter />
    </div>
  );
}


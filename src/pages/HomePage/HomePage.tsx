import { FC } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { HeroSection } from '../../components/HeroSection/HeroSection';

export const HomePage: FC = () => {
  return (
    <div>
      <Header cartCount={0} showSkewBackground={false} />
      <HeroSection />
      <Footer />
    </div>
  );
}; 
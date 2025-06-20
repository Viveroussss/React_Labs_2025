import { FC } from 'react';
import { Header, Footer, HeroSection } from '../../components';

export const HomePage: FC = () => {
  return (
    <div>
      <Header showSkewBackground={false} />
      <HeroSection />
      <Footer />
    </div>
  );
}; 
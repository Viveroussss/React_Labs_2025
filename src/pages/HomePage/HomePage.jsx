import React, { Component } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { HeroSection } from '../../components/HeroSection/HeroSection';


export const HomePage = () => {

  return (
    <div>
      <Header cartCount={0} showSkewBackground={false}/>
      <HeroSection></HeroSection>
      <Footer />
    </div>
  );
};

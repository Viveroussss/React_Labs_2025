import React from 'react';
import styled from 'styled-components';
import { HeroImg, TrustIcon } from '../../assets/icons/icons';
import BGShape from '../../assets/BGShape.png';

const Hero = styled.section`
  background-color: #ffffff;
  padding: 100px 120px 140px;
  display: flex;
  justify-content: center;
  background-image: url(${BGShape});
  background-repeat: no-repeat;
  background-size: cover;
`;

const HeroContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeroText = styled.div`
  flex: 1;
  min-width: 300px;
  margin: 0 auto;

  h1 {
    font-size: 3.76rem;
    line-height: 60px;
    color: #08090a;
    font-weight: 400;
    letter-spacing: 1.8px;

    span {
      color: #35B8BE;
    }

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.14rem;
    line-height: 24px;
    color: #546285;
    max-width: 470px;
    letter-spacing: 0.36px;
    margin-bottom: 53px;
  }
`;

const Description = styled.p`
  margin-top: 27px;
`;

const Button = styled.button`
  background-color: #35B8BE;
  color: white;
  padding: 20px 35px;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  cursor: pointer;
  line-height: 20px;
  transition: background 0.3s ease;

  &:hover {
    background-color: #2abfbd;
  }
`;

const Trustpilot = styled.div`
  margin-top: 30px;
  font-size: 0.94rem;
  color: #546285;
  display: flex;
  gap: 10px;
  flex-direction: column;

  a {
    color: #35B8BE;
    font-weight: 500;
    text-decoration: none;
  }

  p {
    margin: 0;
  }
`;

const HeroImage = styled.div`
  flex: 1;
  position: relative;
  min-width: 300px;
`;

export const HeroSection = () => (
  <Hero>
    <HeroContainer>
      <HeroText>
        <h1>
          Beautiful food & takeaway, <span>delivered</span> to your door.
        </h1>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
        </Description>
        <Button>Place an Order</Button>
        <Trustpilot>
          <TrustIcon />
          <p className='reviews-text'><a href="#">4.8 out of 5</a> based on 2000+ reviews</p>
        </Trustpilot>
      </HeroText>
      <HeroImage>
        <HeroImg />
      </HeroImage>
    </HeroContainer>
  </Hero>
);

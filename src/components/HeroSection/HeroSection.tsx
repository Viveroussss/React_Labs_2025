import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { HeroImg, TrustIcon } from '../../assets/icons/icons';
import BGShape from '../../assets/BGShape.png';

const Hero = styled.section`
  background-color: var(--color-header-bg);
  padding: 100px 120px 140px;
  display: flex;
  justify-content: center;
  background-image: url(${BGShape});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  [data-theme='dark'] & {
    background-image: none;
  }

  @media (max-width: 1200px) {
    padding: 80px 90px;
  }

  @media (max-width: 1024px) {
    padding: 80px 60px;
  }

  @media (max-width: 768px) {
    padding: 60px 30px;
  }

  @media (max-width: 480px) {
    padding: 40px 15px;
  }
`;

const HeroContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 1200px) {
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }

  @media (max-width: 480px) {
    justify-content: center;
    gap: 15px;
  }
`;

const HeroText = styled.div`
  flex: 1;
  min-width: 300px;
  margin: 0 auto;

  h1 {
    font-size: 3.76rem;
    line-height: 60px;
    color: var(--color-text);
    font-weight: 400;
    letter-spacing: 1.8px;

    span {
      color: var(--color-primary);
    }

    @media (max-width: 1200px) {
      font-size: 3rem;
      line-height: 50px;
    }

    @media (max-width: 768px) {
      font-size: 2.5rem;
      line-height: 45px;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
      line-height: 35px;
    }
  }

  p {
    font-size: 1.14rem;
    line-height: 24px;
    color: var(--color-text);
    max-width: 470px;
    letter-spacing: 0.36px;
    margin-bottom: 53px;

    @media (max-width: 1200px) {
      max-width: 90%;
    }

    @media (max-width: 768px) {
      max-width: 100%;
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
      margin-bottom: 40px;
    }
  }
`;

const Description = styled.p`
  margin-top: 27px;
`;

const Button = styled.button`
  background-color: var(--color-primary);
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

  @media (max-width: 1200px) {
    padding: 15px 25px;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    padding: 15px 25px;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 12px 20px;
    font-size: 0.9rem;
  }
`;

const Trustpilot = styled.div`
  margin-top: 30px;
  font-size: 0.94rem;
  color: var(--color-text);
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    color: var(--color-primary);
    font-weight: 500;
    text-decoration: none;
  }

  p {
    margin: 0;
  }

  @media (min-width: 768px) {
    align-items: start;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    margin-top: 15px;
  }
`;

const HeroImage = styled.div`
  flex: 1;
  position: relative;
  min-width: 300px;
  display: flex;
  justify-content: center;

  svg, img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 650px) {
    svg, img {
      width: 90%;
      max-width: 400px;
    }
  }
`;

export const HeroSection: FC = () => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/menu');
  };

  return (
    <Hero>
      <HeroContainer>
        <HeroText>
          <h1>
            Beautiful food & takeaway, <span>delivered</span> to your doorstep.
          </h1>
          <Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
          </Description>
          <Button onClick={handleOrderClick}>Place an Order</Button>
          <Trustpilot>
            <TrustIcon />
            <p>
              <strong>4.8 out of 5</strong> based on 2000+ reviews
            </p>
          </Trustpilot>
        </HeroText>
        <HeroImage>
          <HeroImg />
        </HeroImage>
      </HeroContainer>
    </Hero>
  );
}; 
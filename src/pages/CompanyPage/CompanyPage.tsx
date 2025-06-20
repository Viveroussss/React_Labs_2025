import React from 'react';
import { Header, Footer } from '../../components';
import './CompanyPage.css';

const CompanyPage: React.FC = () => {
  return (
    <div className="company-page">
      <Header showSkewBackground={false} />

      <main className="company-content">
        <div className="company-image-container">
          <img 
            src="https://placehold.co/600x400" 
            alt="Company Placeholder" 
            className="company-image"
          />
        </div>
        <section className="company-info">
          <h2>About Us</h2>
          <p>Welcome to our company page. This is where you can learn more about our story, mission, and values.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CompanyPage; 
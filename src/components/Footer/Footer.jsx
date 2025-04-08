import './Footer.css';

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="logo-col">
          <img src="../src/assets/Logo.svg" alt="Logo" className="footer-logo" />
          <p className="footer-description">
            Takeaway & Delivery template <span className='footer-description-span'>for small - medium businesses.</span>
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4 className="column-header">Company</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Order</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="column-header">Template</h4>
            <ul>
              <li><a href="#">Style Guide</a></li>
              <li><a href="#">Changelog</a></li>
              <li><a href="#">Licence</a></li>
              <li><a href="#">Webflow University</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="column-header">Flowbase</h4>
            <ul>
              <li><a href="#">More Cloneables</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Built by <a href="#">Flowbase</a> · Powered by <a href="#">Webflow</a></p>
        <div className="footer-socials">
          <a href="#"><img src="./src/assets/insta.svg" alt="Instagram" /></a>
          <a href="#"><img src="./src/assets/tweet.svg" alt="Twitter" /></a>
          <a href="#"><img src="./src/assets/tube.svg" alt="YouTube" /></a>
        </div>
      </div>
    </footer>
  );
};

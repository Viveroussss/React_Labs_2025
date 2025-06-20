import { FC } from 'react';
import './Footer.css';
import { InstagramIcon, TwitterIcon, YoutubeIcon, LogoIcon } from '../../assets/icons/icons';

interface FooterLink {
  name: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    title: "Company",
    links: [
      { name: "Home", href: "#" },
      { name: "Order", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
  {
    title: "Template",
    links: [
      { name: "Style Guide", href: "https://www.google.com/" },
      { name: "Changelog", href: "https://www.google.com/" },
      { name: "Licence", href: "https://www.google.com/" },
      { name: "Webflow University", href: "https://www.google.com/" },
    ],
  },
  {
    title: "Flowbase",
    links: [
      { name: "More Cloneables", href: "#" },
    ],
  },
];

export const Footer: FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="logo-col">
          <LogoIcon className="footer-logo" />
          <p className="footer-description">
            Takeaway & Delivery template <span className="footer-description-span">for small - medium businesses.</span>
          </p>
        </div>

        <div className="footer-links">
          {footerLinks.map(({ title, links }) => (
            <div className="footer-col" key={title}>
              <h4 className="column-header">{title}</h4>
              <ul>
                {links.map(({ name, href }) => (
                  <li key={name}>
                    <a href={href}>{name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Built by <a href="#">Flowbase</a> · Powered by <a href="#">Webflow</a>
        </p>
        <div className="footer-socials">
          <a href="#"><InstagramIcon className="social-icon" /></a>
          <a href="#"><TwitterIcon className="social-icon" /></a>
          <a href="#"><YoutubeIcon className="social-icon" /></a>
        </div>
      </div>
    </footer>
  );
}; 
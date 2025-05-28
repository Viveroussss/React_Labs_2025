import { FC, MouseEvent } from 'react';
import './Header.css';
import { Cart } from '../Cart/Cart';
import { LogoIcon } from '../../assets/icons/icons';

interface HeaderProps {
  cartCount: number;
  showSkewBackground?: boolean;
}

export const Header: FC<HeaderProps> = ({ cartCount, showSkewBackground = true }) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };

  return (
    <header className={`header-container${!showSkewBackground ? ' no-skew' : ''}`}>
      <LogoIcon className="logo-container logo-icon" />

      <div className="header-content">
        <nav className="nav-list">
          <a href="#" className="nav-link" onClick={handleClick}>Home</a>
          <a href="#" className="nav-link" onClick={handleClick}>Menu</a>
          <a href="#" className="nav-link" onClick={handleClick}>Company</a>
          <a href="#" className="nav-link" onClick={handleClick}>Login</a>
        </nav>
        <Cart cartCount={cartCount} />
      </div>
    </header>
  );
}; 
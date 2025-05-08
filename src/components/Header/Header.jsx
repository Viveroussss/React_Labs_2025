import React from 'react';
import './Header.css';
import { Cart } from '../Cart/Cart';
import { LogoIcon } from '../../assets/icons/icons';

export const Header = ({ cartCount }) => {
  return (
    <header className="header-container">
      <LogoIcon className="logo-container logo-icon" />
      <div className="header-content">
        <nav className="nav-list">
          {["Home", "Menu", "Company", "Login"].map((name) => (
            <a key={name} href="#" className="nav-link" onClick={(e) => e.preventDefault()}>
              {name}
            </a>
          ))}
        </nav>
        <Cart cartCount={cartCount} />
      </div>
    </header>
  );
};

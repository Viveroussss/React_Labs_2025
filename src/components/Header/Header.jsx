import React, { Component } from 'react';
import './Header.css';
import { Cart } from '../Cart/Cart';
import { LogoIcon } from '../../assets/icons/icons';


export class Header extends Component {
  render() {
    const { cartCount } = this.props;

    return (
      <header className="header-container">
        <LogoIcon className="logo-container logo-icon" />

        <div className="header-content">
          <nav className="nav-list">
            <a href="#" className="nav-link" onClick={(e) => e.preventDefault()}>Home</a>
            <a href="#" className="nav-link" onClick={(e) => e.preventDefault()}>Menu</a>
            <a href="#" className="nav-link" onClick={(e) => e.preventDefault()}>Company</a>
            <a href="#" className="nav-link" onClick={(e) => e.preventDefault()}>Login</a>
          </nav>
          <Cart cartCount={cartCount} />
        </div>
      </header>
    );
  }
}

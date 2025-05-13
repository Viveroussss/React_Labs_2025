import { CartIcon } from '../../assets/icons/icons';
import React from 'react';
import './Cart.css';

export const Cart = ({ cartCount }) => {
  return (
    <div className="cart">
      <button className="cart-button">
        <CartIcon className="cart-icon" />
      </button>
      <span className="cart-count">{cartCount}</span>
    </div>
  );
};


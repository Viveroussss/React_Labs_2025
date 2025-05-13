import { CartIcon } from '../../assets/icons/icons';
import React, { Component } from 'react';
import './Cart.css';

export class Cart extends Component {
  render() {
    const { cartCount } = this.props;

    return (
      <div className="cart">
        <button className="cart-button">
          <CartIcon className="cart-icon" />
        </button>
        <span className="cart-count">{cartCount}</span>
      </div>
    );
  }
}

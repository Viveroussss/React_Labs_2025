import { FC } from 'react';
import { CartIcon } from '../../assets/icons/icons';
import './Cart.css';

interface CartProps {
  cartCount: number;
}

export const Cart: FC<CartProps> = ({ cartCount }) => {
  return (
    <div className="cart">
      <button className="cart-button">
        <CartIcon className="cart-icon" />
      </button>
      <span className="cart-count">{cartCount}</span>
    </div>
  );
}; 
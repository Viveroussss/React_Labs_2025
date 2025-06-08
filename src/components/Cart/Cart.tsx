import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartIcon } from '../../assets/icons/icons';
import { useAppSelector } from '../../store/hooks';
import './Cart.css';

export const Cart: FC = () => {
  const navigate = useNavigate();
  const { items } = useAppSelector((state) => state.cart);
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <div className="cart">
      <button className="cart-button" onClick={handleCartClick}>
        <CartIcon className="cart-icon" />
      </button>
      {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
    </div>
  );
}; 
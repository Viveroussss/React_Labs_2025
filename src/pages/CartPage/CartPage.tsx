import { FC, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { removeItem, updateQuantity, clearCart } from '../../store/cartSlice';
import { Header, Footer } from '../../components';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';

export const CartPage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { items, total } = useAppSelector((state) => state.cart);
  const [street, setStreet] = useState('');
  const [house, setHouse] = useState('');

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeItem(id));
  };

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(clearCart());
    setStreet('');
    setHouse('');
    alert('Order placed!');
  };

  const handleBackToMenu = () => {
    navigate('/menu');
  };

  return (
    <div>
      <Header />
      <div className="cart-page cart-page-centered">
        <h1 className="cart-title">Finish your order</h1>
        {items.length === 0 ? (
          <div className="cart-empty-container">
            <div className="cart-empty">Your cart is empty</div>
            <button onClick={handleBackToMenu} className="cart-back-btn">
              Back to Menu
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items-list">
              {items.map((item) => (
                <div key={item.id} className="cart-item-card">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-info">
                    <span className="cart-item-name">{item.name}</span>
                  </div>
                  <div className="cart-item-price">$ {item.price.toFixed(2)} USD</div>
                  <input
                    type="number"
                    min={1}
                    className="cart-item-qty"
                    value={item.quantity}
                    onChange={e => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                  />
                  <button className="cart-item-remove" onClick={() => handleRemoveItem(item.id)}>X</button>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <span>Total: </span>
              <span className="cart-total-amount"> $ {total.toFixed(2)} USD</span>
            </div>
            <form className="cart-address-form" onSubmit={handleOrder}>
              <div className="cart-address-fields">
                <label>
                  Street
                  <input
                    type="text"
                    value={street}
                    onChange={e => setStreet(e.target.value)}
                    required
                  />
                </label>
                <label>
                  House
                  <input
                    type="text"
                    value={house}
                    onChange={e => setHouse(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div className="cart-buttons">
                <button type="submit" className="cart-order-btn">Order</button>
                <button type="button" onClick={handleBackToMenu} className="cart-back-btn">
                  Back to Menu
                </button>
              </div>
            </form>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}; 
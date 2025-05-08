import React, { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { MenuContent } from '../../components/MenuContent/MenuContent';

export const MenuPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item, quantity = 1) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      } else {
        return [...prevCartItems, { ...item, quantity }];
      }
    });
  };

  const getTotalCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div>
      <Header cartCount={getTotalCount()} />
      <MenuContent addItem={addItem} />
      <Footer />
    </div>
  );
};

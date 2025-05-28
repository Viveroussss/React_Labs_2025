import { FC, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { MenuContent } from '../../components/MenuContent/MenuContent';

interface CartItem {
  id: string;
  meal: string;
  price: number;
  quantity: number;
}

export const MenuPage: FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addItem = (item: Omit<CartItem, 'quantity'>, quantity = 1) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        const updatedItems = prevCartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
        console.log('Updated cart items (existing item):', updatedItems);
        return updatedItems;
      } else {
        const newItems = [...prevCartItems, { ...item, quantity }];
        return newItems;
      }
    });
  };

  const getTotalCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const cartCount = getTotalCount();

  return (
    <div>
      <Header cartCount={cartCount} />
      <MenuContent addItem={addItem} />
      <Footer />
    </div>
  );
}; 
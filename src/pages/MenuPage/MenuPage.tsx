import { FC } from 'react';
import { Header, Footer, MenuContent } from '../../components';
import { useAppDispatch, addItem } from '../../store';
import type { CartItem } from '../../store/cartSlice';

type CartItemInput = Omit<Pick<CartItem, 'id' | 'name' | 'price' | 'image' | 'quantity'>, 'quantity'>;

export const MenuPage: FC = () => {
  const dispatch = useAppDispatch();

  const handleAddItem = (item: CartItemInput, quantity = 1) => {
    dispatch(addItem({ ...item, quantity }));
  };

  return (
    <div>
      <Header />
      <MenuContent addItem={handleAddItem} />
      <Footer />
    </div>
  );
}; 
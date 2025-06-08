import { FC } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { MenuContent } from '../../components/MenuContent/MenuContent';
import { useAppDispatch } from '../../store/hooks';
import { addItem } from '../../store/cartSlice';
import { CartItem } from '../../store/cartSlice';

export const MenuPage: FC = () => {
  const dispatch = useAppDispatch();

  const handleAddItem = (item: Omit<CartItem, 'quantity'>, quantity = 1) => {
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
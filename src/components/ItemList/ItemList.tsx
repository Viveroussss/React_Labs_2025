import { FC, useState, FormEvent, ChangeEvent } from 'react';
import { Button } from '../Button/Button';
import './ItemList.css';

interface MenuItem {
  id: string;
  meal: string;
  price: number;
  img: string;
  instructions: string;
}

interface ItemListProps {
  items: MenuItem[];
  addItem: (item: Omit<MenuItem, 'img' | 'instructions'>, quantity: number) => void;
}

export const ItemList: FC<ItemListProps> = ({ items, addItem }) => {
  const [quantities, setQuantities] = useState<Record<string, string>>({});

  const handleQuantityChange = (id: string, value: string) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>, item: Omit<MenuItem, 'img' | 'instructions'>) => {
    e.preventDefault();
    const quantity = parseInt(quantities[item.id] || '1', 10);
    addItem(item, quantity);
  };

  return (
    <div className="menu-grid">
      {items.map(({ id, meal, price, img, instructions }) => (
        <div className="menu-card" key={id}>
          <img src={img} alt={meal} />
          <div className="card-info">
            <div className="title-row">
              <h4>{meal}</h4>
              <span>${price}</span>
            </div>
            <p className="card-description">{instructions}</p>
            <form
              className="order-row"
              onSubmit={(e) => handleSubmit(e, { id, meal, price })}
            >
              <input
                id={`quantity-${id}`}
                name={`quantity-${id}`}
                type="number"
                min="1"
                value={quantities[id] || '1'}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleQuantityChange(id, e.target.value)}
                autoComplete="off"
              />
              <Button variant="primary" type="submit">
                Add to cart
              </Button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
}; 
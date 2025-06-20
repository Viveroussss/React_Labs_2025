import { FC, useState, FormEvent, ChangeEvent } from 'react';
import { Button } from '../../components';
import './ItemList.css';
import { MenuItem } from '../../store/menuSlice';

interface ItemListProps {
  items: MenuItem[];
  addItem: (item: Omit<MenuItem, 'description' | 'category'>, quantity: number) => void;
}

export const ItemList: FC<ItemListProps> = ({ items, addItem }) => {
  const [quantities, setQuantities] = useState<Record<string, string>>({});

  const handleQuantityChange = (id: string, value: string) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>, item: MenuItem) => {
    e.preventDefault();
    const quantity = parseInt(quantities[item.id] || '1', 10);
    addItem({ id: item.id, name: item.name, price: item.price, image: item.image }, quantity);
  };

  return (
    <div className="menu-grid">
      {items.map(({ id, name, price, image, description }) => (
        <div className="menu-card" key={id}>
          <img src={image} alt={name} />
          <div className="card-info">
            <div className="title-row">
              <h4>{name}</h4>
              <span>${price}</span>
            </div>
            <p className="card-description">{description}</p>
            <form
              className="order-row"
              onSubmit={(e) => handleSubmit(e, { id, name, price, image, description, category: '' })}
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
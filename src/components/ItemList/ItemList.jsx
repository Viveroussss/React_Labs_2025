import React, { useState } from 'react';
import { Button } from '../Button/Button';
import './ItemList.css';

export const ItemList = ({ items, addItem }) => {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (id, value) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e, item) => {
    e.preventDefault();
    const quantity = parseInt(quantities[item.id] || 1, 10);
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
                type="number"
                min="1"
                value={quantities[id] || 1}
                onChange={(e) => handleQuantityChange(id, e.target.value)}
              />
              <Button variant="add" type="submit">
                Add to cart
              </Button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

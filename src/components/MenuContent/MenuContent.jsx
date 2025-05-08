import React, { useState, useEffect, useMemo } from 'react';
import './MenuContent.css';
import { Button } from '../Button/Button';
import { ItemList } from '../ItemList/ItemList';
import { fetchMenuItems } from '../../services/api-meals';

export const MenuContent = ({ addItem }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState(6);
  const [filteredCategory, setFilteredCategory] = useState('Dessert');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getItems = async () => {
      try {
        const data = await fetchMenuItems();
        setMenuItems(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getItems();
  }, []);

  const handleSeeMore = () => {
    setVisibleItems((prev) => prev + 6);
  };

  const handleFilterChange = (category) => {
    setFilteredCategory(category);
    setVisibleItems(6);
  };

  const filteredItems = menuItems.filter((item) => item.category === filteredCategory);
  const categories = useMemo(() => [...new Set(menuItems.map((item) => item.category))], [menuItems]);

  if (loading) return <p>Loading menu...</p>;
  if (error) return <p>Failed to load menu items.</p>;

  return (
    <div className="menu-wrapper">
      <section className="menu-section">
        <div className="menu-description">
          <h2>Browse our menu</h2>
          <p>
            Use our menu to place an order online, or
            <span className="tooltip">
              phone
              <span className="tooltip-text">+370(677)71-4851</span>
            </span>
            our store to place a pickup order. Fast and fresh food.
          </p>
        </div>

        <div className="menu-buttons">
          {categories.map((cat) => (
            <Button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              className={filteredCategory === cat ? 'active' : ''}
            >
              {cat}
            </Button>
          ))}
        </div>

        <ItemList
          items={filteredItems.slice(0, visibleItems)}
          addItem={addItem}
        />

        {visibleItems < filteredItems.length && (
          <Button variant="see-more" onClick={handleSeeMore}>
            See more
          </Button>
        )}
      </section>
    </div>
  );
};

import React, { useState, useMemo } from 'react';
import './MenuContent.css';
import { Button } from '../Button/Button';
import { ItemList } from '../ItemList/ItemList';
import useFetch from '../../hooks/useFetch';

const DEFAULT_CATEGORY = 'Dessert';
const INITIAL_VISIBLE_ITEMS = 6;
const VISIBLE_ITEMS_INCREMENT = 6;

export const MenuContent = ({ addItem }) => {
  const [filteredCategory, setFilteredCategory] = useState(DEFAULT_CATEGORY);
  const [visibleItems, setVisibleItems] = useState(INITIAL_VISIBLE_ITEMS);
  const { data: menuItems, loading, error } = useFetch('https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals');

  const handleSeeMore = () => {
    setVisibleItems((prev) => prev + VISIBLE_ITEMS_INCREMENT);
  };

  const handleFilterChange = (category) => {
    setFilteredCategory(category);
    setVisibleItems(INITIAL_VISIBLE_ITEMS);
  };

  const filteredItems = menuItems?.filter((item) => item.category === filteredCategory) || [];
  const categories = useMemo(() => [...new Set(menuItems?.map((item) => item.category) || [])], [menuItems]);

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

        <ItemList items={filteredItems.slice(0, visibleItems)} addItem={addItem} />

        {visibleItems < filteredItems.length && (
          <Button variant="see-more" onClick={handleSeeMore}>
            See more
          </Button>
        )}
      </section>
    </div>
  );
};
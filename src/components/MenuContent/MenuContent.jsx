import './MenuContent.css';
import { Button } from '../Button/Button';
import { ItemList } from '../ItemList/ItemList';

export const MenuContent = () => {
  const menuItems = [
    { name: 'Burger Dreams', price: '$9.20 USD', img: 'burger1.png' },
    { name: 'Burger Waldo', price: '$10.00 USD', img: 'burger2.png' },
    { name: 'Burger Cali', price: '$8.00 USD', img: 'burger3.png' },
    { name: 'Burger Bacon Buddy', price: '$9.99 USD', img: 'burger4.png' },
    { name: 'Burger Spicy', price: '$9.20 USD', img: 'burger5.png' },
    { name: 'Burger Classic', price: '$8.00 USD', img: 'burger6.png' },
  ];

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
          <Button>Desert</Button>
          <Button>Dinner</Button>
          <Button>Breakfast</Button>
        </div>

        <ItemList items={menuItems} />

        <Button variant="see-more">See more</Button>
      </section>
    </div>
  );
};

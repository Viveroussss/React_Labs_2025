import React, { Component } from 'react';
import { Button } from '../Button/Button';
import './ItemList.css';

export class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleQuantityChange = (id, value) => {
    this.setState({ [id]: value });
  };

  getQuantity = (id) => {
    return this.state[id] || 1;
  };

  render() {
    const { items, addItem } = this.props;

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
              <p className='card-description'>{instructions}</p>
              <form className="order-row" onSubmit={(e) => {
                e.preventDefault();
                const quantity = parseInt(e.target[0].value);
                addItem({ id, meal, price }, quantity);
              }}>
              <input type="number" min="1" defaultValue="1" />
              <Button variant="add" type="submit">
                Add to cart
              </Button>
              </form>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

import React, { Component } from 'react';
import './MenuContent.css';
import { Button } from '../Button/Button';
import { ItemList } from '../ItemList/ItemList';

export class MenuContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [],
      visibleItems: 6,
    };
  }

  componentDidMount() {
    fetch('https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals')
      .then((res) => res.json())
      .then((data) => this.setState({ menuItems: data }))
      .catch((err) => console.error(err));
  }

  handleSeeMore = () => {
    this.setState((prevState) => ({
      visibleItems: prevState.visibleItems + 6,
    }));
  };

  render() {
    const { menuItems, visibleItems } = this.state;
    const { addItem } = this.props;

    const categories = [...new Set(menuItems.map((item) => item.category))];

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
              <Button key={cat}>{cat}</Button>
            ))}
          </div>

          <ItemList
            items={menuItems.slice(0, visibleItems)}
            addItem={addItem}
          />

          {visibleItems < menuItems.length && (
            <Button variant="see-more" onClick={this.handleSeeMore}>
              See more
            </Button>
          )}
        </section>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { MenuContent } from '../../components/MenuContent/MenuContent';

export class MenuPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
  }

  addItem = (item, quantity = 1) => {
    this.setState((prevState) => {
      const existingItem = prevState.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        return {
          cartItems: prevState.cartItems.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + quantity }
              : cartItem
          ),
        };
      } else {
        return {
          cartItems: [...prevState.cartItems, { ...item, quantity }],
        };
      }
    });
  };

  getTotalCount = () => {
    const { cartItems } = this.state;
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  render() {
    const { cartItems } = this.state;
    const cartCount = this.getTotalCount();

    return (
      <div>
        <Header cartCount={cartCount} />
        <MenuContent cartItems={cartItems} addItem={this.addItem} />
        <Footer />
      </div>
    );
  }
}

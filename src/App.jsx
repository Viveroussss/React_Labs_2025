import React, { Component } from 'react';
import { MenuPage } from './pages/MenuPage/MenuPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
  }

  addItem = (item, quantity = 1) => {
    this.setState((prevState) => {
      const existingItem = prevState.cartItems.find((cartItem) => cartItem.id === item.id);
  
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
  
  render() {
    return (
      <MenuPage
        cartItems={this.state.cartItems}
        addItem={this.AddItem}
      />
    );
  }
}

export default App;
import './Button.css'
import React, { Component } from 'react';

export class Button extends Component {
  render() {
    const { children, variant = 'default', ...props } = this.props;

    return (
      <button className={`btn ${variant}`} {...props}>
        {children}
      </button>
    );
  }
}

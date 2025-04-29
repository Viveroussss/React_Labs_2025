import './Button.css';
import React from 'react';

export const Button = ({ children, variant = 'default', className = '', ...props }) => {
  return (
    <button className={`btn ${variant} ${className}`} {...props}>
      {children}
    </button>
  );
};

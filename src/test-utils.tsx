import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './store/cartSlice';
import menuReducer from './store/menuSlice';
import authReducer from './store/authSlice';

jest.mock('./assets/icons/icons', () => ({
  CartIcon: ({ className }: { className: string }) => (
    <div data-testid="cart-icon" className={className}>
      Cart Icon
    </div>
  ),
  Logo: ({ className }: { className: string }) => (
    <div data-testid="logo" className={className}>
      Logo
    </div>
  ),
}));

jest.mock('./components', () => ({
  Header: () => <div data-testid="header">Header</div>,
  Footer: () => <div data-testid="footer">Footer</div>,
}));

const createTestStore = (initialState = {}) => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      menu: menuReducer,
      auth: authReducer,
    },
    preloadedState: initialState,
  });
};

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  initialState?: any;
}

const AllTheProviders = ({ children, initialState = {} }: { children: React.ReactNode; initialState?: any }) => {
  const store = createTestStore(initialState);
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </Provider>
  );
};

const customRender = (
  ui: ReactElement,
  options: CustomRenderOptions = {}
) => {
  const { initialState, ...renderOptions } = options;
  
  return render(ui, {
    wrapper: ({ children }) => (
      <AllTheProviders initialState={initialState}>
        {children}
      </AllTheProviders>
    ),
    ...renderOptions,
  });
};

export * from '@testing-library/react';
export { customRender as render };
export { createTestStore }; 
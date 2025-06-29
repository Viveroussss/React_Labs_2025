import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { CartItem } from '../../../store/cartSlice';
import { CartPage } from '../CartPage';

jest.mock('../../../components', () => ({
  Header: () => <div data-testid="header">Header</div>,
  Footer: () => <div data-testid="footer">Footer</div>,
}));

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

const mockAlert = jest.fn();
global.alert = mockAlert;

const renderWithProviders = (component: React.ReactElement, initialState: { items: CartItem[]; total: number } = { items: [], total: 0 }) => {
  const store = configureStore({
    reducer: { cart: cartReducer },
    preloadedState: { cart: initialState },
  });
  return render(
    <Provider store={store}>
      <BrowserRouter>{component}</BrowserRouter>
    </Provider>
  );
};

describe('CartPage Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders empty cart message when cart is empty', () => {
    renderWithProviders(<CartPage />);
    expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
    expect(screen.getByText('Back to Menu')).toBeInTheDocument();
  });

  it('navigates to menu when back button is clicked in empty state', () => {
    renderWithProviders(<CartPage />);
    fireEvent.click(screen.getByText('Back to Menu'));
    expect(mockNavigate).toHaveBeenCalledWith('/menu');
  });

  it('renders cart items and total', () => {
    renderWithProviders(<CartPage />, { items: [ { id: '1', name: 'Pizza', price: 10, quantity: 2 } ], total: 20 });
    expect(screen.getByText('Pizza')).toBeInTheDocument();
    expect(screen.getByText('$ 10.00 USD')).toBeInTheDocument();
    expect(screen.getByText('Total:')).toBeInTheDocument();
    expect(screen.getByText('$ 20.00 USD')).toBeInTheDocument();
  });

  it('renders address form fields and submits order', () => {
    renderWithProviders(<CartPage />, { items: [ { id: '1', name: 'Test', price: 5, quantity: 1 } ], total: 5 });
    fireEvent.change(screen.getByLabelText('Street'), { target: { value: 'Main' } });
    fireEvent.change(screen.getByLabelText('House'), { target: { value: '1' } });
    fireEvent.click(screen.getByText('Order'));
    expect(mockAlert).toHaveBeenCalledWith('Order placed!');
  });
}); 
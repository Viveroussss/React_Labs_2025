import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { CartItem } from '../../../store/cartSlice';
import { Cart } from '../Cart';

jest.mock('../../../assets/icons/icons', () => ({
  CartIcon: ({ className }: { className: string }) => (
    <div data-testid="cart-icon" className={className}>
      Cart Icon
    </div>
  ),
}));

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

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

describe('Cart Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders cart button with icon', () => {
    renderWithProviders(<Cart />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByTestId('cart-icon')).toBeInTheDocument();
  });

  it('shows cart count when cart has items', () => {
    renderWithProviders(<Cart />, { items: [ { id: '1', name: 'Item 1', price: 10, quantity: 2 } ], total: 20 });
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('navigates to cart page when cart button is clicked', () => {
    renderWithProviders(<Cart />);
    fireEvent.click(screen.getByRole('button'));
    expect(mockNavigate).toHaveBeenCalledWith('/cart');
  });
}); 
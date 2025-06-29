import cartReducer, { addItem, removeItem, updateQuantity, clearCart, resetCart, CartItem } from '../cartSlice';

describe('Cart Slice', () => {
  const mockItem: CartItem = {
    id: '1',
    name: 'Test Item',
    price: 10.99,
    quantity: 1,
    image: 'test-image.jpg',
  };

  const mockItem2: CartItem = {
    id: '2',
    name: 'Test Item 2',
    price: 15.50,
    quantity: 2,
    image: 'test-image-2.jpg',
  };

  describe('Initial State', () => {
    it('should return initial state', () => {
      const initialState = cartReducer(undefined, { type: 'unknown' });
      expect(initialState).toEqual({
        items: [],
        total: 0,
      });
    });
  });

  describe('addItem', () => {
    it('should add a new item to cart', () => {
      const initialState = { items: [], total: 0 };
      const newState = cartReducer(initialState, addItem(mockItem));

      expect(newState.items).toHaveLength(1);
      expect(newState.items[0]).toEqual(mockItem);
      expect(newState.total).toBe(10.99);
    });

    it('should increase quantity when adding existing item', () => {
      const initialState = {
        items: [mockItem],
        total: 10.99,
      };
      const itemToAdd = { ...mockItem, quantity: 2 };
      const newState = cartReducer(initialState, addItem(itemToAdd));

      expect(newState.items).toHaveLength(1);
      expect(newState.items[0].quantity).toBe(3);
      expect(newState.total).toBe(32.97);
    });
  });

  describe('removeItem', () => {
    it('should remove item by id', () => {
      const initialState = {
        items: [mockItem, mockItem2],
        total: 41.99,
      };
      const newState = cartReducer(initialState, removeItem('1'));

      expect(newState.items).toHaveLength(1);
      expect(newState.items[0].id).toBe('2');
      expect(newState.total).toBe(31.00);
    });
  });

  describe('updateQuantity', () => {
    it('should update item quantity', () => {
      const initialState = {
        items: [mockItem],
        total: 10.99,
      };
      const newState = cartReducer(initialState, updateQuantity({ id: '1', quantity: 3 }));

      expect(newState.items[0].quantity).toBe(3);
      expect(newState.total).toBe(32.97);
    });

    it('should remove item when quantity is set to 0', () => {
      const initialState = {
        items: [mockItem],
        total: 10.99,
      };
      const newState = cartReducer(initialState, updateQuantity({ id: '1', quantity: 0 }));

      expect(newState.items).toHaveLength(0);
      expect(newState.total).toBe(0);
    });
  });

  describe('clearCart', () => {
    it('should clear all items and reset total', () => {
      const initialState = {
        items: [mockItem, mockItem2],
        total: 41.99,
      };
      const newState = cartReducer(initialState, clearCart());

      expect(newState.items).toHaveLength(0);
      expect(newState.total).toBe(0);
    });
  });

  describe('resetCart', () => {
    it('should clear cart', () => {
      const initialState = {
        items: [mockItem],
        total: 10.99,
      };
      const newState = cartReducer(initialState, resetCart());

      expect(newState.items).toHaveLength(0);
      expect(newState.total).toBe(0);
    });
  });
}); 
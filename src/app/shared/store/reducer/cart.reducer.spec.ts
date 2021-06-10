import { cartReducer, State } from './cart.reducer';
import { addProduct, deleteProduct } from '../actions/cart.actions';
import { mockCart } from 'src/app/mock/constants/cart.mock';

describe('CartReducer', () => {
  let initialState: State = {
    cart: [{ product: { ...mockCart.product }, quantity: 2 }],
  };
  it('should add item to cart state', () => {
    const mockCartItem = {
      product: { ...mockCart.product },
      quantity: 2,
    };
    const cartItem = cartReducer(undefined, addProduct(mockCartItem)).cart[0];
    expect(cartItem.quantity).toEqual(2);
  });

  it('should increase item quantity to if item is already in cart', () => {
    const cartItem = cartReducer(initialState, addProduct({ ...mockCart }))
      .cart[0];
    expect(cartItem.quantity).toEqual(3);
  });

  it('should descrease item quantity by one  if item is already in cart', () => {
    const expected: State = {
      cart: [{ product: { ...mockCart.product }, quantity: 1 }],
    };
    const cartItem = cartReducer(
      initialState,
      deleteProduct({ id: mockCart.product.id })
    );
    expect(cartItem.cart[0].quantity).toEqual(expected.cart[0].quantity);
  });

  it('should delete item from cart when quantity of cart item is 1', () => {
    const initialState: State = {
      cart: [
        {
          product: { ...mockCart.product },
          quantity: 1,
        },
      ],
    };
    const cartItem = cartReducer(
      initialState,
      deleteProduct({ id: initialState.cart[0].product.id })
    ).cart.length;
    expect(cartItem).toEqual(0);
  });

  it('should return same state on deleteProduct action if product is not in cart', () => {
    const initialState: State = {
      cart: [],
    };
    expect(
      cartReducer(initialState, deleteProduct({ id: mockCart.product.id }))
    ).toEqual(initialState);
  });
});

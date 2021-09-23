import { ProductsList } from "models/products";
import { createSelector, Selector } from "reselect";
import { IState } from "store/interfaces";
import { ICartError, ICartLoading, ICartState } from "../reducers/reducer";

const cartSelect = (state: IState): ICartState => state.cart;

const selectCartItems: Selector<IState, ProductsList> = createSelector(cartSelect, (cart) => cart.cartItems);

const selectShowCart: Selector<IState, Boolean> = createSelector(cartSelect, (cart) => cart.showCart);

const selectLoading: Selector<IState, ICartLoading> = createSelector(cartSelect, (cart) => cart.loading);

const selectError: Selector<IState, ICartError> = createSelector(cartSelect, (cart) => cart.error);

export const CartSelectors = { selectCartItems, selectShowCart, selectLoading, selectError };

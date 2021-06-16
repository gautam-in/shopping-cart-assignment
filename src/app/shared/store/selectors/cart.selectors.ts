import { createFeatureSelector } from '@ngrx/store';
import { CartState } from '../../models/cart-state.model';

export const selectCartState = createFeatureSelector<CartState>('cart');

import { Action, createAction, props } from '@ngrx/store';
import { ICartItem } from '../shared/models/cart-item.model';

export const addProduct = createAction('Add Product', props<ICartItem>());
export const deleteProduct = createAction(
  'Delete Product',
  props<{ id: string }>()
);

import { createAction, props } from '@ngrx/store';
import { ICartItem } from 'src/app/shared/models/cart-item.model';

export const addProduct = createAction('[cart] Add Product', props<ICartItem>());
export const deleteProduct = createAction(
  '[cart] Delete Product',
  props<{ id: string }>()
);

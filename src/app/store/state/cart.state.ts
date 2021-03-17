import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {tap} from 'rxjs/operators';

import {CartModel} from '../../models/cart.model';
import {ProductModel} from '../../models/product-model';
import {ShoppingService} from '../../services/shopping/shopping.service';
import {AddQuantity, AddToCart, CloseCart, DeleteQuantity, FilterProducts, GetAllProducts, ToggleCart} from '../actions/cart.action';

export interface CartStateModel {
  allProducts: ProductModel[];
  filteredProducts: ProductModel[];
  cartProducts: CartModel[];
  cartStatus: boolean;
}

@State<CartStateModel>({
  name: 'cart',
  defaults: {
    allProducts: [],
    filteredProducts: [],
    cartProducts: [],
    cartStatus: false,
  }
})

@Injectable()
export class CartState {
  constructor(private shoppingService: ShoppingService) {
  }

  @Selector()
  static activeProducts(state: CartStateModel) {
    return state.filteredProducts;
  }

  @Selector()
  static cartQuantity(state: CartStateModel) {
    return state.cartProducts
      .map(({quantity}) => quantity)
      .reduce((quantity, currentValue) => quantity + currentValue, 0);
  }

  @Selector()
  static cartProducts(state: CartStateModel) {
    return state.cartProducts;
  }

  @Selector()
  static cartStatus(state: CartStateModel) {
    return state.cartStatus;
  }

  @Selector()
  static totalAmount(state: CartStateModel) {
    return state.cartProducts
      .reduce((accumulator, currentItem) => (currentItem.price * currentItem.quantity) + accumulator, 0);
  }

  @Action(GetAllProducts)
  getAllProducts({patchState}: StateContext<CartStateModel>) {
    return this.shoppingService.getAllProducts().pipe(
      tap(products => {
        patchState({
          allProducts: products,
          filteredProducts: products
        });
      })
    );
  }

  @Action(FilterProducts)
  filterProducts({getState, patchState}: StateContext<CartStateModel>, payload: FilterProducts) {
    patchState({
      filteredProducts: getState().allProducts
        .filter(product => product.category === payload.id || payload.id === '')
    });
  }

  @Action(AddToCart)
  addToCart(ctx: StateContext<CartStateModel>, payload: AddToCart) {
    this.shoppingService.addToCart(payload.product.id).subscribe(_ => {
      const existingProductIndex = ctx.getState().cartProducts.findIndex(({id}) => id === payload.product.id);
      if (existingProductIndex > -1) {
        this.addQuantityToIndex(ctx, existingProductIndex);
      } else {
        ctx.patchState({
          cartProducts: [
            ...ctx.getState().cartProducts,
            {
              name: payload.product.name,
              imageURL: payload.product.imageURL,
              quantity: 1,
              id: payload.product.id,
              price: payload.product.price
            }
          ]
        });
      }
    });
  }

  @Action(ToggleCart)
  toggleCart({getState, patchState}: StateContext<CartStateModel>) {
    patchState({cartStatus: !getState().cartStatus});
  }

  @Action(CloseCart)
  closeCart({patchState}: StateContext<CartStateModel>) {
    patchState({cartStatus: false});
  }

  @Action(AddQuantity)
  addQuantity(ctx: StateContext<CartStateModel>, {itemId}: AddQuantity) {
    this.addQuantityToIndex(ctx, ctx.getState().cartProducts.findIndex(({id}) => id === itemId));
  }

  @Action(DeleteQuantity)
  deleteQuantity({getState, patchState}: StateContext<CartStateModel>, {itemId}: DeleteQuantity) {
    const existingProductIndex = getState().cartProducts.findIndex(({id}) => id === itemId);
    const cartProduct = {...getState().cartProducts[existingProductIndex]};
    if (cartProduct.quantity === 1) {
      patchState({cartProducts: [...getState().cartProducts.filter(({id}) => id !== itemId)]});
    } else {
      const updatedCartProduct = {
        ...getState().cartProducts[existingProductIndex],
        quantity: getState().cartProducts[existingProductIndex].quantity - 1
      };
      patchState({
        cartProducts: getState().cartProducts
          .map((product, index) => index === existingProductIndex ? updatedCartProduct : product),
      });
    }

  }

  addQuantityToIndex(ctx: StateContext<CartStateModel>, productIndex: number) {
    const updatedCartProduct = {
      ...ctx.getState().cartProducts[productIndex],
      quantity: ctx.getState().cartProducts[productIndex].quantity + 1
    };
    ctx.patchState({
      cartProducts: ctx.getState().cartProducts
        .map((product, index) => index === productIndex ? updatedCartProduct : product),
    });
  }
}

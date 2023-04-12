import { expect, describe, it, beforeEach } from "vitest"

import { addToCart, changeQuantity, removeItem } from "./cartActions"

import { CartState, CartItem, CartActionTypes } from "./models"

const cartItem: CartItem = {
  id: "1",
  imageURL: "",
  name: "test item",
  price: 100,
  quantity: 1,
}
let emptyCart: CartState
let cartWithItem: CartState

beforeEach(() => {
  emptyCart = { itemCount: 0, total: 0, items: [] }

  cartWithItem = {
    itemCount: 1,
    total: 100,
    items: [{ ...cartItem }],
  }
})

describe("Cart Actions", () => {
  it("should add item to cart when item is added to cart", () => {
    const cart = emptyCart

    const result = addToCart(cart, {
      type: CartActionTypes.ADD_ITEM,
      payload: cartItem,
    })

    expect(result).toEqual(cartWithItem)
  })

  it("should increase quantity of existing item when same item is added", () => {
    const cart = cartWithItem

    const result = addToCart(cart, {
      type: CartActionTypes.ADD_ITEM,
      payload: cartItem,
    })

    expect(result).toEqual({
      itemCount: 2,
      total: 200,
      items: [{ ...cartItem }],
    })
  })

  it("should increase quantity of existing item when delta is +1", () => {
    const cart = cartWithItem

    const result = changeQuantity(cart, {
      type: CartActionTypes.CHANGE_QUANTITY,
      payload: { product: { ...cartItem }, delta: 1 },
    })

    expect(result).toEqual({
      itemCount: 2,
      total: 200,
      items: [{ ...cartItem, quantity: 2 }],
    })
  })

  it("should decrease quantity of existing item when delta is -1", () => {
    const cart = cartWithItem

    const result = changeQuantity(cart, {
      type: CartActionTypes.CHANGE_QUANTITY,
      payload: { product: { ...cartItem }, delta: -1 },
    })

    expect(result).toEqual(emptyCart)
  })

  it("should remove item from cart", () => {
    const cart = cartWithItem

    const result = removeItem(cart, {
      type: CartActionTypes.REMOVE_ITEM,
      payload: { product: { id: cartItem.id, price: cartItem.price } },
    })

    expect(result).toEqual(emptyCart)
  })
})

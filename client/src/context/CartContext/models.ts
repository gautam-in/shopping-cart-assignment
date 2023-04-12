export interface CartState {
  items: CartItem[]
  total: number
  itemCount: number
}

export interface CartItem {
  id: string
  name: string
  imageURL: string
  price: number
  quantity: number
}

export interface CartAction {
  type: CartActionTypes
  payload: any
}

export enum CartActionTypes {
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  CHANGE_QUANTITY = "CHANGE_QUANTITY",
}

export type CategoryType = {
  name: string;
  description: string;
  id: string;
  key: string;
  imageUrl: string;
  order: number;
};

export type BannerType = {
  id: string;
  isActive: boolean;
  order: number;
  bannerImageAlt: string;
  bannerImageUrl: string;
};

export type ProductType = {
  category: string;
  description: string;
  id: string;
  imageURL: string;
  name: string;
  price: number;
  sku: string;
  stock: number;
};

export interface CartItemType {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

export interface CartStateType {
  items: CartItemType[];
  total: number;
  itemCount: number;
}

export enum CartActionTypes {
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  UPDATE_QUANTITY = "UPDATE_QUANTITY",
}

export interface CartAction {
  type: CartActionTypes;
  payload: any;
}

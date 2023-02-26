export interface Product {
  name: string;
  imageURL: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  sku: string;
  id: string;
  count?: number;
}

export interface Offers {
  bannerImageUrl: string;
  bannerImageAlt: string;
  isActive: boolean;
  order: number;
  id: string;
}

export interface Category {
  name: string;
  key: string;
  description: string;
  enabled: boolean;
  order: number;
  imageUrl: string;
  id: string;
}

export interface User{
    name: string;
    email: string,
    password: string,
    id: number
  }
export interface UserReducerInterface {
  userId: number | null;
  userName: string | null;
  email: string | null;
  windowSize: number | null;
}

export interface ProductReducerInterface {
  products: Product[];
  categories: Category[];
  currentCategory: string | null;
}

export interface CartReducerInterface {
  cartList: any;
}

export interface OfferReducerInterface {
  offers: Offers[];
}

export interface ActionInterface {
  payload: any;
  type: string;
}

export interface GlobalReducerInterface {
  user: UserReducerInterface;
  offer: OfferReducerInterface;
  products: ProductReducerInterface;
  cart: CartReducerInterface;
}

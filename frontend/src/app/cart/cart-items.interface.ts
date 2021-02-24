import { ProductsListDTO } from './../products/models/products-list';
export interface CartItem {
    product: ProductsListDTO;
    count: number;
}
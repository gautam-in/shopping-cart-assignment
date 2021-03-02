import { ProductsListDTO } from '../products/models/products-list';
export interface CartItem extends ProductsListDTO {
    product: ProductsListDTO;
    count: number;
    totalPrice: number;
}
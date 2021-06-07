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
  pricePerQty?: number;
  totalAmount?: number; // total amount of product per quantity
}

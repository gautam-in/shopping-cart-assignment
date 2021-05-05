import { Injectable } from '@angular/core';
import { IProduct } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  totalProducts : IProduct[] =[];

  product_server_url = 'server/products/index.get.json';
  category_server_url = 'server/categories/index.get.json';

  constructor(
  ) {}

}

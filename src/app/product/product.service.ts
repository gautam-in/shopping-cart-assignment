import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModule } from './product.module';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  product: any = [];
  productId: any;
  category :any=[]
  result : any =[]
 
  product_server_url = 'server/products/index.get.json';
  category_server_url = 'server/categories/index.get.json';

  constructor(private _http: HttpClient) {
  }

 


 
}

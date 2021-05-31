import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { Products } from './../interfaces/products';
import { Banner } from './../interfaces/banner';
import { Category } from './../interfaces/category';

@Injectable({
  providedIn: 'root',
})
export class FetchProductsService {
  constructor(private http: HttpClient) {}

  cartProducts: any = [];
  allProducts: any = [];
  selectedCategory: any = [];
  private productList = new Subject<any>();
  private selectedList: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private cartProductList = new ReplaySubject<any>();

  port: string = 'http://localhost:3000';

  //GET method to get all banners for carousel
  getBanners = () => {
    return this.http.get<Banner>(`${this.port}` + '/banners');
  };

  //GET method to get all categories
  getCategories = () => {
    return this.http.get<Category>(`${this.port}` + '/categories');
  };

  //GET method to get all products
  getProducts = () => {
    this.http.get<Products>(`${this.port}` + '/products').subscribe((res) => {
      this.allProducts = res;
      this.productList.next(this.allProducts);
    });
    return this.productList.asObservable();
  };

  //POST method to add products to cart
  addProduct = (product: Products) => {
    this.http
      .post(`${this.port}` + '/addToCart', product.id)
      .subscribe((res) => {
        if (res) {
          this.cartProducts = product;
          this.cartProductList.next(this.cartProducts);
        } else {
          this.cartProducts = [];
        }
      });
  };

  //get products of selected category
  selectedCategoryProducts(categoryId: string) {
    console.log("I'm called");
    this.selectedCategory = this.allProducts.filter(
      (product: Products) => product.category === categoryId
    );

    this.selectedList.next(this.selectedCategory);
    return this.selectedList.asObservable();
  }

  //get all products added to cart
  getCartProduct(): Observable<any> {
    return this.cartProductList.asObservable();
  }
}

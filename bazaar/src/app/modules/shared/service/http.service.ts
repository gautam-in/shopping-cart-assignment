import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError,  } from 'rxjs/operators';
import { Categories } from '../Interface/categories';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url: string = 'http://localhost:5000/'
  constructor(private _http : HttpClient) { }

  getBannerService(){
    return this._http.get(this.url+'/banners');
  }

  getCategoriesService(){
    return this._http.get(this.url+'/categories').pipe(map((res: Categories[]) => res.sort((a, b) =>
    a.order > b.order ? 1 : b.order > a.order ? -1 : 0
  )));
  }

  getProductService() {
    return this._http.get(this.url + '/products');
  }

  addProductService(productId) {
    return this._http.post(this.url + '/addToCart', productId);
  }
}

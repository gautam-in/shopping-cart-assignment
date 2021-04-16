import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as environment from './../../environments/environment';
import { AuthState } from './../Store/actions/auth.state';
import { Banner } from './../models/banner.model';
import { Category } from './../models/category.model';
import { Product } from './../models/products.model';
import { User } from './../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class BackendInteractionService {
  hostUrl: string = '';
  constructor(private http: HttpClient) { }

  addParms(paramsObj: Array<any>) {
    let httpParams = new HttpParams();
    paramsObj.forEach(param => {
      httpParams = httpParams.set(param.key, param.value)
    });
    return {
      params: httpParams
    }
  }

  getBanners(): Observable<Banner[]> {
    this.hostUrl = environment.baseUrl + '/banners'
    return this.http.get<Banner[]>(this.hostUrl)
  }

  getCategories() {
    this.hostUrl = environment.baseUrl + '/categories'
    return this.http.get<Category[]>(this.hostUrl)
  }


  getProducts() {
    this.hostUrl = environment.baseUrl + '/products'
    return this.http.get<Product[]>(this.hostUrl)
  }

  signIn(userDetails: User) {
    this.hostUrl = environment.environment.authUrl + "signInWithPassword";
    let httpOptions = this.addParms([environment.firebaseAuthKey])
    return this.http.post<AuthState>(this.hostUrl, userDetails, httpOptions)
  }

  signUp(userDetails: User) {
    this.hostUrl = environment.environment.authUrl + "signUp";
    let httpOptions = this.addParms([environment.firebaseAuthKey])
    return this.http.post<AuthState>(this.hostUrl, userDetails, httpOptions)
  }

  addToCart(product: Product) {
    this.hostUrl = environment.baseUrl + '/addToCart';
    return this.http.post(this.hostUrl, product, {})
  }
}

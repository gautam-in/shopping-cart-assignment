import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as environment from 'src/environments/environment';
import { AuthState } from './auth/AuthState';
import { Banner } from './model/Banner.model';
import { Category } from './model/category.model';
import { Product } from './model/Products.model';
import { User } from './model/userModel';

@Injectable({
  providedIn: 'root'
})
export class BackendInteractionService {
  hostUrl : string = '';
  constructor(private http:HttpClient) { }

  getBanners():Observable<Banner[]>{
    this.hostUrl = environment.baseUrl + '/banners'
    return this.http.get<Banner[]>(this.hostUrl)
  }

  getCategories(){
    this.hostUrl = environment.baseUrl + '/categories'
    return this.http.get<Category[]>(this.hostUrl)
  }


  getProducts(){
    this.hostUrl = environment.baseUrl + '/products'
    return this.http.get<Product[]>(this.hostUrl)
  }

  signIn(userDetails:User){
    this.hostUrl = environment.environment.authUrl + "signInWithPassword";
    let httpOptions = this.addParms([environment.firebaseAuthKey])
    return this.http.post<AuthState>(this.hostUrl,userDetails,httpOptions)
  }

  signUp(userDetails:User){
    this.hostUrl = environment.environment.authUrl + "signUp";
    let httpOptions = this.addParms([environment.firebaseAuthKey])
    return this.http.post<AuthState>(this.hostUrl,userDetails,httpOptions)
  }

  addParms(paramsObj:Array<any>){
     let httpParams = new HttpParams();
     paramsObj.forEach(param => {
       httpParams = httpParams.set(param.key,param.value)
     });
     return  {
       params : httpParams
     }
  }

  addToCart(product:Product){
    this.hostUrl = environment.baseUrl + '/addToCart';
    return this.http.post(this.hostUrl,product,{})
  }
}

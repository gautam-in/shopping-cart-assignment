import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneralApiService {

  public selectedProductCategory: BehaviorSubject<any> = new BehaviorSubject(null);
  public selectedProducts: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get<any>(environment.url + 'getProducts');
  }

  getCategories(): Observable<any> {
    return this.http.get<any>(environment.url + 'getCategories');
  }

  getBanners(): Observable<any> {
    return this.http.get<any>(environment.url + 'getBanners');
  }
}

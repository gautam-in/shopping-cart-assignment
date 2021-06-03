import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Banners } from '../models/Banners';
import { Categories } from '../models/Categories';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(private httpClient: HttpClient) { }
  apiURL: string = environment.apiUrl;
  bannerUrl: string = `${this.apiURL}/banners`;
  categoriesUrl: string = `${this.apiURL}/categories`;
  categoryId = new Subject<string>();
  setCategoryId(value: string) {
    this.categoryId.next(value);
  }
  getBanners(): Observable<Banners[]> {
    return this.httpClient.get<Banners[]>(this.bannerUrl)
      .pipe(response => response);
  }
  getCategories(): Observable<Categories[]> {
    return this.httpClient.get<Categories[]>(this.categoriesUrl)
      .pipe(response => response);
  }
}

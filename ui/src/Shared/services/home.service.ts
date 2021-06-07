import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable,  } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Banners } from '../models/Banners';
import { Category } from '../models/Category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }
  bannerUrl: string = `${environment.apiUrl}/banners`;
  categoriesUrl: string = `${environment.apiUrl}/categories`;
  categoryId = new BehaviorSubject<any>(null);
  setCategoryId(value: string) {
    this.categoryId.next(value);
  }
  getBanners(): Observable<Banners[]> {
    return this.httpClient.get<Banners[]>(this.bannerUrl)
      .pipe(response => response);
  }
  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.categoriesUrl)
      .pipe(response => response);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Banner } from '../models/banner';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  baseUrl = environment.apiBaseUrl;
  bannersUrl = 'banners';
  categoriesUrl = 'categories';

  constructor(private http: HttpClient) {}

  getBanners(): Observable<Banner[]> {
    return this.http.get<Banner[]>(`${this.baseUrl}/${this.bannersUrl}`);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}/${this.categoriesUrl}`);
  }
}

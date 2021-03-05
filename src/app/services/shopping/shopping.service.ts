import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

import {CategoryModel} from '../../models/home/category.model';
import {BannersModel} from '../../models/home/banners.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  serverUrl = 'http://localhost:5000/';

  constructor(private httpClient: HttpClient) {
  }

  getAllBanners(): Observable<BannersModel[]> {
    return this.httpClient.get<BannersModel[]>(this.serverUrl + 'banners').pipe(
      tap(banners => banners.sort((banner, previousBanner) => banner.order - previousBanner.order))
    );
  }

  getAllCategories(): Observable<CategoryModel[]> {
    return this.httpClient.get<CategoryModel[]>(this.serverUrl + 'categories').pipe(
      tap(categories => categories.sort((category, previousCategory) => category.order - previousCategory.order))
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { Banner } from './model/Banner.model';
import { Category } from './model/category.model';

@Injectable({
  providedIn: 'root'
})
export class BackendInteractionService {
  hostUrl : string = '';
  constructor(private http:HttpClient) { }

  getBanners():Observable<Banner[]>{
    this.hostUrl = baseUrl + '/banners'
    return this.http.get<Banner[]>(this.hostUrl)
  }

  getCategories(){
    this.hostUrl = baseUrl + '/categories'
    return this.http.get<Category[]>(this.hostUrl)
  }
}

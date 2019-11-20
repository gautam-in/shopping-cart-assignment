import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategory } from './../models/Icategory';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private _url ="http://localhost:3000/categories";
  constructor(private _http: HttpClient) { }

  getCategories():Observable <ICategory[]>{
    return this._http.get<ICategory[]>(this._url);
  }
}

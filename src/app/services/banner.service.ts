import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBanner } from './../models/IBanner';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  private _url ="http://localhost:3000/banners";
  constructor(private http:HttpClient) { 
  }
  getBanner(): Observable<IBanner[]>{
    return this.http.get<IBanner[]>(this._url)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBanner } from '../models/banner.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  getAllBanners(): Observable<IBanner[]> {
    return this.httpClient.get<IBanner[]>(
      '../../assets/server/banners/index.get.json'
    );
  }
}

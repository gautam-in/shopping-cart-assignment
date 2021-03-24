import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Banner } from '../models/banner';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  baseUrl = environment.apiBaseUrl;
  bannersUrl = 'banners';

  constructor(private http: HttpClient) {}

  getBanners(): Observable<Banner[]> {
    return this.http.get<Banner[]>(`${this.baseUrl}/${this.bannersUrl}`);
  }
}

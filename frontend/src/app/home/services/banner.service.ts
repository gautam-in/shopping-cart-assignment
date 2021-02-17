import { BannerDTO } from './../models/banner-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseAPIPath } from 'src/constants';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private http: HttpClient) { }

  getBannersFromAPI$() {
    return this.http.get<BannerDTO[]>(`${baseAPIPath}/banners`);
  }
}

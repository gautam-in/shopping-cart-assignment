import { BannerDTO } from './../models/banner-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs/operators';
import { baseAPIPath } from 'src/config';

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  constructor(private http: HttpClient) {}
  
  bannersList$ = this.getBannersFromAPI$().pipe(shareReplay(1));

  private getBannersFromAPI$() {
    return this.http.get<BannerDTO[]>(`${baseAPIPath}/banners`);
  }
}

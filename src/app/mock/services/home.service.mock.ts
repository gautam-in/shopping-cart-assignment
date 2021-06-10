import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IBanner } from 'src/app/features/home/models/banner.model';
import { mockBanners } from '../banner.mock';

@Injectable({
  providedIn: 'root',
})
export class MockHomeService {
  constructor() {}

  getAllBanners(): Observable<IBanner[]> {
    return of(mockBanners);
  }
}

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { HomeService } from './home.service';

describe('HomeService', () => {
  let service: HomeService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient],
    });
    service = TestBed.inject(HomeService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getAllBanners method', (done: DoneFn) => {
    spyOn(httpClient, 'get').and.returnValue(of([]));
    service.getAllBanners().subscribe((value) => {
      expect(value).toEqual([]);
      done();
    });
  });
});

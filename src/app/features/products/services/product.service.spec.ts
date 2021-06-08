import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ProductService } from './product.service';

fdescribe('ProductService', () => {
  let service: ProductService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ProductService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getAllProducts method', (done: DoneFn) => {
    spyOn(httpClient, 'get').and.returnValue(of([]));
    service.getAllProducts().subscribe((value) => {
      expect(value).toEqual([]);
      done();
    });
  });
});

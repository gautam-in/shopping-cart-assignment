import { TestBed } from '@angular/core/testing';

import { FetchProductsService } from './fetch-products.service';

describe('FetchProductsService', () => {
  let service: FetchProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

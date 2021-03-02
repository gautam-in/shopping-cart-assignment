import { TestBed } from '@angular/core/testing';

import { ProductsDataService } from './products-data.service';

describe('ProductsDataService', () => {
  let service: ProductsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

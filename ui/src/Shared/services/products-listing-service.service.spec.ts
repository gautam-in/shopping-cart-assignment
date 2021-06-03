import { TestBed } from '@angular/core/testing';

import { ProductsListingServiceService } from './products-listing-service.service';

describe('ProductsListingServiceService', () => {
  let service: ProductsListingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsListingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

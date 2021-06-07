import { TestBed } from '@angular/core/testing';

import { ProductsListingService } from './products-listing.service';

describe('ProductsListingServiceService', () => {
  let service: ProductsListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

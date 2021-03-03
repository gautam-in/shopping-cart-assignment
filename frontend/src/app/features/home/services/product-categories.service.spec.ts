import { TestBed } from '@angular/core/testing';

import { ProductCategoriesService } from './product-categories.service';

describe('ProductCategoriesService', () => {
  let service: ProductCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

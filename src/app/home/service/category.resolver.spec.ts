import { TestBed } from '@angular/core/testing';

import { CategoryResolver } from './category.resolver';

describe('CategoryResolver', () => {
  let resolver: CategoryResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CategoryResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

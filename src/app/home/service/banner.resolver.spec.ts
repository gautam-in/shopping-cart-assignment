import { TestBed } from '@angular/core/testing';

import { BannerResolver } from './banner.resolver';

describe('BannerResolver', () => {
  let resolver: BannerResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(BannerResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

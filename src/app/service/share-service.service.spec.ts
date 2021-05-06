import { TestBed } from '@angular/core/testing';

import { ShareServiceService } from './share-service.service';

describe('ShareServiceService', () => {
  let service: ShareServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

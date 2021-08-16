import { TestBed } from '@angular/core/testing';

import { SibService } from './sib.service';

describe('SibService', () => {
  let service: SibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

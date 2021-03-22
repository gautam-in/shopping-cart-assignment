import { TestBed } from '@angular/core/testing';

import { BackendInteractionService } from './backend-interaction.service';

describe('BackendInteractionService', () => {
  let service: BackendInteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendInteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

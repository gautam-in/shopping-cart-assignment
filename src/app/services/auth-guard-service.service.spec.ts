import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuardServiceService } from './auth-guard-service.service';
import { InMemoryDataService } from './in-memory-data.service';

describe('AuthGuardServiceService', () => {
  let service: AuthGuardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      providers: [InMemoryDataService]
    });
    service = TestBed.inject(AuthGuardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

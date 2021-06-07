import { TestBed } from '@angular/core/testing';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxUiLoaderModule]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { GlobalErrorHandler } from './global-error-handler.service';


describe('GlobalErrorHandler', () => {
  beforeEach(() => TestBed.configureTestingModule({
      providers:[ GlobalErrorHandler ]
  }));

  it('should be created', () => {
    const service: GlobalErrorHandler = TestBed.get(GlobalErrorHandler);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { ValidationService } from './validation.service';
import { ConstantsService } from './constants.service';



describe('ValidationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      providers:[ConstantsService]
  }));

  it('should be created', () => {
    const service: ValidationService = TestBed.get(ValidationService);
    expect(service).toBeTruthy();
  });
});

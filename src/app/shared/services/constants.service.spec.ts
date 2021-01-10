import { TestBed } from '@angular/core/testing';
import { ConstantsService } from './constants.service';



describe('ConstantsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers:[ConstantsService]
  }));

  it('should be created', () => {
    const service: ConstantsService = TestBed.get(ConstantsService);
    expect(service).toBeTruthy();
  });
});

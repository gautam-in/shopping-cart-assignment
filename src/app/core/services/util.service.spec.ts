import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UtilService } from './util.service';

describe('UtilService', () => {
  let service: UtilService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilService],
      imports: [MatSnackBarModule, BrowserAnimationsModule],
    });
    service = TestBed.inject(UtilService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it('should call openSnackBar ', () => {
    service.openSnackBar('Hi There', '');
    expect(document.querySelector('snack-bar-container')).toBeTruthy();
  });
});

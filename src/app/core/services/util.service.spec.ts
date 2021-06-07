import { TestBed } from '@angular/core/testing';

import { UtilService } from './util.service';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('UtilService', () => {
  let service: UtilService;

  beforeEach(() => {
    const a = setup().default();
    TestBed.configureTestingModule({}).configureTestingModule({ providers: [{ provide: MatSnackBar, useValue: a.snackBar }] });
    service = TestBed.inject(UtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
    it('when openSnackBar is called it should', () => {
        // arrange
        const { build } = setup().default();
        const u = build();
        // act
        u.openSnackBar();
        // assert
        // expect(u).toEqual
    });
});

function setup() {
    const snackBar = autoSpy(MatSnackBar);
    const builder = {
        snackBar,
        default() {
            return builder;
        },
        build() {
            return new UtilService(snackBar);
        }
    }
    return builder;
}
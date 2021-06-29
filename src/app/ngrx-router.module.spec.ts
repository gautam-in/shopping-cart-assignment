import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { NgrxRouterStoreModule } from './ngrx-router.module';

describe('NgrxRouterStoreModule', () => {
  let pipe: NgrxRouterStoreModule;

  beforeEach(() => {
    const routerStub = () => ({});
    TestBed.configureTestingModule({
      providers: [
        NgrxRouterStoreModule,
        { provide: Router, useFactory: routerStub },
      ],
    });
    pipe = TestBed.inject(NgrxRouterStoreModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});

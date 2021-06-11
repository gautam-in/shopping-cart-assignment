import { TestBed } from '@angular/core/testing';
import { HomeModule } from './home.module';

describe('HomeModule', () => {
  let pipe: HomeModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [HomeModule] });
    pipe = TestBed.inject(HomeModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});

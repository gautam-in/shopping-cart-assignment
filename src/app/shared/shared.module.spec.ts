import { TestBed } from '@angular/core/testing';
import { SharedModule } from './shared.module';

describe('SharedModule', () => {
  let pipe: SharedModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [SharedModule] });
    pipe = TestBed.inject(SharedModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { CoreModule } from './core.module';

describe('CoreModule', () => {
  let pipe: CoreModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CoreModule] });
    pipe = TestBed.inject(CoreModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});

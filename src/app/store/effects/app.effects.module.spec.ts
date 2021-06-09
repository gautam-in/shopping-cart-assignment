import { TestBed } from '@angular/core/testing';
import { AppEffectModule } from './app.effects.module';

describe('AppEffectModule', () => {
  let pipe: AppEffectModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [AppEffectModule] });
    pipe = TestBed.inject(AppEffectModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});

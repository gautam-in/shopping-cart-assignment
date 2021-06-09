import { TestBed } from '@angular/core/testing';
import { AppServerModule } from './app.server.module';

describe('AppServerModule', () => {
  let pipe: AppServerModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [AppServerModule] });
    pipe = TestBed.inject(AppServerModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});

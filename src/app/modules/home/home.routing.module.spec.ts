import { TestBed } from '@angular/core/testing';
import { HomeRoutingModule } from './home.routing.module';

describe('HomeRoutingModule', () => {
  let pipe: HomeRoutingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [HomeRoutingModule] });
    pipe = TestBed.inject(HomeRoutingModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});

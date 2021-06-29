import { TestBed } from '@angular/core/testing';
import { CarouselModule } from './carousel.module';

describe('CarouselModule', () => {
  let pipe: CarouselModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CarouselModule] });
    pipe = TestBed.inject(CarouselModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});

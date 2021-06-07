import { AnimationBuilder } from '@angular/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselComponent } from './carousel.component';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async () => {
    const a = setup().default();
    await TestBed.configureTestingModule({
      declarations: [CarouselComponent],
    })
      .configureTestingModule({
        providers: [
          { provide: AnimationBuilder, useValue: a.builder },
          { provide: Object, useValue: a.platformId },
        ],
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('when next is called it should', () => {
    // arrange
    const { build } = setup().default();
    const c = build();
    // act
    c.next();
    // assert
    // expect(c).toEqual
  });
  it('when prev is called it should', () => {
    // arrange
    const { build } = setup().default();
    const c = build();
    // act
    c.prev();
    // assert
    // expect(c).toEqual
  });
  it('when goSlide is called it should', () => {
    // arrange
    const { build } = setup().default();
    const c = build();
    // act
    c.goSlide();
    // assert
    // expect(c).toEqual
  });
  it('when ngAfterViewInit is called it should', () => {
    // arrange
    const { build } = setup().default();
    const c = build();
    // act
    c.ngAfterViewInit();
    // assert
    // expect(c).toEqual
  });
  it('when stopRotation is called it should', () => {
    // arrange
    const { build } = setup().default();
    const c = build();
    // act
    c.stopRotation();
    // assert
    // expect(c).toEqual
  });
  it('when startRotation is called it should', () => {
    // arrange
    const { build } = setup().default();
    const c = build();
    // act
    c.startRotation();
    // assert
    // expect(c).toEqual
  });
  it('when ngOnDestroy is called it should', () => {
    // arrange
    const { build } = setup().default();
    const c = build();
    // act
    c.ngOnDestroy();
    // assert
    // expect(c).toEqual
  });
});

function setup() {
  const builder = autoSpy(AnimationBuilder);
  let platformId: Object;
  const builder = {
    builder,
    platformId,
    default() {
      return builder;
    },
    build() {
      return new CarouselComponent(builder, platformId);
    },
  };
  return builder;
}

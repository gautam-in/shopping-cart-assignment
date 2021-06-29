import {
  AnimationBuilder,
  AnimationFactory
} from '@angular/animations';
import {
  Component,
  DebugElement,
  ElementRef,
  NO_ERRORS_SCHEMA,
  PLATFORM_ID,
  QueryList
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { noop } from 'rxjs';
import { CarouselItemDirective } from '../carousel-item.directive';
import { CarouselComponent, CarouselItemElement } from './carousel.component';

@Component({
  template: `
    <div>Without Directive</div>
    <div class="carousel-item">Default</div>
    <carousel #carousel="carousel">
      <ng-container *ngFor="let item of banners; let i = index">
        <ng-container *carouselItem>
          <div class="item" title="Carousel Item {{ i }}">
            <img
              [src]="item.bannerImageUrl"
              [alt]="item.bannerImageAlt"
              [title]="item.bannerImageAlt"
            />
          </div>
        </ng-container>
      </ng-container>
    </carousel>
  `,
})
class TestComponent {
  banners = [
    {
      bannerImageUrl: 'assets/images/offers/offer1.jpg',
      bannerImageAlt: 'Independence Day Deal - 25% off on shampoo',
      isActive: true,
      order: 1,
      id: '5b6c38156cb7d770b7010ccc',
    },
  ];
}

describe('CarouselItemElement', () => {
  let fixture: ComponentFixture<TestComponent>;
  let elementsWithDirective: Array<DebugElement>;
  let bareElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [CarouselItemElement, TestComponent, CarouselComponent],
      providers: [],
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    elementsWithDirective = fixture.debugElement.queryAll(
      By.directive(CarouselItemElement)
    );
    bareElement = fixture.debugElement.query(By.css(':not(.carousel-item)'));
  });

  it('should have bare element', () => {
    expect(bareElement).toBeTruthy();
  });

  it('should have 1 element(s) with directive', () => {
    expect(elementsWithDirective.length).toBe(1);
  });
});

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        CarouselItemElement,
        TestComponent,
        CarouselComponent,
        CarouselItemDirective,
      ],
      providers: [
        CarouselItemElement,
        {
          provide: PLATFORM_ID,
          useValue: 'browser',
        },
        {
          provide: ElementRef,
          useValue: jasmine.createSpyObj(ElementRef, ['nativeElement']),
        },
        {
          provide: AnimationBuilder,
          useValue: jasmine.createSpyObj(AnimationBuilder, ['build']),
        },
      ],
    });
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`timing has default value`, () => {
    expect(component.timing).toEqual(`250ms ease-in`);
  });

  it(`showControls has default value`, () => {
    expect(component.showControls).toEqual(false);
  });

  it(`showIndicators has default value`, () => {
    expect(component.showIndicators).toEqual(true);
  });

  it(`currentSlide has default value`, () => {
    expect(component.currentSlide).toEqual(0);
  });
  it(`currentSlideIndex has default value`, () => {
    expect(component.currentSlideIndex).toEqual(0);
  });
  it(`carouselSlidelength has default value`, () => {
    expect(component.carouselSlidelength).toEqual(0);
  });

  it(`autoRotate has default value`, () => {
    expect(component.autoRotate).toEqual(true);
  });
  it(`nextDisabled has default value`, () => {
    expect(component.nextDisabled).toEqual(true);
  });
  it(`prevDisabled has default value`, () => {
    expect(component.prevDisabled).toEqual(true);
  });
  describe('ngAfterViewInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'startRotation').and.callThrough();
      component.ngAfterViewInit();
      if (component.items?.length > 1) {
        expect(component.startRotation).toHaveBeenCalled();
      } else {
        expect(component.startRotation).not.toHaveBeenCalled();
      }
    });
  });

  describe('startRotation', () => {
    it('makes expected calls', () => {
      spyOn(component, 'stopRotation').and.callThrough();
      spyOn(component, 'goSlide').and.callThrough();
      component.startRotation();
      if (component.items?.length > 1) {
        expect(component.stopRotation).toHaveBeenCalled();
        expect(component.goSlide).toHaveBeenCalled();
      } else {
        expect(component.stopRotation).not.toHaveBeenCalled();
        expect(component.goSlide).not.toHaveBeenCalled();
      }
    });
  });
  describe('goSlide slide index', () => {
    it('should  call gotoSlide', () => {
      let builder: any = TestBed.inject(AnimationBuilder);
      let af = jasmine.createSpyObj(AnimationFactory, ['create']);
      builder.build.and.returnValue(af);
      af.create.and.returnValue({ play: noop });
      component.carousel = new ElementRef(document.createElement('h1'));
      console.log(component.items);
      component.items = new QueryList<CarouselItemDirective>();
      component.goSlide(0);
      expect(builder.build).toHaveBeenCalled();
    });
  });
  describe('Next slide', () => {
    it('makes expected calls', () => {
      let builder: any = TestBed.inject(AnimationBuilder);
      let af = jasmine.createSpyObj(AnimationFactory, ['create']);
      builder.build.and.returnValue(af);
      af.create.and.returnValue({ play: noop });
      component.carousel = new ElementRef(document.createElement('h1'));
      component.items = new QueryList<CarouselItemDirective>();

      component.next();
      expect(builder.build).toHaveBeenCalled();
    });
  });

  describe('Prev slide', () => {
    it('makes expected calls', () => {
      let builder: any = TestBed.inject(AnimationBuilder);
      let af = jasmine.createSpyObj(AnimationFactory, ['create']);
      builder.build.and.returnValue(af);
      af.create.and.returnValue({ play: noop });
      component.carousel = new ElementRef(document.createElement('h1'));
      component.currentSlide = 1;
      component.items = new QueryList<CarouselItemDirective>();

      component.prev();
      expect(builder.build).toHaveBeenCalled();
    });
  });

  describe('ngOnDestroy', () => {
    it('makes expected calls', () => {
      spyOn(component, 'stopRotation').and.callThrough();
      component.ngOnDestroy();
      expect(component.stopRotation).toHaveBeenCalled();
    });
  });
});

import {
  animate,
  AnimationBuilder,
  AnimationFactory,
  AnimationPlayer,
  style,
} from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { interval, Subject, Subscription } from 'rxjs';
import { repeat, take, takeUntil } from 'rxjs/operators';
import { CarouselItemDirective } from '../carousel-item.directive';
@Directive({
  selector: '.carousel-item',
})
export class CarouselItemElement {}
@Component({
  selector: 'carousel',
  exportAs: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit, OnDestroy {
  @ContentChildren(CarouselItemDirective)
  items!: QueryList<CarouselItemDirective>;

  @ViewChildren(CarouselItemElement, { read: ElementRef })
  private itemsElements!: QueryList<ElementRef>;
  @ViewChild('carousel') private carousel!: ElementRef;
  @Input() timing = '250ms ease-in';
  @Input() showControls = false;
  @Input() showIndicators = true;
  private player!: AnimationPlayer;
  private itemWidth!: number;
  currentSlide = 0;
  carouselWrapperStyle = {};
  @Input()
  imageTimeout: number = 70 * 60;
  @Input() autoRotate: boolean = true;

  sub!: Subscription;
  constructor(
    private builder: AnimationBuilder,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  next() {
    if (this.currentSlide + 1 === this.items.length) return;
    this.currentSlide = (this.currentSlide + 1) % this.items.length;
    const offset = this.currentSlide * this.itemWidth;
    const myAnimation: AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }

  private buildAnimation(offset: number | string) {
    return this.builder.build([
      animate(this.timing, style({ transform: `translateX(-${offset}px)` })),
    ]);
  }

  prev() {
    if (this.currentSlide === 0) return;
    this.currentSlide =
      (this.currentSlide - 1 + this.items.length) % this.items.length;
    const offset = this.currentSlide * this.itemWidth;
    const myAnimation: AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }

  goSlide(currentSlide: number) {
    if (currentSlide < 0 || currentSlide > this.items.length) return;
    this.currentSlide = (currentSlide + this.items.length) % this.items.length;
    const offset = this.currentSlide * this.itemWidth;
    const myAnimation: AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }

  ngAfterViewInit() {
    // For some reason only here I need to add setTimeout, in my local env it's working without this.
    setTimeout(() => {
      this.itemWidth =
        this.itemsElements.first.nativeElement.parentElement.parentElement.getBoundingClientRect().width;
      this.carouselWrapperStyle = {
        width: `${this.itemWidth}px`,
      };
      this.startRotation();
    });
  }

  stopRotation() {
    if (this.sub) this.sub.unsubscribe();
  }

  startRotation() {
    if (
      this.autoRotate &&
      isPlatformBrowser(this.platformId) &&
      this.items.length > 1
    ) {
      this.stopRotation();
      this.sub = interval(this.imageTimeout)
        .pipe(take(this.items.length), repeat(Number.MAX_SAFE_INTEGER))
        .subscribe((index) => {
          this.goSlide(index);
        });
    }
  }

  ngOnDestroy() {
    this.stopRotation();
  }
}

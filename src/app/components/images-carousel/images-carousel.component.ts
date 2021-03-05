import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Observable, of} from 'rxjs';
import {NgbCarousel} from '@ng-bootstrap/ng-bootstrap';

import {BannersModel} from '../../models/home/banners.model';

@Component({
  selector: 'app-images-carousel',
  templateUrl: './images-carousel.component.html',
  styleUrls: ['./images-carousel.component.scss'],
})
export class ImagesCarouselComponent implements OnInit {

  @Input() banners: Observable<BannersModel[]> = of([]);
  @ViewChild('ngCarousel', { static: false }) ngCarousel = {} as NgbCarousel;

  constructor() {
  }

  ngOnInit(): void {
  }

  goToPrev(): void {
    this.ngCarousel.prev();
  }

  goToNext(): void {
    this.ngCarousel.next();
  }

}

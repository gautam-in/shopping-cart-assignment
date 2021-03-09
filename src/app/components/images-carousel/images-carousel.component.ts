import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {Observable, of} from 'rxjs';

import {BannersModel} from '../../models/banners.model';

@Component({
  selector: 'app-images-carousel',
  templateUrl: './images-carousel.component.html',
  styleUrls: ['./images-carousel.component.scss'],
})
export class ImagesCarouselComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    nav: true,
    navSpeed: 700,
    navText: [
      '<button class="prev-button">PREV</button>',
      '<button class="next-button">NEXT</button>'
    ],
    responsive: {
      0: {
        items: 1
      }
    }
  };
  @Input() banners: Observable<BannersModel[]> = of([]);

  constructor() {
  }

  ngOnInit(): void {
  }

}

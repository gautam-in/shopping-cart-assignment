import { Component, Input, OnInit } from '@angular/core';
import { Banners } from 'src/app/models/banners';

@Component({
  selector: 'app-caraousel',
  templateUrl: './caraousel.component.html',
  styleUrls: ['./caraousel.component.css'],
})
export class CaraouselComponent implements OnInit {
  @Input() caraouseldata: Banners[];
  slideIndex = 1;
  constructor() {}
  ngOnInit(): void {}
  currentSlide(n: number) {
    this.slideIndex = n;
  }
  // Next/previous controls
  plusSlides(n: number) {
    this.slideIndex += n;
    if (this.slideIndex > this.caraouseldata.length) {
      this.slideIndex = 1;
    }
    if (this.slideIndex < 1) {
      this.slideIndex = this.caraouseldata.length;
    }
  }
}

import { Component, HostListener, Input, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Banners } from 'src/Shared/models/Banners';
import { transpileModule } from 'typescript';

@Component({
  selector: 'app-carousel-banner',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements OnInit {
  currWinSize: any = window.innerWidth;
  isMobile: boolean = this.currWinSize < 768;
  isDesktop: boolean = this.currWinSize > 1024;
  constructor(private config: NgbCarouselConfig) {
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
    if (this.isMobile) {
      config.showNavigationArrows = false;
      config.showNavigationIndicators = false;
      config.keyboard = true;
      config.pauseOnHover = false;
    }
  }
  @Input() caraouselData: Banners[] = [];
  ngOnInit(): void {
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isDesktop = event.target.innerWidth > 1024;
    this.isMobile = event.target.innerWidth < 768;
    if (this.isMobile) {
      this.config.showNavigationArrows = false;
      this.config.showNavigationIndicators = false;
      this.config.keyboard = true;
      this.config.pauseOnHover = false;
    }
    if(this.isDesktop){
      this.config.showNavigationArrows = true;
      this.config.showNavigationIndicators = true;
      this.config.keyboard = false;
      this.config.pauseOnHover = true;
    }
  }

}

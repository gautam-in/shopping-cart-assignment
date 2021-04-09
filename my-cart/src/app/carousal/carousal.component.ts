import { Component, Input, OnInit } from '@angular/core';
import { Banner } from '../model/Banner.model';
import { Orientation } from '@ngmodule/material-carousel';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss']
})
export class CarousalComponent implements OnInit {
  public slidesList = new Array()
  public showContent = false;
  public parentHeight = 'auto';
  public timings = '250ms ease-in';
  public autoplay = true;
  public interval = 5000;
  public loop = true;
  public hideArrows = false;
  public hideIndicators = false;
  public color: ThemePalette = 'accent';
  public maxWidth = 'auto';
  public maintainAspectRatio = true;
  public proportion = 25;
  public slideHeight = '200px';
  public slides = this.slidesList.length;
  public overlayColor = '#00000040';
  public hideOverlay = false;
  public useKeyboard = true;
  public useMouseWheel = false;
  public orientation: Orientation = 'ltr';
  public log: string[] = [];

  @Input() set bannersList(banners: Banner[]) {
    this.slidesList = banners.map(banner => {
      return { image: 'assets' + banner.bannerImageUrl };
    })
  }

  constructor() { }

  ngOnInit(): void {

  }

}

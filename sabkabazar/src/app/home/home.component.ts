import { Component, OnInit } from '@angular/core';
import { IBanner } from '../models/banner.model';
import { IProduct } from '../models/product.model';
import { AppService } from '../services/app.service';
import { Slider } from 'ngx-slider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  slider!: Slider;
  banners!: IBanner[];
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getAllBanners().subscribe((banners) => {
      this.slider = new Slider();
      this.slider.config.loop = true;
      this.slider.config.showPreview = false;
      this.slider.config.transitionDuration = 1;
      this.slider.config.showNavigator = false;
      this.slider.config.showTitle = false;
      const sliders = banners.map((item) => ({
        src: '../../assets/' + item.bannerImageUrl,
      }));
      this.slider.items = sliders;
    });
  }
}

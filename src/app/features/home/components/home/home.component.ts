import { Component, OnInit } from '@angular/core';
import { IBanner } from '../../models/banner.model';
import { Slider } from 'ngx-slider';
import { ICategory } from '../../../../shared/models/category.model';
import { HomeService } from '../../services/home.service';
import { CategoryService } from 'src/app/shared/services/category.service';
import { config } from '../../config/slider.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  categories!: ICategory[];
  slider!: Slider;
  banners!: IBanner[];
  constructor(
    private homeService: HomeService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.categoryService
      .getAllCategories()
      .subscribe((categories: ICategory[]) => {
        this.categories = categories.filter((item: any) => item.enabled);
      });

    this.homeService.getAllBanners().subscribe((banners) => {
      this.slider = new Slider();
      this.slider.config = {
        ...this.slider.config,
        ...config,
      };
      const sliders = banners.map((item) => ({
        src: '../../assets/' + item.bannerImageUrl,
      }));
      this.slider.items = sliders;
    });
  }
}

import { BannerDTO } from '../../models/banner-dto';
import { ProductCategoryDTO } from '../../models/product-category-dto';
import { ProductCategoriesService } from '../../services/product-categories.service';
import { BannerService } from '../../services/banner.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  productCategories: ProductCategoryDTO[] = [];
  bannersList: BannerDTO[] = [];

  constructor(
    private readonly bannerService: BannerService,
    private readonly productCategoriesService: ProductCategoriesService
  ) {}

  ngOnInit(): void {
    
    this.productCategoriesService
      .getSortedCategories$()
      .subscribe((categories) =>
        categories.map((category) => {
          this.productCategories.push(category);
        })
      );
    
    this.bannerService
      .bannersList$
      .subscribe((banners) => banners.map(banner => this.bannersList.push(banner)));
  }
}

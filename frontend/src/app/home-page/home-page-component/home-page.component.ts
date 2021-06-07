import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/product.service';
import { Banner } from './../../interfaces/banner';
import { carouselConfig } from './../../ngx-carousel-config/carousel-config';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  allBanners: Banner[] = [];

  // ngx-carousel settings
  customOptions = carouselConfig;

  constructor(private fetchBanners: ProductsService, private router: Router) {}

  ngOnInit(): void {
    this.getAllBanners();
  }

  getAllBanners(): void {
    this.fetchBanners.getBanners().subscribe((res) => {
      if (res) {
        this.allBanners = res;
      }
    });
  }
}

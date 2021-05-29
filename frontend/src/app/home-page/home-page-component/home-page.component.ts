import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchProductsService } from 'src/app/services/fetch-products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  allBanners: any[] = [];
  allCategories: any[] = [];

  customOptions: any = {
    loop: true,
    autoplay: true,

    dots: true,
    navSpeed: 500,
    // center: true,
    items: 1,

    margin: 4,
    autoWidth: true,

    // responsiveClass: true,
    // responsive: {
    //   0: {
    //     items: 1,
    //     nav: true,
    //   },
    //   600: {
    //     items: 1,
    //     nav: true,
    //   },
    //   1000: {
    //     items: 2,
    //     nav: true,
    //     loop: false,
    //   },
    //   1500: {
    //     items: 3,
    //     nav: true,
    //     loop: false,
    //   },
    // },
    // nav: true,
  };

  constructor(
    private fetchBanners: FetchProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllBanners();
    this.getAllCategories();
  }

  getAllBanners(): void {
    this.fetchBanners.getBanners().subscribe((res: any) => {
      this.allBanners = res;
      console.log(this.allBanners);
    });
  }

  getAllCategories(): void {
    this.fetchBanners.getCategories().subscribe((res: any) => {
      this.allCategories = res;
      console.log(this.allCategories);
    });
  }

  navigateToExplore(): void {
    this.router.navigate(['/products']);
  }
}

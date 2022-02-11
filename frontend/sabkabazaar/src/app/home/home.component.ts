import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GeneralApiService } from '../services/general-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  banners: Array<any> = [];
  categories: Array<any> = [];

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

  constructor(private generalApiService: GeneralApiService) { }

  ngOnInit(): void {
    this.generalApiService.getBanners().subscribe(res => {
      this.banners = res;
      this.customOptions = { ...this.customOptions, loop: true, autoplay: false, autoplayTimeout: 1000, autoplayHoverPause: true, }
    })

    this.generalApiService.getCategories().subscribe(res => {
      this.categories = res.filter((c: any) => c.enabled).sort((a: any, b:any) => a.order - b.order);
    })
  }

  openProduct(category: any) {
    console.log(category);
  }
}

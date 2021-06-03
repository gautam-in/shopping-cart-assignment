import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Banners } from 'src/Shared/models/Banners';
import { Categories } from 'src/Shared/models/Categories';
import { HomeServiceService } from 'src/Shared/services/home-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  constructor(private homeService: HomeServiceService, private router: Router) { }
  bannerData: Banners[] = [];
  categoriesData: Categories[] = [];
  ngOnInit(): void {
    if (sessionStorage.getItem('isLoggedIn') && sessionStorage.getItem('isLoggedIn') === 'true') {
      this.getData();
    }
    else
      this.router.navigate(['login'])

  }
  getData() {
    this.homeService.getBanners().subscribe((response) => {
      this.bannerData = response;
    }, (errorResponse) => {
      console.log(errorResponse);
    });
    this.homeService.getCategories().subscribe((response) => {
      this.categoriesData = response;
    }, (errorResponse) => {
      console.log(errorResponse);
    });
  }
  OnExploreClick(id: string) {
    this.homeService.setCategoryId(id);
    this.router.navigate(['/products']);
  }
}

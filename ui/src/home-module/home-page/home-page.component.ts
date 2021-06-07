import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Banners } from 'src/Shared/models/Banners';
import { Category } from 'src/Shared/models/Category';
import { HomeService } from 'src/Shared/services/home.service';
import { LoginService } from 'src/Shared/services/login.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  constructor(private homeService: HomeService, private router: Router, private loginService: LoginService) { }
  bannerData: Banners[] = [];
  categoriesData: Category[] = [];
  isLoggedIn: boolean = false;
  ngOnInit(): void {
    this.loginService.checkLoggedIn().subscribe((response) => {
      this.isLoggedIn = response;
      if (this.isLoggedIn) {
        this.getData();
      }
      else {
        this.router.navigate(['login']);
      }
    });
  }
  getData() {
    this.homeService.getBanners().subscribe((response) => {
      this.bannerData = response;
    });
    this.homeService.getCategories().subscribe((response) => {
      this.categoriesData = response;
    });
  }
}

import { DataService } from './../Services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApidataService } from '../Services/apidata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bannerList;
  catagoryList;

  constructor(
    private _apiService: ApidataService,
    private _dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getBannerList();
    this.getCatagories();
  }

  getBannerList() {
    this._apiService.getBanners().subscribe(bannersResponse => {
      this.bannerList = bannersResponse;
    });
  }

  getCatagories() {
    this._apiService.getCatagories().subscribe(catagoriesResponse => {
      this._dataService.categoriesList = catagoriesResponse;
      this.catagoryList = catagoriesResponse;
    });
  }

  navigateToProducts(categoryId) {
    this.router.navigate(['/products']);
  }
}

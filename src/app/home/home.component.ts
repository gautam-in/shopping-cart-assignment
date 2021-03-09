import { ICategory } from './../model/category.model';
import { IBanner } from './../model/banner.model';
import { DataService } from '../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApidataService } from '../services/apidata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bannerList: IBanner[];
  catagoryList: ICategory[];

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

  navigateToProducts() {
    this.router.navigate(['/products']);
  }
}

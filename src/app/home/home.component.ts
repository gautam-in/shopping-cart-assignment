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
    private apiService: ApidataService,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getBannerList();
    this.getCatagories();
  }

  getBannerList(): void {
    this.apiService.getBanners().subscribe(bannersResponse => {
      this.bannerList = bannersResponse;
    });
  }

  getCatagories(): void {
    this.apiService.getCatagories().subscribe(catagoriesResponse => {
      this.dataService.categoriesList = catagoriesResponse;
      this.catagoryList = catagoriesResponse;
    });
  }

  navigateToProducts(): void {
    this.router.navigate(['/products']);
  }
}

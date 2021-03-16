import { ICategory } from './../model/category.model';
import { IBanner } from './../model/banner.model';
import { DataService } from '../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogueService } from '../services/catalogue.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bannerList: IBanner[];
  catagoryList: ICategory[];
  isErrorOccured: boolean = false;

  constructor(
    private catalogueService: CatalogueService,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getBannerList();
    this.getCatagories();
  }

  getBannerList(): void {
    this.catalogueService.getBanners().subscribe(bannersResponse => {
      this.bannerList = bannersResponse;
    }, error => {
      console.log('error occured', error)
      this.isErrorOccured = true;
    });
  }

  getCatagories(): void {
    this.catalogueService.getCatagories().subscribe(catagoriesResponse => {
      this.dataService.categoriesList = catagoriesResponse;
      this.catagoryList = catagoriesResponse;
    }, error => {
      console.log('error occured', error)
      this.isErrorOccured = true;
    });
  }

  navigateToProducts(): void {
    this.router.navigate(['/products']);
  }
}

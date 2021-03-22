import { Component, OnInit } from '@angular/core';
import { baseUrl } from 'src/environments/environment';
import { BackendInteractionService } from '../backend-interaction.service';
import { Banner } from '../model/Banner.model';
import { Category } from '../model/category.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bannerItems : Banner[] = [];
  categoryItems : Category[] = []
  constructor(private backendApi : BackendInteractionService) { }

  ngOnInit(): void {
    this.getBanners();
    this.getCaterories();
  }

  getBanners(){
    this.backendApi.getBanners().subscribe((bannersList:Banner[])=>{
      this.bannerItems = bannersList;
    },error=>{
    })
  }

  getCaterories(){
    this.backendApi.getCategories().subscribe((categoryList:Category[])=>{
      this.categoryItems = categoryList;
    },error=>{
    })
  }

}

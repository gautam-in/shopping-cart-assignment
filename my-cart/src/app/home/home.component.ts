import { Component, OnInit } from '@angular/core';
import { BackendInteractionService } from '../backend-interaction.service';
import { Banner } from '../model/Banner.model';
import { Category } from '../model/category.model';
import { Store } from '@ngrx/store';
import { AppState } from '../appState';
import * as productActions from './../products/productions-actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bannerItems : Banner[] = [];
  categoryItems : Category[] = []
  constructor(private backendApi : BackendInteractionService,private store:Store<AppState>) {}

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
    this.store.select("categories").subscribe(categories=>{
      this.categoryItems = categories['categories'];
      if(!this.categoryItems.length) this.store.dispatch(new productActions.FetchCategories());
    })
  }

}

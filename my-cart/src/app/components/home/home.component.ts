import { Component, OnInit } from '@angular/core';
import { BackendInteractionService } from '../../services/backend-interaction.service';
import { Banner } from '../../models/banner.model';
import { Category } from '../../models/category.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../Store/actions/app.state';
import * as productActions from '../../Store/actions/cart.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bannerItems: Banner[] = [];
  categoryItems: Category[] = []
  constructor(private backendApi: BackendInteractionService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.getBanners();
    this.getCaterories();
  }

  getBanners() {
    this.backendApi.getBanners().subscribe((bannersList: Banner[]) => {
      this.bannerItems = bannersList;
    }, error => {
    })
  }

  getCaterories() {
    this.store.select("categories").subscribe(categories => {
      this.categoryItems = categories['categories'];
      if (!this.categoryItems.length) this.store.dispatch(new productActions.FetchCategories());
    })
  }

}

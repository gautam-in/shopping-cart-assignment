import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SeoService } from '../services/seo.service';
import * as fromApp from '../store/app.reducer';
import * as fromBanner from './store/banner.reducer';
import * as fromCategory from './store/category.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  banners$!: Observable<fromBanner.State>;
  categories$!: Observable<fromCategory.State>;
  constructor(private store: Store<fromApp.AppState>, private seo: SeoService) {
    this.banners$ = this.store.select('banner');
    this.categories$ = this.store.select('categories');
  }

  ngOnInit(): void {
    this.seo.setMetaData(
      'Sabka Bazar | Home',
      'Ecommerce Store',
      'One Stop Solution for all daily needs'
    );
  }
}

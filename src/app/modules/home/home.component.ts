import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SeoService } from 'src/app/core/services/seo.service';
import { AppState } from 'src/app/models/app-state.model';
import { BannerState } from './models/banner-state.model';
import { CategoryState } from './models/category-state.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  banners$!: Observable<BannerState>;
  categories$!: Observable<CategoryState>;
  constructor(private store: Store<AppState>, private seo: SeoService) {
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

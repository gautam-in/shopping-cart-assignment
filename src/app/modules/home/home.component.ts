import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SeoService } from 'src/app/core/services/seo.service';
import { AppState } from 'src/app/models/app-state.model';
import { BannerState } from './models/banner-state.model';
import { CategoryState } from './models/category-state.model';
import { selectBannerState } from './store/selectors/banner.selectors';
import { selectCategoryState } from './store/selectors/category.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  banners$!: Observable<BannerState>;
  categories$!: Observable<CategoryState>;
  constructor(private store: Store<AppState>, private seo: SeoService) {
    this.banners$ = this.store.pipe(select(selectBannerState));
    this.categories$ = this.store.pipe(select(selectCategoryState));
  }

  ngOnInit(): void {
    this.seo.setMetaData(
      'Sabka Bazar | Home',
      'Ecommerce Store',
      'One Stop Solution for all daily needs'
    );
  }
}

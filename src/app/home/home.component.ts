import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
  constructor(private store: Store<fromApp.AppState>) {
    this.banners$ = this.store.select('banner');
    this.store.select('banner').subscribe((bannerState) => {
      console.log(bannerState);
    });
    this.categories$ = this.store.select('categories');
    this.store.select('categories').subscribe((categoryState) => {
      console.log(categoryState);
    });
  }

  ngOnInit(): void {}
  items = [{ title: 'Slide 1' }, { title: 'Slide 2' }, { title: 'Slide 3' }];

  addSlide() {
    this.items.push({
      title: `Slide 4`,
    });
  }
}

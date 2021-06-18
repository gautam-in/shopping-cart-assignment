import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from 'ng-mat-carousel';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Banner, Category } from '../interfaces';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  banners: Banner[] = [];
  categories$: Observable<Category[]> = of([]);

  constructor(readonly apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getBanners().pipe(take(1)).subscribe(banners => {
      this.banners = banners;
    });

    this.categories$ = this.apiService.getCategories()
      .pipe(map(categories => categories.filter(c => c.order > 0).sort((a, b) => a.order - b.order)));
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatCarousel, MatCarouselComponent } from 'ng-mat-carousel';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Banner, Category } from '../interfaces';
import { ApiService } from '../services/api.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  banners: Banner[] = [];
  categories$: Observable<Category[]> = of([]);

  constructor(
    readonly apiService: ApiService,
    readonly dataService: DataService,
    readonly router: Router) { }

  ngOnInit(): void {
    this.apiService.getBanners().pipe(take(1)).subscribe(banners => {
      this.banners = banners;
    });

    this.categories$ = this.apiService.getCategories()
      .pipe(map(categories => categories.filter(c => c.enabled).sort((a, b) => a.order - b.order)));
  }

  openProduct(category: Category) {
    this.dataService.setSelectedCategory(category);
    this.router.navigate(['products'])
  }
}

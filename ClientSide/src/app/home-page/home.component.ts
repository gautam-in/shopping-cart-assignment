import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Banners } from '../models/banners';
import { Categories } from '../models/Categories';
import { HomeService } from '../shared/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  caraouseldata: Banners[];
  categoriesData: Categories[];

  constructor(private dataService: HomeService) {}

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    const observables: [Observable<Banners[]>, Observable<Categories[]>] = [
      this.dataService.getBanners(),
      this.dataService.getCategories(),
    ];

    forkJoin(observables).subscribe(([caraouseldata, categoriesData]) => {
      this.caraouseldata = this.dataService.processData(caraouseldata);
      this.categoriesData = this.dataService.processData(categoriesData);
    });
  }
}

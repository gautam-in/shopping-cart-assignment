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

  slideIndex = 1;

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


  currentSlide(n: number) {
    this.slideIndex = n;
  }

  // Next/previous controls
  plusSlides(n: number) {
    this.slideIndex += n;
    if (this.slideIndex > this.caraouseldata.length) {
      this.slideIndex = 1;
    }
    if (this.slideIndex < 1) {
      this.slideIndex = this.caraouseldata.length;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { Banners } from 'src/app/models/banners';
import { Categories } from 'src/app/models/Categories';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  caraouseldata: Banners[];
  categoriesData: Categories[];

  constructor(private dataService: SharedService, 
    private productService:ProductServiceService) {}

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    const observables: [Observable<Banners[]>, Observable<Categories[]>] = [
      this.productService.getBanners(),
      this.productService.getCategories()
    ];

    forkJoin(observables).subscribe(([caraouseldata, categoriesData]) => {
      this.caraouseldata = this.dataService.processData(caraouseldata);
      this.categoriesData = this.dataService.processData(categoriesData);
    });
  }
}

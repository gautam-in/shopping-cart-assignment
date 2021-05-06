import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/shared/services/app.service';
import { ICategory } from 'src/models/category.model';

@Component({
  selector: 'app-product-nav',
  templateUrl: './product-nav.component.html',
  styleUrls: ['./product-nav.component.scss'],
})
export class ProductNavComponent implements OnInit {
  categoryList: ICategory[] = [];
  categories: ICategory[] = [];
  selectedValue: string = 'Select Category';
  selectedId: string;
  
  constructor(
    private _appService: AppService,
    private _route: Router
  ) {}

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories() {
    this._appService.getCatagories().subscribe((data : ICategory[]) => {
      this.categories = data;
      this.categoryList = this.categories.sort((a, b) => {
        return a.order - b.order;
      });
    });
  }

  getProductByCategory(id: String) {
   this._route.navigate(['/products', id]);
  }

  selectValue(catgory: ICategory) {
    this.selectedValue = catgory.name;
    this.selectedId = catgory.id;
  }
}

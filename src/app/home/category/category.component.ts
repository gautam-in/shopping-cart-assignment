import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/shared/services/app.service';
import { ICategory } from 'src/models/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories: ICategory[] = [];

  constructor(private _route: Router, private _appService: AppService) {}

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories() {
    this._appService.getCatagories().subscribe((Categories: ICategory[]) => {
      Categories.forEach((category) => {
        if (category.enabled) {
          this.categories.push(category);
        }
      });
      this.categories = this.categories.sort((a, b) => {
        return a.order - b.order;
      });
    });
  }

  exploreProduct(id: String): void {
    this._route.navigate(['/products', id]);
  }
}

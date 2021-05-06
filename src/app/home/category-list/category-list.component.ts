import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/shared/services/app.service';
import { ICategory } from 'src/models/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
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

 
}

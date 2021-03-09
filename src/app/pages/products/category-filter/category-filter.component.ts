import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable, of} from 'rxjs';

import {CategoryModel} from '../../../models/category.model';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss']
})
export class CategoryFilterComponent implements OnInit {

  @Input() activeCategory = '';
  @Input() categories: Observable<CategoryModel[]> = of([]);

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  updateCategory(id: string): void {
    if (this.activeCategory === id || id === '') {
      this.router.navigate(['/products']);
    } else {
      this.router.navigate(['/products'], {queryParams: {category: id}});
    }
  }
}

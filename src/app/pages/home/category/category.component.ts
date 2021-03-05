import {Component, Input, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';

import {CategoryModel} from '../../../models/home/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input() categoryDetails: CategoryModel = {} as CategoryModel;
  @Input() isLeftAlign = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}

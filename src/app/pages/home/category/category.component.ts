import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {CategoryModel} from '../../../models/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input() categoryDetails: CategoryModel = {} as CategoryModel;
  @Input() isLeftAlign = false;
  @Output() redirect: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  redirectToCategory(): void {
    this.redirect.emit();
  }

}

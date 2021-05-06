import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/models/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  @Input() category: ICategory;

  constructor(private _route : Router) {}

  ngOnInit(): void {}

  exploreProduct(id: String): void {
    this._route.navigate(['/products', id]);
  }
}

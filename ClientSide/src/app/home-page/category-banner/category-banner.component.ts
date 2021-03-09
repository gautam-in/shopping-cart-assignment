import { Component, Input, OnInit } from '@angular/core';
import { Categories } from 'src/app/models/Categories';

@Component({
  selector: 'app-category-banner',
  templateUrl: './category-banner.component.html',
  styleUrls: ['./category-banner.component.scss']
})
export class CategoryBannerComponent implements OnInit {
  @Input() categoriesData: Categories[];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Categories } from 'src/app/models/Categories';

@Component({
  selector: 'app-category-banner',
  templateUrl: './category-banner.component.html',
  styleUrls: ['./category-banner.component.css'],
})
export class CategoryBannerComponent implements OnInit {
  @Input() categoriesData: Categories[];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  OnExploreClick(id: string) {
    const navigationExtras: NavigationExtras = {
      state: { id },
    };
    this.router.navigate(['/plp'], navigationExtras);
  }
}

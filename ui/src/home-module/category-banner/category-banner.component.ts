import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/Shared/models/Category';
import { HomeService } from 'src/Shared/services/home.service';

@Component({
  selector: 'app-category-banner',
  templateUrl: './category-banner.component.html',
  styleUrls: ['./category-banner.component.sass']
})
export class CategoryBannerComponent implements OnInit {
  @Input() categoriesData: Category[] = [];
  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit(): void {
  }
  onExploreClick(id: string) {
    this.homeService.setCategoryId(id);
    this.router.navigate(['/products']);
  }
}

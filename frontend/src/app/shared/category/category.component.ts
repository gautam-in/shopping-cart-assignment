import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/product.service';
import { Category } from './../../interfaces/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  allCategories: Category[] = [];
  constructor(private router: Router, private fetchBanners: ProductsService) {}

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(): void {
    this.fetchBanners.getCategories().subscribe((res) => {
      if (res) {
        this.allCategories = res;
      }
    });
  }

  navigateToExplore(): void {
    this.router.navigate(['/products']);
  }
}

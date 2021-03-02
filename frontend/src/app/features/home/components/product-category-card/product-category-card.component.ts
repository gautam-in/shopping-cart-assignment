import { ProductCategoryDTO } from '../../models/product-category-dto';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-category-card',
  templateUrl: './product-category-card.component.html',
  styleUrls: ['./product-category-card.component.scss']
})
export class ProductCategoryCardComponent implements OnInit {

  @Input() categories: ProductCategoryDTO[] = [];
  constructor(private readonly router: Router) { }
  ngOnInit(): void {
  }

  goToProductsPage(categoryId: string) {
    this.router.navigate(['/products', categoryId]);
  }

}

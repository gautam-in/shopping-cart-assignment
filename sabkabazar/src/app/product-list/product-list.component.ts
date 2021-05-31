import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product.model';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass'],
})
export class ProductListComponent implements OnInit {
  constructor(private appService: AppService) {}
  categories!: any;
  products!: IProduct[];

  ngOnInit(): void {
    this.appService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });
    this.appService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }
}

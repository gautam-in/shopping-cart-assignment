import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../../data-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public productList: any;
  public SortCategeries: any;
  public products: any;
  private cartItems: any = [];
  private CategoryId = null;

  constructor(private dataService: DataServiceService, public router: Router) {
    this.CategoryId = this.router.getCurrentNavigation()?.extras.state?.id;
  }

  ngOnInit(): void {
    this.getProductsData();
    this.getCategoriesData();
    this.dataService.castProducts.subscribe(() => {
      this.filterItems(this.CategoryId);
    });
  }

  private getProductsData(): void {
    this.dataService.getProductList().subscribe((response) => {
      this.productList = response;
      this.products = this.productList;
      if ( this.CategoryId !== undefined ) {
        this.filterItems(this.CategoryId);
      }
    });
  }

  private getCategoriesData(): void {
    this.dataService.getCategories().subscribe((response) => {
      const categories: any = response;
      this.SortCategeries = categories.sort((a: any, b: any) => a.order - b.order);
    });
  }

  filterItems( id: any ): any{
    if (this.products?.length) {
      this.productList = this.products.filter((product: any) => {
        return product.category === id;
      });
    }
  }

  buyProduct(productId: any): void {
    if ( this.cartItems.indexOf(productId) === -1) {
      this.cartItems.push(productId);
      this.dataService.getCartList(this.cartItems);
    }
  }

  selectCategory(): void{
    const id = ( <HTMLInputElement> document.getElementById('categoryDropdown')).value;
    if ( id !== null || id !== '' ){
      this.filterItems(id);
    }
  }

}

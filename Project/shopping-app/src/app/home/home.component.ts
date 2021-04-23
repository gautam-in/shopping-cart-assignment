import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public offers: any;
  public categories: any;
  public SortCategeries: any;

  constructor( private dataService: DataServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getOffersData();
    this.getCategoriesData();
    this.loadImage();
  }

  private getOffersData(): void {
    this.dataService.getBanners().subscribe((response) => {
      this.offers = response;
    });
  }

  private getCategoriesData(): void {
    this.dataService.getCategories().subscribe((response) => {
      this.categories = response;
      this.SortCategeries = this.categories.sort((a: any, b: any) => a.order - b.order);
    });
  }

   exploreProducts(Itemid: any): void {
     this.dataService.getProducts();
     this.router.navigateByUrl('/products/productList', { state: { id: Itemid } });
  }
  loadImage() {
    this.dataService.loginImg().subscribe(result => {
      console.log(result)
    });
  }
  
}

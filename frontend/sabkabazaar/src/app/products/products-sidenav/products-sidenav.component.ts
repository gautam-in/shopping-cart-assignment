import { Component, OnInit } from '@angular/core';
import { GeneralApiService } from 'src/app/services/general-api.service';

@Component({
  selector: 'app-products-sidenav',
  templateUrl: './products-sidenav.component.html',
  styleUrls: ['./products-sidenav.component.sass']
})
export class ProductsSidenavComponent implements OnInit {
  categories: Array<any> = [];
  selectedProductCategory:any;
  constructor(private generalApiService: GeneralApiService) { }

  ngOnInit(): void {
    this.generalApiService.getCategories().subscribe(res => {
      this.categories = res.filter((c:any) => c.order > 0).sort((a: any, b: any) => a.order - b.order);
      if(!this.selectedProductCategory){
        this.selectProductCategory(this.categories[0]);
      }
    })

    this.generalApiService.selectedProductCategory.subscribe(res =>{
      this.selectedProductCategory = res;
    })
  }

  selectProductCategory(category: any){
    this.generalApiService.selectedProductCategory.next(category);
  }

}

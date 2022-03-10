import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalConstants } from '../global.constant';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  allProductData: Array<any> = [];
  filterdProductData: Array<any> = [];
  catgoryData: Array<any> = [];
  currentCategoryId: string | null = "";
  selectedCategoryName: string = ''
  constructor(private apiService: ApiService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((res) => {
      this.currentCategoryId = res.get('categoryId');
    })
  }

  ngOnInit(): void {
    this.apiService.getApi(GlobalConstants.PRODUCT).subscribe((res: any) => {
      this.allProductData = res;
      this.filterdProductData  = [...this.allProductData]
    });
    this.apiService.getApi(GlobalConstants.CATEGORY).subscribe((res: any) => {
      this.catgoryData = res;
      this.catgoryData.forEach(x => {
        x.enabled = true;
      })
      if(this.currentCategoryId && this.currentCategoryId !== null){
        const index = this.catgoryData.findIndex(x => x.id === this.currentCategoryId);
        this.filterData(this.catgoryData[index], index);
      }
    })
  }
  filterData(category: any, index: number){
    if(category.enabled){
      this.filterdProductData = this.allProductData.filter(x => x.category === category.id);
      this.selectedCategoryName = category.name;
      this.catgoryData.forEach((y, i) => {
        if(i === index){
          y.enabled = false
        } else {
          y.enabled = true
        }
      })
    } else {
      this.filterdProductData  = [...this.allProductData]
      this.catgoryData[index].enabled = true
      this.selectedCategoryName = '';
    }
  }

  addToCart(product: any){
    const payload = {
      productId: product.id
    }
    this.apiService.postApi(GlobalConstants.ADD_TO_CART, payload).subscribe((res: any) => {
      this.apiService.updateCartItems.next(product);
    })    
  }
}

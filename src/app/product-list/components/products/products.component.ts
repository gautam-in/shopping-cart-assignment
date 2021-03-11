import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { InMemoryDataService } from 'src/app/in-memory-data.service';
import { Cart } from 'src/app/util/cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  public $categoryData: Observable<any>;
  public productArray: any[] = [];
  public copyProductArray: any[] = [];
  active = false;
  cartData: Cart;
  cartArray: Cart[];
  totalCartCount: number;
  constructor(private inMemoryService: InMemoryDataService, private announcer: LiveAnnouncer, private titleService: Title, private router: Router) {
    this.active = true;
    this.titleService.setTitle('Product Listing Page');
      this.router.events.pipe(takeWhile(() => this.active)).subscribe((e: any) => {
        if (e instanceof NavigationEnd) {
          this.cartArray = [];
          this.totalCartCount = 0;
          this.getProductData();
        }
      });
   }

  ngOnInit(): void {
  }
  getProductData(){
    this.$categoryData = this.inMemoryService.getCategoryData();
    // tslint:disable-next-line: deprecation
    this.inMemoryService.productList().pipe(takeWhile(() => this.active)).subscribe((res) => {
      this.productArray = res;
      this.copyProductArray = res;
    })
  }
  filterProductData($event){
    console.log('$event ',$event);
    if (!$event.enabled){
        this.productArray = this.copyProductArray;
        this.announcer.announce('product listings are fetched');
      }else{
        this.productArray = this.copyProductArray.filter((product => $event.id === product.category));
        this.announcer.announce('listings are fetched');
      }
  }
  addToCart(product){

    // tslint:disable-next-line: deprecation
    this.inMemoryService.addToCart(product.id).pipe(takeWhile(() => this.active)).subscribe((res) => {
      // tslint:disable-next-line: no-string-literal
      if (res && res['status'] === '0'){
        this.announcer.announce(product.name + ' ' + 'added to cart');
        let cartCount = 0 ;
        let flag = false;
        this.cartArray = this.cartArray.filter((item) => {
        if (item && item.productId === product.id){
          item.count = item.count + 1;
          flag = true;
        }
        return item;
      })
        if (!flag){
      cartCount = cartCount + 1;
      this.totalCartCount += cartCount;
      console.log('product>>', product, cartCount, this.totalCartCount);
      const obj: Cart = {
          productId : product.id,
          count : cartCount,
          category: product.category,
          description: product.description,
          id: product.id,
          imageURL: product.imageURL,
          name: product.name,
          price: product.price,
          sku: product.sku,
          stock: product.stock
        };
      console.log('object>>',obj);
      this.cartArray.push(obj);
     }
     else{
      this.totalCartCount +=  1;
     }
        console.log('this.cartArray>>>', this.cartArray);
        this.inMemoryService.cartSubject.next({cartCount: this.totalCartCount, productArray: this.cartArray});

      }
    });
  }
  ngOnDestroy(): void {
    this.active = false;
  }
}

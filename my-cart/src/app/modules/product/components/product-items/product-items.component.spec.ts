import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ProductItemsComponent } from './product-items.component';
import { Component, Input } from '@angular/core';
import { Product } from 'src/app/model/products.model';
import { EllipsisPipe } from 'src/app/shared/pipes/elipsis-pipe/ellipsis.pipe';

@Component({
  selector: 'product-item',
  templateUrl: './../product-item/product-item.component.html',
  styleUrls: ['./../product-item/product-item.component.scss']
})
export class ProductItemStubComponengt {
  @Input() product!: Product;
}


describe('ProductItemsComponent', () => {
  let component: ProductItemsComponent;
  let fixture: ComponentFixture<ProductItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductItemsComponent, ProductItemStubComponengt, EllipsisPipe],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display one card for each product', () => {
    let products = [
      {
        category: "5b6899953d1a866534f516e2",
        description: "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
        id: "5b6c6a7f01a7c38429530883",
        imageURL: "/static/images/products/fruit-n-veg/kiwi-green.jpg",
        name: "Fresho Kiwi - Green, 3 pcs",
        price: 87,
        sku: "fnw-kiwi-3",
        stock: 50
      },
      {
        category: "5b6899953d1a866534f516e2",
        description: "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
        id: "5b6c6a7f01a7c38429530883",
        imageURL: "/static/images/products/fruit-n-veg/kiwi-green.jpg",
        name: "Fresho Kiwi - Green, 3 pcs",
        price: 87,
        sku: "fnw-kiwi-3",
        stock: 50
      }
    ]

    component.productList = products;
    fixture.detectChanges();
    let productItemList = fixture.debugElement.queryAll(By.directive(ProductItemStubComponengt));
    expect(productItemList.length).toBe(products.length);
  })
});

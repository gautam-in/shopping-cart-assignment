import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { of } from 'rxjs';

import { ProductCartComponent } from './product-cart.component';

const products = [
  {
    "name": "Fresho Kiwi - Green, 3 pcs",
    "imageURL": "/assets/images/products/fruit-n-veg/kiwi-green.jpg",
    "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
    "price": 87,
    "stock": 50,
    "category": "5b6899953d1a866534f516e2",
    "sku": "fnw-kiwi-3",
    "id": "5b6c6a7f01a7c38429530883",
    "count": 1,
  }
];

describe('ProductCartComponent', () => {
  let component: ProductCartComponent;
  let fixture: ComponentFixture<ProductCartComponent>;
  const dataService = jasmine.createSpyObj('DataService', ['setSelectedCategory']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCartComponent ],
      imports: [MatIconModule, MatButtonModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render product details if product list is empty', () => {
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('.cart-header h2').textContent).toContain('My Cart (0 item)');
    expect(compiled.querySelector('.no-items h3').textContent).toContain('No items in your cart');
    expect(compiled.querySelector('.no-items p').textContent).toContain('Your favourite itemsare just a click away');
    expect(compiled.querySelector('.cart-footer button').textContent).toContain('Start Shopping');
  });

  it('should render product details if product list is not empty', () => {
    component.products = products;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('.details h2').textContent).toContain('Fresho Kiwi - Green, 3 pcs');
    expect(compiled.querySelector('.details .price-details .product-count').textContent).toContain('1');
    expect(compiled.querySelector('.details .price-details .price').textContent).toContain('87');
    expect(compiled.querySelector('.details .price-details .total-price').textContent).toContain('87');
    expect(compiled.querySelector('.cart-footer button').textContent).toContain('Proceed to CheckoutRs187keyboard_arrow_right');
  });
});

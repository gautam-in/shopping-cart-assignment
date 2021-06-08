import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { ToastrModule } from 'ngx-toastr';
import { cartReducer } from 'src/app/features/cart/store/reducer/cart.reducer';
import { mockProduct } from '../mock/product.mock';

import { ProductItemComponent } from './product-item.component';

fdescribe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({ cartList: cartReducer }),
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
      ],
      declarations: [ProductItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('buy now should add product to cart', () => {
    component.addToCart(mockProduct);
    expect(component).toBeTruthy();
  });
});

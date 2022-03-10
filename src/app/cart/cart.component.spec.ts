import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      providers: [NgbActiveModal]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    component.cartItems = [{
      productId: 'default',
      name: 'Close Up Ever Fresh Red Hot Gel Toothpaste, 150 gm',
      imgUrl: '/static/images/products/beauty-hygiene/closeup.jpg',
      price: 82,
      qty: 5,
    }]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('verify add product qty', () => {
    const plusBtn = fixture.debugElement.query(By.css('button.plus-btn')).nativeElement;
    const minusBtn = fixture.debugElement.query(By.css('button.minus-btn')).nativeElement;
    plusBtn.click()
    fixture.detectChanges();
    expect(component.cartItems[0].qty).toEqual(6);
    minusBtn.click()
    fixture.detectChanges();
    expect(component.cartItems[0].qty).toEqual(5);
  });
});

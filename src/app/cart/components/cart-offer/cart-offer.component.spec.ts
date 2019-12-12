import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartOfferComponent } from './cart-offer.component';

describe('CartOfferComponent', () => {
  let component: CartOfferComponent;
  let fixture: ComponentFixture<CartOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

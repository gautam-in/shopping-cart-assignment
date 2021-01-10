import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartBtnComponent } from './cart-btn.component';

describe('CartBtnComponent', () => {
  let component: CartBtnComponent;
  let fixture: ComponentFixture<CartBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

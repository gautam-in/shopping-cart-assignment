import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCounterComponent } from './cart-counter.component';

describe('CartCounterComponent', () => {
  let component: CartCounterComponent;
  let fixture: ComponentFixture<CartCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

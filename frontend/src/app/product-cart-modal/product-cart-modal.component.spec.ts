import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCartModalComponent } from './product-cart-modal.component';

describe('ProductCartModalComponent', () => {
  let component: ProductCartModalComponent;
  let fixture: ComponentFixture<ProductCartModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCartModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCartModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

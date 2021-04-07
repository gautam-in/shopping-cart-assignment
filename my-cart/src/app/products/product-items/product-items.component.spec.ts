import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemsComponent } from './product-items.component';

describe('ProductItemsComponent', () => {
  let component: ProductItemsComponent;
  let fixture: ComponentFixture<ProductItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductItemsComponent ]
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
});

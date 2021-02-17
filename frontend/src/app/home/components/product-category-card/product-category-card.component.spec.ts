import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryCardComponent } from './product-category-card.component';

describe('ProductCategoryCardComponent', () => {
  let component: ProductCategoryCardComponent;
  let fixture: ComponentFixture<ProductCategoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCategoryCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

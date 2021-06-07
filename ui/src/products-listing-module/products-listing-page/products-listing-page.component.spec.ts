import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListingPageComponent } from './products-listing-page.component';

describe('ProductsListingPageComponent', () => {
  let component: ProductsListingPageComponent;
  let fixture: ComponentFixture<ProductsListingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsListingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

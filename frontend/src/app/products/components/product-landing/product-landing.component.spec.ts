import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLandingComponent } from './product-landing.component';

describe('ProductLandingComponent', () => {
  let component: ProductLandingComponent;
  let fixture: ComponentFixture<ProductLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

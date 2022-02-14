import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSidenavComponent } from './products-sidenav.component';

describe('ProductsSidenavComponent', () => {
  let component: ProductsSidenavComponent;
  let fixture: ComponentFixture<ProductsSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeveragesProductListComponent } from './beverages-product-list.component';

describe('BeveragesProductListComponent', () => {
  let component: BeveragesProductListComponent;
  let fixture: ComponentFixture<BeveragesProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeveragesProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeveragesProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

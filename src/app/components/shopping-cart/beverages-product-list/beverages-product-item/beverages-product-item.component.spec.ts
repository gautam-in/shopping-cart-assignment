import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeveragesProductItemComponent } from './beverages-product-item.component';

describe('BeveragesProductItemComponent', () => {
  let component: BeveragesProductItemComponent;
  let fixture: ComponentFixture<BeveragesProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeveragesProductItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeveragesProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeryProductItemComponent } from './bakery-product-item.component';

describe('BakeryProductItemComponent', () => {
  let component: BakeryProductItemComponent;
  let fixture: ComponentFixture<BakeryProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BakeryProductItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BakeryProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

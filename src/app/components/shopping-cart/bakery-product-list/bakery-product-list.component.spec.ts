import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeryProductListComponent } from './bakery-product-list.component';

describe('BakeryProductListComponent', () => {
  let component: BakeryProductListComponent;
  let fixture: ComponentFixture<BakeryProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BakeryProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BakeryProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

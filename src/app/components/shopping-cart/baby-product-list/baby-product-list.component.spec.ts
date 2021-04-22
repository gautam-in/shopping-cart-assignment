import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyProductListComponent } from './baby-product-list.component';

describe('BabyProductListComponent', () => {
  let component: BabyProductListComponent;
  let fixture: ComponentFixture<BabyProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabyProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

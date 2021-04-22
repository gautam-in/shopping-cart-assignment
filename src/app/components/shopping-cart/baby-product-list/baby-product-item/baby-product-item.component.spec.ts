import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyProductItemComponent } from './baby-product-item.component';

describe('BabyProductItemComponent', () => {
  let component: BabyProductItemComponent;
  let fixture: ComponentFixture<BabyProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabyProductItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

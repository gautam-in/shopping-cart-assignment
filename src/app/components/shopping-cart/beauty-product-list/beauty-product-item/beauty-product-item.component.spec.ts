import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyProductItemComponent } from './beauty-product-item.component';

describe('BeautyProductItemComponent', () => {
  let component: BeautyProductItemComponent;
  let fixture: ComponentFixture<BeautyProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautyProductItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeautyProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

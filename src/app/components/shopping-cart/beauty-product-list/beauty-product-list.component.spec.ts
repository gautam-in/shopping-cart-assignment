import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyProductListComponent } from './beauty-product-list.component';

describe('BeautyProductListComponent', () => {
  let component: BeautyProductListComponent;
  let fixture: ComponentFixture<BeautyProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautyProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeautyProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

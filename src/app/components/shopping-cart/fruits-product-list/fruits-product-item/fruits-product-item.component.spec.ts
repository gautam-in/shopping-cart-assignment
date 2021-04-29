import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsProductItemComponent } from './fruits-product-item.component';

describe('FruitsProductItemComponent', () => {
  let component: FruitsProductItemComponent;
  let fixture: ComponentFixture<FruitsProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitsProductItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitsProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

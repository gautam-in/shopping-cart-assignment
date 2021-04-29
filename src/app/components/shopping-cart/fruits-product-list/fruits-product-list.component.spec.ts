import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsProductListComponent } from './fruits-product-list.component';

describe('FruitsProductListComponent', () => {
  let component: FruitsProductListComponent;
  let fixture: ComponentFixture<FruitsProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitsProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitsProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

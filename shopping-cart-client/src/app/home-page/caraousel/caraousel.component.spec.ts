import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaraouselComponent } from './caraousel.component';

describe('CaraouselComponent', () => {
  let component: CaraouselComponent;
  let fixture: ComponentFixture<CaraouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaraouselComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaraouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

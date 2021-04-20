import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyItemComponent } from './baby-item.component';

describe('BabyItemComponent', () => {
  let component: BabyItemComponent;
  let fixture: ComponentFixture<BabyItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabyItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

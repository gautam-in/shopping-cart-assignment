import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyCartModalComponent } from './empty-cart-modal.component';

describe('EmptyCartModalComponent', () => {
  let component: EmptyCartModalComponent;
  let fixture: ComponentFixture<EmptyCartModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyCartModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyCartModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

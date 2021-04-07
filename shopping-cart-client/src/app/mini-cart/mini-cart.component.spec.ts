import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCartComponent } from './mini-cart.component';

describe('MiniCartComponent', () => {
  let component: MiniCartComponent;
  let fixture: ComponentFixture<MiniCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

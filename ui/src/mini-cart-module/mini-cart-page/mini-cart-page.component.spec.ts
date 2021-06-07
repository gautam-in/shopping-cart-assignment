import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCartPageComponent } from './mini-cart-page.component';

describe('MiniCartPageComponent', () => {
  let component: MiniCartPageComponent;
  let fixture: ComponentFixture<MiniCartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniCartPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

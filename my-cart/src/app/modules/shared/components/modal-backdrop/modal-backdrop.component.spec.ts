import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBackdropComponent } from './modal-backdrop.component';

describe('ModalBackdropComponent', () => {
  let component: ModalBackdropComponent;
  let fixture: ComponentFixture<ModalBackdropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBackdropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBackdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

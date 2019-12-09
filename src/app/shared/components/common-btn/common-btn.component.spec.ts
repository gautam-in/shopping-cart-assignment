import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonBtnComponent } from './common-btn.component';

describe('CommonBtnComponent', () => {
  let component: CommonBtnComponent;
  let fixture: ComponentFixture<CommonBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

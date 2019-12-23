import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipToMainComponent } from './skip-to-main.component';

describe('SkipToMainComponent', () => {
  let component: SkipToMainComponent;
  let fixture: ComponentFixture<SkipToMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkipToMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkipToMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

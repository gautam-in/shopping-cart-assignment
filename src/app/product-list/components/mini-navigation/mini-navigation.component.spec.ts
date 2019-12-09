import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniNavigationComponent } from './mini-navigation.component';

describe('MiniNavigationComponent', () => {
  let component: MiniNavigationComponent;
  let fixture: ComponentFixture<MiniNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryNavigationComponent } from './secondary-navigation.component';

describe('SecondaryNavigationComponent', () => {
  let component: SecondaryNavigationComponent;
  let fixture: ComponentFixture<SecondaryNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

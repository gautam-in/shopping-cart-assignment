import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniSecondaryNavComponent } from './mini-secondary-nav.component';

describe('MiniSecondaryNavComponent', () => {
  let component: MiniSecondaryNavComponent;
  let fixture: ComponentFixture<MiniSecondaryNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniSecondaryNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniSecondaryNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

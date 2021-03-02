import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipToMainContentComponent } from './skip-to-main-content.component';

describe('SkipToMainContentComponent', () => {
  let component: SkipToMainContentComponent;
  let fixture: ComponentFixture<SkipToMainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkipToMainContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkipToMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

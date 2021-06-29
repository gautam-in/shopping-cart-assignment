import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselItemDirective } from './carousel-item.directive';

@Component({
  template: `
    <div>Without Directive</div>
    <div *carouselItem>Default</div>
  `,
})
class TestComponent {}

describe('CarouselItemDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let elementsWithDirective: Array<DebugElement>;
  let bareElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [CarouselItemDirective, TestComponent],
      providers: [],
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    elementsWithDirective = fixture.debugElement.queryAll(
      By.directive(CarouselItemDirective)
    );
    bareElement = fixture.debugElement.query(By.css(':not([carouselItem])'));
  });

  it('should have bare element', () => {
    expect(bareElement).toBeTruthy();
  });

  it('should have 0 element(s) with directive', () => {
    expect(elementsWithDirective.length).toBe(0);
  });
});

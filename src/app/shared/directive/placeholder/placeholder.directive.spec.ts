import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PlaceholderDirective } from './placeholder.directive';

@Component({
  template: `
    <div>Without Directive</div>
    <div appPlaceholder>Default</div>
  `,
})
class TestComponent {}

describe('PlaceholderDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let elementsWithDirective: Array<DebugElement>;
  let bareElement: DebugElement;

  beforeEach(() => {
    const viewContainerRefStub = () => ({});
    TestBed.configureTestingModule({
      declarations: [PlaceholderDirective, TestComponent],
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    elementsWithDirective = fixture.debugElement.queryAll(
      By.directive(PlaceholderDirective)
    );
    bareElement = fixture.debugElement.query(By.css(':not([appPlaceholder])'));
  });

  it('should have bare element', () => {
    expect(bareElement).toBeTruthy();
  });

  it('should have 1 element(s) with directive', () => {
    expect(elementsWithDirective.length).toBe(1);
  });
});

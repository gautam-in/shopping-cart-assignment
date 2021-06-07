import { TemplateRef } from '@angular/core';
import { CarouselItemDirective } from './carousel-item.directive';

describe('CarouselItemDirective', () => {
  it('should create an instance', () => {
    // const directive = new CarouselItemDirective();
    // expect(directive).toBeTruthy();
  });
});

function setup() {
    const tpl = autoSpy(TemplateRef<any>);
    const builder = {
        tpl,
        default() {
            return builder;
        },
        build() {
            return new CarouselItemDirective(tpl);
        }
    }
    return builder;
}
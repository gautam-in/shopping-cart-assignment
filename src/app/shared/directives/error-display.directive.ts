import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appErrorDisplay]'
})
export class ErrorDisplayDirective {
  constructor(private eleRef:ElementRef, private renderer: Renderer2) { }
  


  @HostListener('mouseleave') onBlur(eventData: Event){
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('Hello world!');
    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.eleRef.nativeElement,div);
  }
}

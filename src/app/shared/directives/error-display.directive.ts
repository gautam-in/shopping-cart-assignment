import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appErrorDisplay]'
})
export class ErrorDisplayDirective {
  @Input() errorType:string;
  constructor(private eleRef:ElementRef, private renderer: Renderer2) { }
}

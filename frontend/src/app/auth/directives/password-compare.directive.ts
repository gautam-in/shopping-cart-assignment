import { Directive, ElementRef, HostListener, ViewChild } from '@angular/core';

@Directive({
  selector: '[appPasswordCompare]'
})
export class PasswordCompareDirective {

  @ViewChild('password', {static: true}) pass: any;
  @ViewChild('confirmPassword', {static: true}) confirmPass: any;
  constructor(private readonly el: ElementRef) { }

  @HostListener('blur') onBlur() {
    if(this.confirmPass.value !== this.pass.value) {
      this.el.nativeElement.style.visibility = "visible";
    } else {
      this.el.nativeElement.style.display = "hidden";
    }
  }
}

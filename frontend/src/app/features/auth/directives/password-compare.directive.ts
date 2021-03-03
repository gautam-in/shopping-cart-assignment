import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appPasswordCompare]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordCompareDirective,
      multi: true,
    },
  ],
})
export class PasswordCompareDirective implements Validator {
  @Input() appPasswordCompare: string = '';
  validate(control: AbstractControl): { [key: string]: any } | null {
    const controlToCompare = control.parent?.get(this.appPasswordCompare);
    if (controlToCompare && controlToCompare.value != control.value) {
      return { notEqual: true };
    }

    return null;
  }
}

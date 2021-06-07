import { AbstractControl, ValidatorFn } from '@angular/forms';

export class ContactValidators {
  static isMandate(mandate: boolean): ValidatorFn {
    let pattern = /^([+]\d{2})?\d{10}$/;
    return (c: AbstractControl): { [key: string]: boolean } | null => {
      if (mandate) {
        if (!(c.value && pattern.test(c.value))) {
          return { 'contact': true };
        }
      } else {
        if (c.value && !pattern.test(c.value)) {
          return { 'contact': true };
        }
      }
      return null;
    };
  }
}

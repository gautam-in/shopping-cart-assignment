import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export class CustomValidator {
  static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      return regex.test(control.value) ? null : error;
    };
  }

  static match(controlName1: string, controlName2: string) {
    return (formGroup: FormGroup) => {
      const control1 = formGroup.controls[controlName1];
      const control2 = formGroup.controls[controlName2];

      if (control2.errors && !control2.errors.match) {
        return;
      }

      if (control1.value !== control2.value) {
        control2.setErrors({match: true});
      }
    };
  }
}

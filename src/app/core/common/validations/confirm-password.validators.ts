import { AbstractControl } from '@angular/forms';

export class ConfirmFieldValidators {
  //  static  passwordConfirming(field1:string,field2:string,c: AbstractControl): { compare: boolean } | null {
  //     if (c.get('password')?.value !== c.get('confirmPassword')?.value) {
  //       return { compare: true };
  //     }
  //     return null;
  //   }

  static fieldConfirming =
    (field1: string): Function =>
    (field2: string): Function =>
    (c: AbstractControl): { compare: boolean } | null => {
      if (c.get(field1)?.value !== c.get(field2)?.value) {
        return { compare: true };
      }
      return null;
    };
}

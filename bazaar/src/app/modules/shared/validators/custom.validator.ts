import { FormGroup, FormBuilder } from '@angular/forms';

export function confirmedValidator(password, confirmPassword) {
  return (fb: FormGroup) => {
    const pwd = fb.controls[password];
    const confirmPwd = fb.controls[confirmPassword];
    if (confirmPwd.errors && !confirmPwd.errors.confirmedValidator) {
      return;
    }
    if (pwd.value !== confirmPwd.value) {
      confirmPwd.setErrors({ confirmedValidator: true });
    } else {
      confirmPwd.setErrors(null);
    }
  };
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoginPage: boolean = false
  signInSignupForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.isLoginPage = this.router.url.includes('login') ? true : false;
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.signInSignupForm = this.isLoginPage ? this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: [ null, [Validators.required, Validators.minLength(6), Validators.pattern('(?=.*[0-9])(?=.*[a-zA-Z]).{6,}')]]
    }) : this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: [ null, [Validators.required, Validators.pattern('(?=.*[0-9])(?=.*[a-zA-Z]).{6,}')]],
      confirmPassword: [null]
    }
    , { validator: this.checkIfPasswordsMatch('password', 'confirmPassword') }
    );
  }

  checkIfPasswordsMatch(passwordKey: string, confirmPasswordKey: string): any {
    return (group: FormGroup) => {
      const passwordInput = group.controls[passwordKey];
      const passwordConfirmationInput = group.controls[confirmPasswordKey];
      if (!passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({ required: true });
      } 
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({ notEquivalent: true });
      } 
      return passwordConfirmationInput.setErrors(null);
    };
  }

  formSubmit(){
    this.router.navigate(['home']);
  }
}


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { confirmedValidator } from 'src/app/modules/shared/validators/custom.validator';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss', '../login/login.component.scss']
})
export class RegistrationComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private _route: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(4), Validators.pattern(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)]],
      lastname: ['', [Validators.required, Validators.maxLength(15), Validators.pattern(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    }, {
      validator: confirmedValidator('password', 'confirmPassword')
    });

  }


  get firstname() {
    return this.signUpForm.get('firstname');
  }

  get lastname() {
    return this.signUpForm.get('lastname');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  onSubmit() {
    this._route.navigate(['/home'])
  }

}

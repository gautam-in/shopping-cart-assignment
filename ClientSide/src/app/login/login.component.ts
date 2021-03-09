import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  heading = 'Login';
  subText = 'Get access to your Orders, Wishlist and Recommendations';
  loginform: FormGroup;
  submitted = false;
  constructor(public router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginform = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        Validators.maxLength(15),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]*'),
        Validators.maxLength(15),
      ]),
    });
  }

  get email(): AbstractControl {
    return this.loginform.get('email');
  }

  get password(): AbstractControl {
    return this.loginform.get('password');
  }

  onFormSubmit() {
    this.submitted = true;
    if (
      this.email.value.indexOf('admin') > -1 &&
      this.password.value === 'admin'
    ) {
      this.router.navigate(['/home']);
    }
    this.loginform.reset();
  }
}

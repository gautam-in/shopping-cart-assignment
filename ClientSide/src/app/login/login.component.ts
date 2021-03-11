import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services/login.service';

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
  constructor(
    public router: Router,
    private loginService: LoginService,
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginform = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        Validators.maxLength(25),
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
    const userData = this.loginform.value;
    if (
      this.email.value.indexOf('admin') > -1 &&
      this.password.value === 'admin'
    ) {
      this.loginService.setUserData(userData);
      this.router.navigate(['/home']);
    }
    this.loginform.reset();
  }
}

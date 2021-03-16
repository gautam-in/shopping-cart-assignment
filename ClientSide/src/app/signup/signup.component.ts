import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services/login-services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  heading = 'Signup';
  subText = 'We do not share your personal details with anyone';
  signupForm: FormGroup;
  constructor(public router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signupForm = new FormGroup(
      {
        fname: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-zA-Z ]*'),
          Validators.maxLength(15),
        ]),
        lname: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-zA-Z ]*'),
          Validators.maxLength(15),
        ]),
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
        cnfrmpass: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-zA-Z ]*'),
          Validators.maxLength(15),
        ]),
      },
      { validators: this.checkPasswords }
    );
  }

  get fname(): AbstractControl {
    return this.signupForm.get('fname');
  }

  get lname(): AbstractControl {
    return this.signupForm.get('lname');
  }
  get email(): AbstractControl {
    return this.signupForm.get('email');
  }

  get password(): AbstractControl {
    return this.signupForm.get('password');
  }

  get cnfrmpass(): AbstractControl {
    return this.signupForm.get('cnfrmpass');
  }

  checkPasswords(group: FormGroup) {
    const password = group.get('password').value;
    const confirmPassword = group.get('cnfrmpass').value;

    return password === confirmPassword ? null : { notSame: true };
  }
  onFormSubmit() {
    this.loginService.setUserData({ email: this.email.value });
    this.signupForm.reset();
    this.router.navigate(['/home']);
  }
}

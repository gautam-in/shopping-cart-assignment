import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginSignUpService } from '../login-signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpComponent implements OnInit {

  validationMessages: { [key: string]: { [key: string]: string } };

  registrationForm: FormGroup;

  constructor(
    private _router: Router,
    private _headerService: LoginSignUpService,
    private _fb: FormBuilder
  ) {
    this.validationMessages = {
      firstName: {
        required: this._headerService.REQUIRED_ERROR,
        pattern: this._headerService.NAME_PATTERN_ERROR,
        minlength: this._headerService.NAME_LENGTH_ERROR,
      },
      lastName: {
        required: this._headerService.REQUIRED_ERROR,
        pattern: this._headerService.NAME_PATTERN_ERROR,
        minlength: this._headerService.NAME_LENGTH_ERROR,
      },
      email: {
        required: this._headerService.REQUIRED_ERROR,
        minLength: this._headerService.EMAIL_MINLENGTH_ERROR,
        pattern: this._headerService.EMAIL_PATTERN,
      },
      password: {
        required: this._headerService.REQUIRED_ERROR,
        minLength: this._headerService.PASSWORD_LENGTH_ERROR,
        pattern: this._headerService.PASSWORD_PATTERN,
      },
      confirmPassword: {
        required: this._headerService.REQUIRED_ERROR,
        minLength: this._headerService.PASSWORD_LENGTH_ERROR,
        compare: this._headerService.PASSWORD_COMPARE_ERROR,
      },
    };
  }

  ngOnInit(): void {
    this.registrationForm = this._fb.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.pattern(this._headerService.NAME_REGEX),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.pattern(this._headerService.NAME_REGEX),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(this._headerService.EMAIL_REGEX),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(this._headerService.PASSWORD_REGEX),
        ],
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(this._headerService.PASSWORD_REGEX),
        ],
      ],
    },
    {validator: this.passwordConfirming});
  }

  submitRegistrationForm(): void {
    if (this.registrationForm.valid) {
      localStorage.setItem(this.registrationForm.get('email').value, this.registrationForm.get('password').value);
      this._router.navigate(['SabkaBaZaar/login']);
      console.log(localStorage);
      
    } else {
      this._headerService.validateAllFormFields(this.registrationForm);
    }
  }

  passwordConfirming(c: AbstractControl): { compare: boolean } {
    if (c.get('password').value !== c.get('confirmPassword').value) {
        return {compare: true};
    }
  }

}

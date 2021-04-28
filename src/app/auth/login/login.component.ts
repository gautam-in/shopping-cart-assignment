import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/shared/services/app.service';
import { AuthService } from '../auth.service';
import { AppConstants } from 'src/app/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  existingUser: object = [];
  errormsg: string = '';
  errorUserExists: boolean = false;

  validationMessages: { [key: string]: { [key: string]: string } };

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    private _appService: AppService
  ) {
    this.validationMessages = {
      email: {
        required: AppConstants.REQUIRED_ERROR,
        minLength: AppConstants.EMAIL_MINLENGTH_ERROR,
        pattern: AppConstants.EMAIL_PATTERN,
      },
      password: {
        required: AppConstants.REQUIRED_ERROR,
        minLength: AppConstants.PASSWORD_LENGTH_ERROR,
        pattern: AppConstants.PASSWORD_PATTERN,
      },
    };
  }

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(AppConstants.EMAIL_REGEX),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(AppConstants.PASSWORD_REGEX),
        ],
      ],
    });
  }

  submitLoginForm(): void {
    this.errorUserExists = false;
    let user = this.loginForm.value;
    if (this.loginForm.valid) {
      let status = this._authService.isLoggedInUser(user);
      if (status == 'validUser') {
        this._router.navigate(['/home']);
      } else {
        if (status == 'wrongEmail') {
          this.errormsg = AppConstants.INVALID_ACCOUNT_ERROR;
        } else {
          this.errormsg = AppConstants.PASSWORD_MATCH_ERROR;
        }
        this.errorUserExists = true;
        setTimeout(() => {
          this.errorUserExists = false;
        }, 5000);
      }
    } else {
      this.errorUserExists = false;
      this._authService.validateAllFormFields(this.loginForm);
    }
  }
}

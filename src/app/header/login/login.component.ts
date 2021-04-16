import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/shared/services/app.service';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  existingUser: object = [];
  errormsg: string = '';
  errorExist: boolean = false;

  validationMessages: { [key: string]: { [key: string]: string } };

  constructor(
    private _fb: FormBuilder,
    private _headerService: HeaderService,
    private _router: Router,
    private _appService: AppService
  ) {
    this.validationMessages = {
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
    };
  }

  ngOnInit(): void {
    this.loginForm = this._fb.group({
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
    });
  }

  submitLoginForm(): void {
    this.errorExist = false;
    let user = this.loginForm.value;
    if (this.loginForm.valid) {
      let status = this._headerService.isLoggedInUser(user);
      if (status == '2') {
        this._router.navigate(['app/home']);
      } else {
        if (status == '0') {
          this.errormsg = this._headerService.INVALID_ACCOUNT_ERROR;
        } else {
          this.errormsg = this._headerService.PASSWORD_MATCH_ERROR;
        }
        this.errorExist = true;
        setTimeout(() => {
          this.errorExist = false;
        }, 5000);
      }
      console.log('errr=====', this.errormsg);
    } else {
      this.errorExist = false;
      this._headerService.validateAllFormFields(this.loginForm);
    }
  }
}

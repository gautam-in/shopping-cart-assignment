import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderService } from '../header.service';
//import { configuration } from '../../shared/configuration';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  validationMessages: { [key: string]: { [key: string]: string } };

  constructor(
    private _fb: FormBuilder,
    private headerService: HeaderService,
    private _router: Router
  ) {
    this.validationMessages = {
      email: {
        required: this.headerService.REQUIRED_ERROR,
        minLength: this.headerService.EMAIL_MINLENGTH_ERROR,
        pattern: this.headerService.EMAIL_PATTERN,
      },
      password: {
        required: this.headerService.REQUIRED_ERROR,
        minLength: this.headerService.PASSWORD_LENGTH_ERROR,
        pattern: this.headerService.PASSWORD_PATTERN,
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
          Validators.pattern(this.headerService.EMAIL_REGEX),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(this.headerService.PASSWORD_REGEX),
        ],
      ],
    });
  }

  submitLoginForm(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this._router.navigate(['app/home']);
    } else {
      this.headerService.validateAllFormFields(this.loginForm);
    }
  }
}

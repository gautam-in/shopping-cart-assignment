import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/shared/services/app.service';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  validationMessages: { [key: string]: { [key: string]: string } };

  registrationForm: FormGroup;
  errormsg: string = '';
  errorExist : boolean = false;

  constructor(
    private _router: Router,
    private _headerService: HeaderService,
    private _fb: FormBuilder,
    private _appService: AppService
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
    this.registrationForm = this._fb.group(
      {
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
      { validator: this.passwordConfirming }
    );
  }

  submitRegistrationForm(): void {
    if (this.registrationForm.valid) {
      // this._router.navigate(['app/login']);

      this.registerNewUser();
    } else {
      this._headerService.validateAllFormFields(this.registrationForm);
    }
  }

  registerNewUser() {
    this.errorExist = false;
    let existingUser = [];
    let user = this.registrationForm.value;
    console.log(this.registrationForm.value);
    if (!this._headerService.isUserAlreadyExist(user)) {
      existingUser = JSON.parse(
        this._appService.getSessionItem('registeredUser')
      );
      if (existingUser && existingUser != null) {
        existingUser.push(user);
        this._appService.setSessionItem(
          'registeredUser',
          JSON.stringify(existingUser)
        );
      } else {
        let y: any = [];
        y.push(user);
        this._appService.setSessionItem('registeredUser', JSON.stringify(y));
      }
      this._router.navigate(['app/login']);
    } else {
      this.errorExist = true;
      setTimeout(() => {
        this.errorExist = false;
      }, 5000);
      this.errormsg = this._headerService.USER_EXIST_ERROR;
      console.log(this.errormsg);
    }
  }

  passwordConfirming(c: AbstractControl): { compare: boolean } {
    if (c.get('password').value !== c.get('confirmPassword').value) {
      return { compare: true };
    }
  }
}

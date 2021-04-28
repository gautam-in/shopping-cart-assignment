import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/shared/services/app.service';
import { UserService } from 'src/app/user/user.service';
import { AuthService } from '../auth.service';
import { AppConstants } from 'src/app/constants';
import { IUser } from 'src/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  validationMessages: { [key: string]: { [key: string]: string } };

  registrationForm: FormGroup;
  errormsg: string = '';
  errorUserExists: boolean = false;

  constructor(
    private _router: Router,
    private _authService: AuthService,
    private _fb: FormBuilder,
    private _appService: AppService,
    private _userService: UserService
  ) {
    this.validationMessages = {
      firstName: {
        required: AppConstants.REQUIRED_ERROR,
        pattern: AppConstants.NAME_PATTERN_ERROR,
        minlength: AppConstants.NAME_LENGTH_ERROR,
      },
      lastName: {
        required: AppConstants.REQUIRED_ERROR,
        pattern: AppConstants.NAME_PATTERN_ERROR,
        minlength: AppConstants.NAME_LENGTH_ERROR,
      },
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
      confirmPassword: {
        required: AppConstants.REQUIRED_ERROR,
        minLength: AppConstants.PASSWORD_LENGTH_ERROR,
        compare: AppConstants.PASSWORD_COMPARE_ERROR,
      },
    };
  }

  ngOnInit(): void {
    this.registrationForm = this._fb.group(
      {
        firstName: [
          '',
          [Validators.required, Validators.pattern(AppConstants.NAME_REGEX)],
        ],
        lastName: [
          '',
          [Validators.required, Validators.pattern(AppConstants.NAME_REGEX)],
        ],
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
        confirmPassword: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(AppConstants.PASSWORD_REGEX),
          ],
        ],
      },
      { validator: this.passwordConfirming }
    );
  }

  submitRegistrationForm(): void {
    if (this.registrationForm.valid) {
      this.registerNewUser();
    } else {
      this._authService.validateAllFormFields(this.registrationForm);
    }
  }

  registerNewUser() {
    this.errorUserExists = false;
    let existingUser = [];
    let user = this.registrationForm.value;
    if (!this._authService.isUserAlreadyExist(user)) {
      existingUser = this._userService.getRegisteredUsers();
      if (existingUser && existingUser != null) {
        existingUser.push(user);
        this._userService.setUsers('registeredUser', existingUser);
      } else {
        let newUser: IUser[] = [];
        newUser.push(user);
        this._userService.setUsers('registeredUser', newUser);
      }
      this._router.navigate(['/auth/login']);
    } else {
      this.errorUserExists = true;
      setTimeout(() => {
        this.errorUserExists = false;
      }, 5000);
      this.errormsg = AppConstants.USER_EXIST_ERROR;
    }
  }

  passwordConfirming(control: AbstractControl): { compare: boolean } {
    if (
      control.get('password').value !== control.get('confirmPassword').value
    ) {
      return { compare: true };
    }
  }
}

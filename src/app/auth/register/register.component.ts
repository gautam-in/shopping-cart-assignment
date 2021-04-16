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
    private _authService: AuthService,
    private _fb: FormBuilder,
    private _appService: AppService,
    private _userService : UserService
  ) {
    this.validationMessages = {
      firstName: {
        required: this._authService.REQUIRED_ERROR,
        pattern: this._authService.NAME_PATTERN_ERROR,
        minlength: this._authService.NAME_LENGTH_ERROR,
      },
      lastName: {
        required: this._authService.REQUIRED_ERROR,
        pattern: this._authService.NAME_PATTERN_ERROR,
        minlength: this._authService.NAME_LENGTH_ERROR,
      },
      email: {
        required: this._authService.REQUIRED_ERROR,
        minLength: this._authService.EMAIL_MINLENGTH_ERROR,
        pattern: this._authService.EMAIL_PATTERN,
      },
      password: {
        required: this._authService.REQUIRED_ERROR,
        minLength: this._authService.PASSWORD_LENGTH_ERROR,
        pattern: this._authService.PASSWORD_PATTERN,
      },
      confirmPassword: {
        required: this._authService.REQUIRED_ERROR,
        minLength: this._authService.PASSWORD_LENGTH_ERROR,
        compare: this._authService.PASSWORD_COMPARE_ERROR,
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
            Validators.pattern(this._authService.NAME_REGEX),
          ],
        ],
        lastName: [
          '',
          [
            Validators.required,
            Validators.pattern(this._authService.NAME_REGEX),
          ],
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(this._authService.EMAIL_REGEX),
          ],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(this._authService.PASSWORD_REGEX),
          ],
        ],
        confirmPassword: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(this._authService.PASSWORD_REGEX),
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
    this.errorExist = false;
    let existingUser = [];
    let user = this.registrationForm.value;
    if (!this._authService.isUserAlreadyExist(user)) {
      existingUser = this._userService.getRegisteredUsers();
      if (existingUser && existingUser != null) {
        existingUser.push(user);
        this._userService.setUsers('registeredUser', existingUser)
      } else {
        let newUser: any = [];
        newUser.push(user);
        this._userService.setUsers('registeredUser', newUser)
      }
      this._router.navigate(['/auth/login']);
    } else {
      this.errorExist = true;
      setTimeout(() => {
        this.errorExist = false;
      }, 5000);
      this.errormsg = this._authService.USER_EXIST_ERROR;
    }
  }

  passwordConfirming(c: AbstractControl): { compare: boolean } {
    if (c.get('password').value !== c.get('confirmPassword').value) {
      return { compare: true };
    }
  }
}

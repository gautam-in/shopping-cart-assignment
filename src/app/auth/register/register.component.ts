import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  FormControlName,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, fromEvent, merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ErrorMsg } from 'src/app/common/constants/error.constants';
import { REGEX } from 'src/app/common/constants/regex.constants';
import { GenericValidator } from 'src/app/common/validations/generic-validator';
import { SeoService } from 'src/app/services/seo.service';
import { AppState } from 'src/app/store/app.reducer';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  validationMessages: { [key: string]: { [key: string]: string } } = {
    firstName: {
      required: ErrorMsg.REQUIRED_ERROR,
      pattern: ErrorMsg.NAME_PATTERN_ERROR,
      minlength: ErrorMsg.NAME_LENGTH_ERROR,
    },
    lastName: {
      required: ErrorMsg.REQUIRED_ERROR,
      pattern: ErrorMsg.NAME_PATTERN_ERROR,
      minlength: ErrorMsg.NAME_LENGTH_ERROR,
    },
    email: {
      required: ErrorMsg.REQUIRED_ERROR,
      minLength: ErrorMsg.EMAIL_MINLENGTH_ERROR,
      pattern: ErrorMsg.EMAIL_PATTERN,
    },
    password: {
      required: ErrorMsg.REQUIRED_ERROR,
      minLength: ErrorMsg.PASSWORD_LENGTH_ERROR,
      pattern: ErrorMsg.PASSWORD_PATTERN,
    },
    confirmPassword: {
      required: ErrorMsg.REQUIRED_ERROR,
      minLength: ErrorMsg.PASSWORD_LENGTH_ERROR,
      compare: ErrorMsg.PASSWORD_COMPARE_ERROR,
    },
  };
  displayMessage: { [key: string]: string } = {};
  private genericValidator: GenericValidator;
  registrationForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private seo: SeoService
  ) {
    this.genericValidator = new GenericValidator(this.validationMessages);
    this.registrationForm = this.fb.group(
      {
        firstName: [
          '',
          [Validators.required, Validators.pattern(REGEX.NAME_REGEX)],
        ],
        lastName: [
          '',
          [Validators.required, Validators.pattern(REGEX.NAME_REGEX)],
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(REGEX.EMAIL_REGEX),
          ],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(REGEX.PASSWORD_REGEX),
          ],
        ],
        confirmPassword: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(REGEX.PASSWORD_REGEX),
          ],
        ],
      },
      { validator: this.passwordConfirming }
    );
  }

  ngOnInit(): void {
    this.seo.setMetaData(
      'Sabka Bazar | Sign Up',
      'Sign Up',
      'Sign up here to access premium services'
    );
  }

  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements!: ElementRef[];
  /**
   * listen value change of form element
   */
  ngAfterViewInit(): void {
    // Watch for the blur event from any input element on the form.
    const controlBlurs: Observable<any>[] = this.formInputElements.map(
      (formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur')
    );

    // Merge the blur event observable with the valueChanges observable
    merge(this.registrationForm.valueChanges, ...controlBlurs)
      .pipe(debounceTime(800))
      .subscribe(() => {
        this.displayMessage = this.genericValidator.processMessages(
          this.registrationForm
        );
      });
  }

  submitRegistrationForm(): void {
    if (this.registrationForm.valid) {
      this.store.dispatch(
        new AuthActions.SignupStart({ ...this.registrationForm.value })
      );
    }
  }

  passwordConfirming(c: AbstractControl): { compare: boolean } | null {
    if (c.get('password')?.value !== c.get('confirmPassword')?.value) {
      return { compare: true };
    }
    return null;
  }

  onHandleError() {
    this.store.dispatch(new AuthActions.ClearError());
  }
}

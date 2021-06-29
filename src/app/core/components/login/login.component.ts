import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChildren,
} from '@angular/core';
import {
  FormBuilder,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { fromEvent, merge, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ErrorMsg } from 'src/app/core/common/constants/error.constants';
import { REGEX } from 'src/app/core/common/constants/regex.constants';
import { GenericValidator } from 'src/app/core/common/validations/generic-validator';
import { SeoService } from 'src/app/core/services/seo.service';
import { AppState } from 'src/app/models/app-state.model';
import { AuthActions } from '../../store/actions/action-types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {
  loginForm: FormGroup;
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;
  submitButtonValue = 'Login';
  /**
   * create form and assign validators
   * @param fb
   * @param router
   * @param route
   *
   */
  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private seo: SeoService
  ) {
    this.validationMessages = {
      email: {
        required: ErrorMsg.REQUIRED_ERROR,
        minLength: ErrorMsg.EMAIL_MINLENGTH_ERROR,
        pattern: ErrorMsg.EMAIL_PATTERN,
      },
      password: {
        required: ErrorMsg.REQUIRED_ERROR,
      },
    };
    this.genericValidator = new GenericValidator(this.validationMessages);
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(REGEX.EMAIL_REGEX)]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.seo.setMetaData(
      'Sabka Bazar | Login',
      'login',
      'Login here to access premium services'
    );
  }
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements!: ElementRef[];
  /**
   * listen value change of form element
   */
  ngAfterViewInit(): void {
    // Watch for the blur event from any input element on the form.
    const controlBlurs: Observable<any>[] = this.formInputElements?.map(
      (formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur')
    );

    // Merge the blur event observable with the valueChanges observable
    merge(this.loginForm.valueChanges, ...(controlBlurs || []))
      .pipe(debounceTime(800))
      .subscribe(() => {
        this.displayMessage = this.genericValidator.processMessages(
          this.loginForm
        );
      });
  }
  /**
   * login action
   * check user exists in our db
   * if it has then it redirects to redirect param
   * othewise redirect to home
   */
  submitForm(): void {
    if (this.loginForm.valid) {
      let { email, password } = this.loginForm.value;
      email = email?.trim();
      password = password?.trim();
      this.store.dispatch(
        AuthActions.LoginStart({ email: email, password: password })
      );
    }
  }
  /**
   * reset form
   */
  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.loginForm.reset();
  }
  /**
   * patch form value
   * @param data
   */
  patchValues(data: { [key: string]: any }) {
    this.loginForm.setValue(data);
  }

  onHandleError() {
    this.store.dispatch(AuthActions.clearError());
  }
  ngOnDestroy() {}
}

import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import {
  USER_EXISTS,
  USER_REGISTERED,
} from 'src/app/constants/messages.constant';
import { ConfirmedValidator } from 'src/app/shared/validator/match-password.validator';
import * as AuthActions from '../../store/actions/auth.actions';
import { AppState } from 'src/app/store/app.reducer';
import { takeUntil } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  isLoading!: boolean;
  private storeSub!: Subscription;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private ngxToastrService: ToastrService
  ) {
    this.registerForm = this.fb.group(
      {
        firstName: new FormControl(null, [Validators.required]),
        lastName: new FormControl(null),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(8),
        ]),
        confirmPassword: new FormControl(null, [Validators.required]),
      },
      {
        validator: ConfirmedValidator('password', 'confirmPassword'),
      }
    );
  }
  ngOnInit() {
    this.storeSub = this.store.select('auth').subscribe((authState) => {
      this.isLoading = authState.loading;
      if (authState.authError) {
        this.ngxToastrService.error(authState.authError);
        this.store.dispatch(AuthActions.ClearError());
      }
    });
  }
  onSubmit() {
    this.store.dispatch(AuthActions.SignupStart(this.registerForm.value));
    this.registerForm.reset();
  }

  ngOnDestroy() {
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
  }
}

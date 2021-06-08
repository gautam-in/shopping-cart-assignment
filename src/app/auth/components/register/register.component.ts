import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { ConfirmedValidator } from 'src/app/shared/validator/match-password.validator';
import * as AuthActions from '../../store/actions/auth.actions';
import { AppState } from 'src/app/store/app.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  private storeSub!: Subscription;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private ngxToastrService: ToastrService
  ) {
    this.registerForm = this.fb.group(
      {
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
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
      if (authState && authState.authError) {
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
    this.storeSub.unsubscribe();
  }
}

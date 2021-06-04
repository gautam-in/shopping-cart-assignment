import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import {
  USER_EXISTS,
  USER_REGISTERED,
} from 'src/app/constants/messages.constant';
import { ConfirmedValidator } from 'src/app/shared/validator/match-password.validator';
import { SessionStorageService } from 'src/app/storage/session-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private ngxLoader: NgxUiLoaderService,
    private ngxToastrService: ToastrService,
    private sessionStorage: SessionStorageService
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

  onSubmit(): void {
    this.ngxLoader.start();
    const user = this.registerForm.value;
    const registerRequest = { user };
    const response = this.sessionStorage.set(registerRequest);
    if (response) {
      this.ngxToastrService.success(USER_REGISTERED);
      this.registerForm.reset();
    } else {
      this.ngxToastrService.error(USER_EXISTS);
    }
    this.ngxLoader.stop();
  }
}

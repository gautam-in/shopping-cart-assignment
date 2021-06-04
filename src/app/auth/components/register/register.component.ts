import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ConfirmedValidator } from 'src/app/shared/validator/match-password.validator';
import { SessionStorageService } from 'src/app/storage/session-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent implements OnInit {
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

  ngOnInit(): void {}

  submitForm(): void {
    this.ngxLoader.start();
    const user = this.registerForm.value;
    setTimeout(() => {
      const registerRequest = { user };
      const response = this.sessionStorage.set(registerRequest);
      if (response) {
        this.ngxToastrService.success(
          'Registration done succesfully!',
          'Registered!'
        );
        this.registerForm.reset();
      } else {
        this.ngxToastrService.error('User already exists!', 'Error!');
      }
      this.ngxLoader.stop();
    }, 1000);
  }
}

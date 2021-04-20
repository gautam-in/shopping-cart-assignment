import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginSignUpService } from '../login-signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginError: boolean = false;

  validationMessages: { [key: string]: { [key: string]: string } };

  constructor(
    private _fb: FormBuilder,
    private headerService: LoginSignUpService,
    private _router: Router
  ) {
    this.validationMessages = {
      email: {
        required: this.headerService.REQUIRED_ERROR
      },
      password: {
        required: this.headerService.REQUIRED_ERROR
      },
    };
  }

  ngOnInit(): void {
    this.loginError = false;
    this.loginForm = this._fb.group({
      email: [
        '',
        [
          Validators.required
        ],
      ],
      password: [
        '',
        [
          Validators.required
        ],
      ],
    });
  }

  submitLoginForm(): void {
    this.loginError = false;
    if (this.loginForm.valid) {
      if(localStorage.getItem(this.loginForm.get('email').value)) {
        if(localStorage.getItem(this.loginForm.get('email').value) === this.loginForm.get('password').value) {
          this._router.navigate(['SabkaBaZaar/signup'])
        } else {
          this.loginError = true;
        }
      } else {
        this.loginError = true;
      }
      // this._router.navigate(['app/home']);
    } else {
      this.headerService.validateAllFormFields(this.loginForm);
    }
  }

}

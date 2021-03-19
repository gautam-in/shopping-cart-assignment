import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss'],
})
export class LoginUserComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private title: Title,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.title.setTitle('Login | Sabka Bazaar');
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      Object.keys(this.loginForm.controls).forEach((key: string) => {
        this.loginForm.get(key)?.markAsDirty();
      });
      return;
    }

    this.authService
      .login(this.loginForm.value)
      .subscribe((isLoggedIn: boolean) => {
        if (isLoggedIn) {
          this.router.navigate(['/home']);
        } else {
          alert('Unable to login user');
        }
      });
  }
}

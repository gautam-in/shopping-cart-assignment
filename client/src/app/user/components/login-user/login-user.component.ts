import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/core/services/auth.service';
import { SEOService } from 'src/app/core/services/seo.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss'],
})
export class LoginUserComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private seoService: SEOService
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
    this.seoService.setTitle('Login');
    this.seoService.setDescription(
      'Login to Sabka Bazaar to view your orders, wallet balance, wishlist and to get personalized product recommendations.'
    );
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

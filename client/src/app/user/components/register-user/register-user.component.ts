import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/core/services/auth.service';
import { SEOService } from 'src/app/core/services/seo.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private seoService: SEOService
  ) {
    this.registerForm = this.fb.group(
      {
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
          ],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/),
          ],
        ],
        confirmPassword: ['', Validators.required],
      },
      { validators: [this.validateForm()] }
    );
  }

  ngOnInit(): void {
    this.seoService.setTitle('Signup');
    this.seoService.setDescription(
      'Register an account on Sabka Bazaar to view your orders, wallet balance, wishlist and to get personalized product recommendations.'
    );
  }

  get f() {
    return this.registerForm.controls;
  }

  validateForm() {
    return (form: FormGroup) => {
      let errors: { pwdNotMatching?: boolean } = {};
      const password = form.get('password')?.value;
      const confirmPassword = form.get('confirmPassword')?.value;
      if (password !== confirmPassword) {
        errors.pwdNotMatching = true;
      }

      return Object.keys(errors).length > 0 ? errors : null;
    };
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      Object.keys(this.registerForm.controls).forEach((key: string) => {
        this.registerForm.get(key)?.markAsDirty();
      });
      return;
    }

    this.authService
      .signup(this.registerForm.value)
      .subscribe((isLoggedIn: boolean) => {
        if (isLoggedIn) {
          this.router.navigate(['/home']);
        } else {
          alert('Unable to signup user');
        }
      });
  }
}

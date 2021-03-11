import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.matchPassword });
  }

  onRegister(): void {
    localStorage.setItem('registeredUser', JSON.stringify(this.registerForm.value));
    alert('User registered successfully. Please login');
    this.router.navigate(['auth/signin']);
  }

  matchPassword(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password.pristine || confirmPassword.pristine) {
      return null;
    }
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { mismatch: true };
    } else {
      return null;
    }
  }

}

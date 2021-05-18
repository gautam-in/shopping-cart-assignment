import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  registerForm = this.fb.group({
    fName: [''],
    lName: [''],
    email: [''],
    password: [''],
    confirmPassword: [''],
  });

  onSubmit(): void {
    console.log(this.registerForm.value);
    this.router.navigate(['/home']);
  }
}

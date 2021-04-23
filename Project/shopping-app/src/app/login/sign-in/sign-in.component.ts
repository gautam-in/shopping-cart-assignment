import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  isValidUser = true;

  constructor( private router: Router ) {
    this.loginForm = new FormGroup({
    userEmail: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    password: new FormControl('', Validators.required),
  });
}

  ngOnInit(): void {}
  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
        return;
    } else if (this.loginForm.valid) {
      const itemsStr = localStorage.getItem('RegisteredUsers');
      const userDetails = itemsStr ? JSON.parse(itemsStr) : [];
      const loginDetails: any = JSON.stringify(this.loginForm.value);
      userDetails.map((user: any) => {
        const userData = JSON.parse(user);
        const loginData = JSON.parse(loginDetails);
        if ( userData.userEmail === loginData.userEmail &&  userData.password === loginData.password ) {
          this.isValidUser = true;
          sessionStorage.setItem('isUserLoggedIn', 'true');
          this.router.navigate(['./home']);
        }else {
          this.isValidUser = false;
        }
      });
    }
  }

  get f(): any { return this.loginForm.controls; }
}

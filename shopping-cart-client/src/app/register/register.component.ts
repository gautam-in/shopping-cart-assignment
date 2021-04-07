import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login-services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('cPassword', { static: true }) confirmPassowrd: any;
  user = {
    email: '',
    password: '',
  };
  pass = '';
  confirmPassword = '';
  cPassword: boolean = false;
  constructor(
    private router: ActivatedRoute,
    private routerLink: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {}

  submitForm(form: NgForm) {
    this.user.email = form.value.email;
    this.user.password = form.value.password;
    this.loginService.saveRegisterationData(this.user);
    this.loginService.setLoginFlag(true);
    localStorage.setItem('isLoggedIn', 'true');
    this.routerLink.navigate(['/home']);
  }
}

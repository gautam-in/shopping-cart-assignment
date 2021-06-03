import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/Shared/models/user';
import { LoginServiceService } from 'src/Shared/services/login-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {
  user: User = {
    email: '',
    password: ''
  };
  constructor(private router: Router, private loginService: LoginServiceService) { }
  isLoginError: boolean = false;
  ngOnInit(): void {
  }
  submitLogin(loginData: any) {
    this.user.email = loginData.value.email;
    this.user.password = loginData.value.password;
    if (this.loginService.checkLoginCred(this.user)) {
      sessionStorage.setItem('isLoggedIn', String(true));
      this.router.navigate(['/home']);
    }
    else {
      this.isLoginError = true;
      sessionStorage.setItem('isLoggedIn', String(false));
    }

  }
}

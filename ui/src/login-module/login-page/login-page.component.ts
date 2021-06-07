import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/Shared/models/user';
import { LoginService } from 'src/Shared/services/login.service';

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
  constructor(private router: Router, private loginService: LoginService) { }
  isLoginError: boolean = false;
  isLoggedIn: boolean = false;
  ngOnInit(): void {
    this.loginService.checkLoggedIn().subscribe((response) => {
      this.isLoggedIn = response;
      if (this.isLoggedIn) {
        this.router.navigate(['/home']);
      }
    });
  }
  submitLogin(loginData: any) {
    this.user.email = loginData.value.email;
    this.user.password = loginData.value.password;
    if (this.loginService.checkLoginCred(this.user)) {
      this.loginService.isLoggedIn.next(true);
      this.router.navigate(['/home']);
    }
    else {
      this.isLoginError = true;
      this.loginService.isLoggedIn.next(false);
    }

  }
}

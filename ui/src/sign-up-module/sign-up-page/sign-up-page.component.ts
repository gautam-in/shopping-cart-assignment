import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/Shared/models/user';
import { LoginService } from 'src/Shared/services/login.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.sass']
})
export class SignUpPageComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }
  userData: User = { email: '', password: '' };
  password = '';
  confirmPassword = '';
  ngOnInit(): void {
  }
  submitForm(signUpData: any) {
    this.userData.email = signUpData.value.email;
    this.userData.password = this.password;
    this.userData.firstName = signUpData.value.fName;
    this.userData.lastName = signUpData.value.lName;
    this.loginService.saveRegistrationData(this.userData);
    this.loginService.isLoggedIn.next(true);
    this.router.navigate(['/home']);
  }
}

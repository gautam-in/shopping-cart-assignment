import { AuthService } from './../../Services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _authService: AuthService,
    ) { }

  ngOnInit(): void {
  }

  onLogin(loginForm) {
    this._authService.authenticateUser(loginForm.value.email, loginForm.value.password);
  }

}

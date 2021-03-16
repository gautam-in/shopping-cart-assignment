import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  closeResult: string;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onLogin(loginForm): void {
    this.authService.authenticateUser(loginForm.value.email, loginForm.value.password);
  }
}

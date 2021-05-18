import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = new FormControl('');
  password = new FormControl('');

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick(): void {
    console.log(this.email.value, this.password.value);
    this.router.navigate(['/home']);
  }
}

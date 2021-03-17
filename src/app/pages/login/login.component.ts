import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {CustomValidator} from '../../services/validators/match-password';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(6),
          CustomValidator.patternValidator(/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/, {hasNumberAndAlphabet: true}),
          CustomValidator.patternValidator(/^\S*$/, {hasNoSpace: true})
        ]
      ]
    })
  }

  onLogin() {
    this.router.navigate(['home']);
  }

}

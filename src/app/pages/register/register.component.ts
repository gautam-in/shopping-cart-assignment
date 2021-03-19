import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {CustomValidator} from '../../services/validators/custom-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(6),
          CustomValidator.patternValidator(/^[a-zA-Z0-9 ]*$/, {hasNumberAndAlphabet: true}),
          CustomValidator.patternValidator(/^\S*$/, {hasNoSpace: true})
        ]
      ],
      confirmPassword: [null, Validators.required]
    }, {
      validator: CustomValidator.match('password', 'confirmPassword')
    });
  }

  onRegister() {
    this.router.navigate(['home']);
  }

}

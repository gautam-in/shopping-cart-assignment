import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  @ViewChild('confirmPassword', { static: true }) confirmPassword: any;
  isPasswordMissMatching: boolean = false;

  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  onSubmit(signupFormInfo: any) {
    this.router.navigate(['/home']);
  }

  // confirmPass() {
  //   if (
  //     this.confirmPassword._parent.form.value.password !==
  //     this.confirmPassword._parent.form.value.confirmPassword
  //   ) {
  //     this.isPasswordMissMatching = false;
  //     console.log('not match');
  //   } else {
  //     this.isPasswordMissMatching = true;
  //   }
  // }
}

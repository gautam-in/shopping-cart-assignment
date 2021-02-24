import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(signupFormInfo: any) {
    this.router.navigate(['/home']);
    console.log(signupFormInfo.value);
  }

}

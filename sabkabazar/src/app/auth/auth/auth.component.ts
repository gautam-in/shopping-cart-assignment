import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass'],
})
export class AuthComponent implements OnInit {
  auth: boolean = false;
  constructor(
    private ngxToastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.auth =
      this.activatedRoute.snapshot.url[0].path === 'register' ? true : false;
  }
  submitForm(): void {
    this.ngxToastrService.success(
      'Registration done succesfully!',
      'Registered!'
    );
  }
}

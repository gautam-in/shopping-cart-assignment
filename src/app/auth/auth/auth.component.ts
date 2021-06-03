import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass'],
})
export class AuthComponent implements OnInit {
  auth: boolean = false;
  loginForm!: FormGroup;
  constructor(
    private ngxToastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private ngxLoader: NgxUiLoaderService,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      name: [''],
    });
  }

  ngOnInit(): void {
    this.auth =
      this.activatedRoute.snapshot.url[0].path === 'register' ? true : false;
  }

  submitForm(): void {
    this.ngxLoader.start();
    this.ngxToastrService.success(
      'Registration done succesfully!',
      'Registered!'
    );
  }

  onSubmit(form: any) {
    console.log(form);
  }

  
}

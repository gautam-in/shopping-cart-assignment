import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionStorageService } from 'src/app/storage/session-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  constructor(
    private sessionStorage: SessionStorageService,
    private ngxToastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    const response = this.sessionStorage.get(form.value);
    if (response.code === 200) {
      this.ngxToastrService.success(
        `Welcome ${response.result.user.firstName}`,
        'Logged In!'
      );
      this.router.navigate(['/products']);
    } else {
      this.ngxToastrService.error(response.message);
    }
  }
}

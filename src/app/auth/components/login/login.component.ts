import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LOGGED_IN } from 'src/app/constants/messages.constant';
import { SessionStorageService } from 'src/app/storage/session-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  constructor(
    private sessionStorage: SessionStorageService,
    private ngxToastrService: ToastrService,
    private router: Router
  ) {}

  onSubmit(form: NgForm) {
    const response = this.sessionStorage.get(form.value);
    if (response.code === 200) {
      this.ngxToastrService.success(LOGGED_IN);
      this.router.navigate(['/products']);
    } else {
      this.ngxToastrService.error(response.message);
    }
  }
}

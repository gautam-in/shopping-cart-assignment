import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/models/user.model';
import { AppService } from '../shared/services/app.service';
import { UserService } from '../user/user.service';

enum Status {
  validUser = 'validUser',
  wrongPassword = 'wrongPassword',
  wrongEmail = 'wrongEmail',
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  existingUsers: IUser[] = [];
  constructor(
    private _appService: AppService,
    private _userService: UserService,
    private _router: Router
  ) {}

  validateAllFormFields(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control.controls) {
        this.validateAllFormFields(control);
      }
    });
  }

 
  isUserAlreadyExist(user): any {
     return this._userService.getLoggedInUser(user);
  }

  isLoggedInUser(user): any {
    let status = Status.wrongEmail;
    this.existingUsers = this._userService.getRegisteredUsers(); 
    if (this.existingUsers && this.existingUsers != null) {
      let userExist = this.existingUsers.find((u) => { 
        if (u.email == user.email) {
          return u;
        }
      });
      if (userExist && userExist.email) {
        if (userExist.password == user.password) {
          status = Status.validUser;
          this._userService.setLoggedInUser(userExist);
        } else {
          status = Status.wrongPassword;
        }
      } else {
        status = Status.wrongEmail;
      }
    }
    return status;
  }

  logout(): void {
    this._appService.removeLocalItem('loggedInUser');
    this._router.navigateByUrl('/auth/login');
  }

}

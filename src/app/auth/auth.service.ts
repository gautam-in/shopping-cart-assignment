import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategory } from 'src/models/category.model';
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
  categories: any = [];
  existingUser: IUser[] = [];
  isValidUser: boolean = false;

  constructor(
    private _http: HttpClient,
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

  fetchCategories() {
    this._http.get('server/categories/index.get.json').subscribe((data) => {
      this.categories = data;
      this.categories = this.categories.sort((a, b) => {
        return a.order - b.order;
      });
      return this.categories;
    });
  }

  isUserAlreadyExist(user): any {
    let exist = false;
    exist = this._userService.getLoggedInUser(user);
    return exist;
  }

  isLoggedInUser(user): any {
    let status = Status.wrongEmail;
    this.existingUser = this._userService.getRegisteredUsers();
    if (this.existingUser && this.existingUser != null) {
      let accountExist = this.existingUser.find((u) => {
        if (u.email == user.email) {
          return u;
        }
      });
      if (accountExist && accountExist.email) {
        if (accountExist.password == user.password) {
          status = Status.validUser;
          this._userService.setLoggedInUser(accountExist);
          this.isUserAuthenticated();
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
    this.isUserAuthenticated();
    this._router.navigateByUrl('/auth/login');
  }

  isUserAuthenticated() {
    console.log('isUserAuthenticated called ==');
    if (this._userService.getSignedInUser()) {
      this._userService.setUser(true);
    } else {
      this._userService.setUser(false);
    }
  }
}

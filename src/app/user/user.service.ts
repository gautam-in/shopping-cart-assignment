import { Injectable } from '@angular/core';
import { IUser } from 'src/models/user.model';
import { AppService } from '../shared/services/app.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  existingUsers: IUser[];

  constructor(private _appService: AppService) {}

  getRegisteredUsers(): any {
    return JSON.parse(this._appService.getLocalItem('registeredUser'));
  }

  getLoggedInUser(user: IUser): any {
    let exist = false;
    this.existingUsers = this.getRegisteredUsers();
    if (this.existingUsers && this.existingUsers != null) {
      this.existingUsers.forEach((element) => {
        if (element.email == user.email) {
          this.setLoggedInUser(element);
          exist = true;
        }
      });
    }
    return exist;
  }

  setLoggedInUser(user: IUser): any {
    this._appService.setLocalItem('loggedInUser', JSON.stringify(user));
  }

  getSignedInUser(): any {
    return this._appService.getLocalItem('loggedInUser');
  }

  setUsers(key, value) {
    this._appService.setLocalItem(key, JSON.stringify(value));
  }
}

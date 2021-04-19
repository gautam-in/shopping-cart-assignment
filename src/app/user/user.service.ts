import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IUser } from 'src/models/user.model';
import { AppService } from '../shared/services/app.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUser: IUser;
  currentUserEmail: any;
  redirectUrl: string;
  id: String;
  existingUsers: IUser[];

  private user = new BehaviorSubject<boolean>(false);
  public getUser = this.user.asObservable();

  setUser(u: any) {
    this.user.next(u);
  }

  constructor(
    private _appService: AppService,
  ) {}

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  getRegisteredUsers(): any {
    return JSON.parse(this._appService.getLocalItem('registeredUser'));
  }

  getLoggedInUser(user : IUser): any {
    let exist = false;
    this.existingUsers = this.getRegisteredUsers();
    if (this.existingUsers && this.existingUsers != null) {
      this.existingUsers.forEach((element) => {
        if (element.email == user.email) {
          this.currentUser ? element : '';
          this.setLoggedInUser(element)
          exist = true;
        }
      });
    }
    return exist;
  }

  setLoggedInUser(user : IUser): any{
   this._appService.setLocalItem('loggedInUser' , JSON.stringify(user))
  }

  getSignedInUser(): any{
   return this._appService.getLocalItem('loggedInUser')
  }


  setUsers(key, value) {
    this._appService.setLocalItem(key, JSON.stringify(value));
  }
  
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AppService } from '../shared/services/app.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUser: any;
  currentUserEmail: any;
  redirectUrl: string;
  id: any;
  existingUsers: any;

  private user = new BehaviorSubject<any>('');
  getUser = this.user.asObservable();

  setUser(u: any) {
    this.user.next(u);
  }

  constructor(
    private _httpService: HttpClient,
    private _routerService: Router,
    private _appService: AppService
  ) {}

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  getRegisteredUsers(): any {
    return JSON.parse(this._appService.getLocalItem('registeredUser'));
  }

  getLoggedInUser(user): any {
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

  setLoggedInUser(user): any{
   this._appService.setLocalItem('loggedInUser' , JSON.stringify(user))
  }

  getSignedInUser(): any{
   return this._appService.getLocalItem('loggedInUser')
  }

  logout(): void {
    this.currentUser = null;
    this._appService.removeLocalItem('loggedInUser');
    this._routerService.navigateByUrl('/auth/login');
  }

  setUsers(key, value) {
    this._appService.setLocalItem(key, JSON.stringify(value));
  }
  
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  private currentUserSubject = new BehaviorSubject<any>({});
  public currentUser = this.currentUserSubject
    .asObservable()
    .pipe(distinctUntilChanged());

  constructor() {}

  set(value: any) {
    debugger;
    const users = sessionStorage.getItem('Users');
    if (users) {
      const userArray = JSON.parse(users);
      const userexists = userArray.findIndex(
        (item: any) => item.email === value.email
      );
      if (userexists) {
        return false;
      } else {
        userArray.push(value);
        sessionStorage.setItem('Users', JSON.stringify(userArray));
        return true;
      }
    } else {
      sessionStorage.setItem('Users', JSON.stringify([value]));
      return true;
    }
  }

  get(user: any): {
    code: number;
    message: string;
    result?: any;
  } {
    const users = sessionStorage.getItem('Users');
    if (users) {
      const userArray = JSON.parse(users);
      const userexists = userArray.find(
        (item: any) => item.user.email === user.email
      );
      if (userexists) {
        if (userexists.user.password === user.password) {
          return { code: 200, message: 'success', result: userexists };
        } else {
          return { code: 401, message: 'wrong password' };
        }
      }
    }
    return { code: 404, message: "User doesn't exists" };
  }
  logout() {
    this.currentUserSubject.next({});
  }
}

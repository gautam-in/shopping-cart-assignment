import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  addNewUser(value: User): Observable<any> {
    const users = sessionStorage.getItem('Users');
    if (users) {
      const userArray = JSON.parse(users);
      const userexists = userArray.findIndex(
        (item: any) => item.email === value.email
      );
      if (userexists !== -1) {
        return throwError({ error: { error: { message: 'EMAIL_EXISTS' } } });
      } else {
        userArray.push(value);
        sessionStorage.setItem('Users', JSON.stringify(userArray));
        return of(value);
      }
    } else {
      sessionStorage.setItem('Users', JSON.stringify([value]));
      return of(value);
    }
  }

  loginUser(user: User): Observable<any> {
    debugger;
    const users = sessionStorage.getItem('Users');
    if (users) {
      const userArray = JSON.parse(users);
      const userexists = userArray.find(
        (item: any) => item.email === user.email
      );
      if (userexists) {
        if (userexists.password === user.password) {
          delete userexists.password;
          return of(userexists);
        } else {
          return throwError({
            error: { error: { message: 'EMAIL_NOT_FOUND' } },
          });
        }
      }
    }
    return throwError({
      error: { error: { message: 'INVALID_PASSWORD' } },
    });
  }
}

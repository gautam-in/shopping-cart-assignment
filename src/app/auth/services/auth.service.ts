import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { EMAIL_NOT_FOUND, INVALID_PASSWORD } from 'src/app/shared/constants/messages.constant';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  addNewUser(value: User): Observable<any> {
    const users = localStorage.getItem('Users');
    if (users) {
      const userArray = JSON.parse(users);
      const userexists = userArray.findIndex(
        (item: any) => item.email === value.email
      );
      if (userexists !== -1) {
        return throwError({ error: { error: { message: EMAIL_NOT_FOUND } } });
      } else {
        userArray.push(value);
        localStorage.setItem('Users', JSON.stringify(userArray));
        return of(value);
      }
    } else {
      localStorage.setItem('Users', JSON.stringify([value]));
      return of(value);
    }
  }

  loginUser(user: User): Observable<any> {
    const users = localStorage.getItem('Users');
    if (users) {
      const userArray = JSON.parse(users);
      const userexists = userArray.find(
        (item: any) => item.email === user.email
      );
      if (userexists) {
        if (userexists.password === user.password) {
          return of({
            email: userexists.email,
            firstName: userexists.firstName,
          });
        } else {
          return throwError({
            error: { error: { message: INVALID_PASSWORD } },
          });
        }
      }
    }
    return throwError({
      error: { error: { message: EMAIL_NOT_FOUND } },
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { User } from 'src/app/shared/models/user';
import { WindowService } from './window.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userStorageKey = 'user';

  constructor(private http: HttpClient, private windowService: WindowService) {}

  authenticate(user: User) {
    // just to set the auth cookie
    this.http.post(`/authenticate`, user).subscribe(() => {
      // if authenticated, set the user in storage
      const window = this.windowService.getWindow();

      if (window && typeof window.Storage !== undefined) {
        window.sessionStorage.setItem(
          this.userStorageKey,
          JSON.stringify({ email: user.email })
        );
      }
    });
  }

  isAuthenticated(): boolean {
    // check if the user is in the storage
    const window = this.windowService.getWindow();

    if (window && typeof window.Storage !== undefined) {
      let user: string | User =
        window.sessionStorage.getItem(this.userStorageKey) || '';

      try {
        user = JSON.parse(user) as User;
        return user.email ? true : false;
      } catch (e) {
        return false;
      }
    }

    return false;
  }

  signup(user: User) {
    this.authenticate(user);
    return of(true);
  }

  login(user: User) {
    this.authenticate(user);
    return of(true);
  }
}

import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { User } from 'src/app/shared/models/user';
import { WindowService } from './window.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userStorageKey = 'user';

  constructor(private windowService: WindowService) {}

  authenticateLocally(user: User) {
    const window = this.windowService.getWindow();

    if (typeof window.Storage !== undefined) {
      window.sessionStorage.setItem(
        this.userStorageKey,
        JSON.stringify({ email: user.email })
      );
    }
  }

  isAuthenticated(): boolean {
    const window = this.windowService.getWindow();

    if (typeof window.Storage !== undefined) {
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
    this.authenticateLocally(user);
    return of(true);
  }

  login(user: User) {
    this.authenticateLocally(user);
    return of(true);
  }
}

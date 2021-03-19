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

  signup(user: User) {
    this.authenticateLocally(user);
    return of(true);
  }

  login(user: User) {
    this.authenticateLocally(user);
    return of(true);
  }
}

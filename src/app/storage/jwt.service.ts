import { Injectable } from '@angular/core';

@Injectable()
export class JwtService {
  getToken(): string {
    return localStorage['jwtToken'];
  }
  saveToken(token: string) {
    localStorage['jwtToken'] = token;
  }
  destroyToken(): void {
    localStorage.removeItem('jwtToken');
  }
}

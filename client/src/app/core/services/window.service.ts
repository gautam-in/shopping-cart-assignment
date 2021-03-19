import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WindowService {
  constructor() {}

  getWindow() {
    return window;
  }
}

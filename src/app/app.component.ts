import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.reducer';
import * as AuthActions from './auth/store/actions/auth.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'sabkabazar';
  constructor(private store: Store<AppState>) {}
  ngOnInit() {
    this.store.dispatch(AuthActions.AutoLogin());
  }
}

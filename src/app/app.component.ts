import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/core/common/constants/constants';
import { Enter } from './core/common/animations/enter.animation';
import { AuthState } from './core/models/auth-state.model';
import { Logout } from './core/store/actions/auth.actions';
import { AppState } from './models/app-state.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [Enter],
  host: { '[@Enter]': '' },
})
export class AppComponent implements OnInit {
  @ViewChild(MatSidenav, { static: true }) sideNav!: MatSidenav;
  user$!: Observable<AuthState>;

  constructor(private store: Store<AppState>) {
    this.user$ = this.store.select('auth');
  }

  ngOnInit() {
    Constants.SIDENAV = this.sideNav;
  }

  logout() {
    this.store.dispatch(new Logout());
  }
  closeNav() {
    Constants.SIDENAV.close();
  }
}

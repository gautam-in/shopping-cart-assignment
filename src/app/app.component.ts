import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/core/common/constants/constants';
import { Enter } from './core/common/animations/enter.animation';
import { AuthState } from './core/models/auth-state.model';
import { AuthActions } from './core/store/actions/action-types';
import { logout } from './core/store/actions/auth.actions';
import { selectAuthState } from './core/store/selectors/auth.selectors';
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
  loading = true;
  constructor(private store: Store<AppState>, private router: Router) {
    this.user$ = this.store.pipe(select(selectAuthState));
  }

  ngOnInit() {
    Constants.SIDENAV = this.sideNav;
    this.router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  logout() {
    this.store.dispatch(AuthActions.logout());
  }
  closeNav() {
    Constants.SIDENAV?.close();
  }
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Subject, Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.reducer';
import * as AuthActions from '../../store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  private storeSub!: Subscription;
  destroyed$ = new Subject<boolean>();
  constructor(
    private ngxToastrService: ToastrService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.storeSub = this.store.select('auth').subscribe((authState) => {
      if (authState.authError) {
        this.ngxToastrService.error(authState.authError);
        this.store.dispatch(AuthActions.ClearError());
      }
    });
  }

  onSubmit(form: NgForm) {
    this.store.dispatch(AuthActions.LoginStart(form.value));
    form.reset();
  }

  ngOnDestroy() {
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
  }
}

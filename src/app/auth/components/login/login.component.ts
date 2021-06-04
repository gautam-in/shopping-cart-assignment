import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { AppState } from 'src/app/store/app.reducer';
import * as AuthActions from '../../store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  isLoading!: boolean;
  constructor(
    private ngxToastrService: ToastrService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.store.select('auth').subscribe((authState) => {
      this.isLoading = authState.loading;
      if (authState.authError) this.ngxToastrService.error(authState.authError);
    });
  }

  onSubmit(form: NgForm) {
    this.store.dispatch(AuthActions.LoginStart(form.value));
    form.reset();
  }
}

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from '../features/auth/components/login/login.component';
import { SignupComponent } from '../features/auth/components/signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '**', component: PageNotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlockRoutingModule { }

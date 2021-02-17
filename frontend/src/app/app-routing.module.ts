import { SignupComponent } from './auth/components/signup/signup.component';
import { PageNotFoundComponent } from './blocks/components/page-not-found/page-not-found.component';
import { HomeComponent } from './home/components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

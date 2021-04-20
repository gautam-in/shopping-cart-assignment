import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'SabkaBaZaar',
    pathMatch: 'full',
  },
  {
    path: 'SabkaBaZaar',
    loadChildren: () =>
      import('./login-signup/login-signup..module').then((l) => l.LoginSignUpModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

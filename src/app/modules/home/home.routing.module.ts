import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { BannerResolver } from './service/banner.resolver';
import { CategoryResolver } from './service/category.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: [BannerResolver, CategoryResolver],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

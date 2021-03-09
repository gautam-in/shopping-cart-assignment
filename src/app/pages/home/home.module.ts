import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ComponentsModule} from '../../components/components.module';
import {CategoryComponent} from './category/category.component';
import {HomeComponent} from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: HomeComponent}]),
    ComponentsModule
  ]
})
export class HomeModule {
}

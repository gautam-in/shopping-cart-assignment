import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';



@NgModule({
  declarations: [HeaderComponent, LogoComponent, FooterComponent, LoaderComponent, PageNotFoundComponent],
  imports: [
    CommonModule
  ]
})
export class BlocksModule { }

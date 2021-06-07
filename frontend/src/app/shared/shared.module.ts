import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { CategoryModule } from './category/category.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HeaderModule, FooterModule, CategoryModule],
  exports: [HeaderModule, FooterModule, CategoryModule],
})
export class SharedModule {}

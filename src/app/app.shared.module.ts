import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonButtonComponent } from './shared/components/common-button/common-button.component';
import { ParagraphComponent } from './shared/components/paragraph/paragraph.component';
import { HeadingComponent } from './shared/components/heading/heading.component';

@NgModule({
    imports:[CommonModule],
    declarations:[CommonButtonComponent,ParagraphComponent,HeadingComponent],
    exports:[CommonButtonComponent,ParagraphComponent,HeadingComponent]
})
 export class SharedModule{

 }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonButtonComponent } from './shared/components/common-button/common-button.component';
import { ParagraphComponent } from './shared/components/paragraph/paragraph.component';
@NgModule({
    imports:[CommonModule],
    declarations:[CommonButtonComponent,ParagraphComponent],
    exports:[CommonButtonComponent,ParagraphComponent]
})
 export class SharedModule{

 }
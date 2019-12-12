import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonButtonComponent } from './shared/components/common-button/common-button.component';
@NgModule({
    imports:[CommonModule],
    declarations:[CommonButtonComponent],
    exports:[CommonButtonComponent]
})
 export class SharedModule{

 }
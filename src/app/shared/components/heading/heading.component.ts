import { Component, Input } from "@angular/core";

@Component({
    selector:'app-heading',
    templateUrl:'./heading.component.html',
    styleUrls:['./heading.component.scss']
})

export class HeadingComponent{
   @Input('class') class: string;
   @Input('tag') tag : string;
   @Input('isHeaderTagRequired') isHeaderTagRequired: boolean;
   @Input('headingText') headingText: string;
}

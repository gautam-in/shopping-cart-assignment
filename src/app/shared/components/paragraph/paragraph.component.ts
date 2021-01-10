import { Component, Input } from "@angular/core";

@Component({
    selector:'app-paragraph',
    templateUrl:'./paragraph.component.html',
    styleUrls:['./paragraph.component.scss']
})

export class ParagraphComponent{
    @Input('type') paragraphType : string;
    @Input('desc') description : string;
}
import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector:'app-paragraph',
    templateUrl:'./paragraph.component.html',
    styleUrls:['./paragraph.component.scss']
})

export class ParagraphComponent implements OnInit{
    @Input('type') paragraphType : string;
    @Input('desc') description : string;
    ngOnInit(){

    }
}
import { Component, Input } from '@angular/core';
@Component({
    selector: 'app-figure',
    templateUrl:'./figure.component.html',
    styleUrls:['./figure.component.scss'],
    
})


export class FigureComponent{
    @Input('url') url:string;
    @Input('class') class :string;
    @Input('alt') alt :string;
    @Input('dynamicClass') dynamicClass: string;
}
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-common-btn]',
  templateUrl: './common-btn.component.html',
  styleUrls: ['./common-btn.component.scss']
})
export class CommonBtnComponent implements OnInit {
  @Input() config:any;
  public styles:any;
  @Input() buttonText:string
  constructor() { }

  ngOnInit() {
    this.styles = {
      'background-color': this.config.bgColor,
      'color':this.config.color,
      'padding':this.config.padding,
      'width':this.config.width,
      'position':this.config.position,
      'border':this.config.border,
      'margin':this.config.margin,
      'cursor':this.config.cursor
    }
  }

}

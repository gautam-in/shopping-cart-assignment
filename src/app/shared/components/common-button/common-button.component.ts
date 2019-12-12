import { Component, OnInit, Input, Output, EventEmitter, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-common-button',
  templateUrl: './common-button.component.html',
  styleUrls: ['./common-button.component.scss']
})
export class CommonButtonComponent implements OnInit {
  defaultClass: string;
  @Input('type') type: string;
  @Input('title') buttonTitle:string;
  @Input('buttonSize') size :string;
  @Input('customStyles') customStyles:any;
  @Input('isTransitionRequired') isTransitionRequired: boolean;
  @Output('onBtnClick') onBtnClick: EventEmitter<any> = new EventEmitter();
  constructor(private el: ElementRef, private renderer : Renderer2) { }

  ngOnInit() {
    if(!this.type){
      this.type = 'btn-primary';
    }
    if(!this.size){
      this.defaultClass = "btn-regular";
    }else{
      switch(this.size){
        case 'regular':
            this.defaultClass = "btn-regular";
            break;
        case 'large':
            this.defaultClass ="btn-lg";
            break;
        case 'extraLarge':
            this.defaultClass = "btn-xlg";
            break;
        case 'tiny':
            this.defaultClass = "btn-sm";
            break;
        default:
            this.defaultClass = "btn-regular";
            break;
      }
    }

    if(this.isTransitionRequired){
      this.renderer.addClass(this.el.nativeElement,'transition');
    }
  }

  onSubmit(){
    this.onBtnClick.emit();
  }
}

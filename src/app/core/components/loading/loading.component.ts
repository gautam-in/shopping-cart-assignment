import { Component, OnInit, Input, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements AfterViewInit {
  @Input() size:string ="normal";
  @Input() msg: string = "Please wait while page is loading"
  constructor(private el: ElementRef,
    private renderer: Renderer2) { }
  

  ngAfterViewInit() {
    this.setFontSize();
  }

  setFontSize(){
    let element = this.el.nativeElement;
    switch(this.size){
      case 'normal':
          this.renderer.setStyle(element,"font-size","20px");
          break;
      case 'medium':
          this.renderer.setStyle(element,"font-size","16px");
          break;
      case 'small':
          this.renderer.setStyle(element,"font-size","12px");
          break;
      default:
          this.renderer.setStyle(element,"font-size","20px");
          break;      
    }
    
  }

}

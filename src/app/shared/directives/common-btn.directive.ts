import { Directive, ElementRef, Renderer2, Input, OnInit, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appCommonBtn]'
})
export class CommonBtnDirective implements OnInit{
  @Output('onClick') onBtnClick: EventEmitter<any> = new EventEmitter();
  @Input() defaultColor: string;
  @Input()  textColor:string;
  @HostListener('click') onClick(){
    this.onBtnClick.emit();
  }
  @HostListener('keydown') onKeydown(){
    this.onBtnClick.emit();
  }
  constructor(private elementref:ElementRef, private renderer: Renderer2) {

   }
   ngOnInit(){
    if (this.defaultColor) {
      this.setBgColor(this.defaultColor)
    } else {
      this.setBgColor('#D10157')
    }

    if (this.textColor) {
      this.setTextColor(this.textColor)
    } else {
      this.setTextColor('#fff');
    }

   }

   
  setBgColor(color: string) {
    this.renderer.setStyle(
    this.elementref.nativeElement,'backgroundColor',color);
  }
  setTextColor(color: string){
    this.renderer.setStyle(
      this.elementref.nativeElement,'color',color)
  }
   
}

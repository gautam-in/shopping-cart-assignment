import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'product-card-board',
  templateUrl: './card-board.component.html',
  styleUrls: ['./card-board.component.scss']
})
export class CardBoardComponent implements OnInit {
  public innerWidth: any;
  public customStyles:any;
  public buttonText: string = "Buy now";
  @Input('title') cardTitle :string;
  @Input('desc') cardDes : string;
  @Input('imageUrl') imageUrl: string;
  @Input('price') price: string
  @Input ('imageAlt') imgAlt:string;
  
  @Output('onClick') onClick: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.setButtonStylesForScreenSize();
  }

  btnClicked(){
    this.onClick.emit();
  }
  @HostListener('window:resize', ['$event']) onResize(event){
    this.innerWidth = window.innerWidth;
    this.setButtonStylesForScreenSize();
  }

  setButtonStylesForScreenSize(){
    if(this.innerWidth<=992){
      this.buttonText = `Buy now@${this.price}`;
      this.customStyles = {
        "width": "100%"
      }
    }else{
      this.buttonText ="Buy now";
      this.customStyles = {
        "width": "auto",
        "float": "right",
        "margin-top":"20px"
      }
    }
  }

}

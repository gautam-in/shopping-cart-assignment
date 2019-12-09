import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product-card-board',
  templateUrl: './card-board.component.html',
  styleUrls: ['./card-board.component.scss']
})
export class CardBoardComponent implements OnInit {


  @Input('title') cardTitle :string;
  @Input('desc') cardDes : string;
  @Input('imageUrl') imageUrl: string;
  @Input('price') price: string
  @Input ('imageAlt') imgAlt:string;

  @Output('onClick') onClick: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  btnClicked(){
    this.onClick.emit();
  }

}

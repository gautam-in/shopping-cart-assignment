import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mini-navigation',
  templateUrl: './mini-navigation.component.html',
  styleUrls: ['./mini-navigation.component.scss']
})
export class MiniNavigationComponent implements OnInit {
  @Input('selectedTab') selectedTab:any;
  @Input('tabList') tablist: any;
  @Output('selectTabFn') onSelectTab: EventEmitter<any> = new EventEmitter();
  @Output('buttonClick') buttonClick: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  selectTab(tab:any){
    this.onSelectTab.emit(tab);
  }
  onButtonClicked(){
    this.buttonClick.emit();
  }

}

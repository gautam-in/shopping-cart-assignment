import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product-navigation-tabs',
  templateUrl: './navigation-tabs.component.html',
  styleUrls: ['./navigation-tabs.component.scss']
})
export class NavigationTabsComponent implements OnInit {
  @Input('selectedTabId') selectedTabId: boolean;
  @Input('tabList') tabList: any;
  @Output('onSelect') onSelect: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  selectedTab(tab){
    this.onSelect.emit(tab);
  }

}

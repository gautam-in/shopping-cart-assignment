import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mini-secondary-nav',
  templateUrl: './mini-secondary-nav.component.html',
  styleUrls: ['./mini-secondary-nav.component.scss']
})
export class MiniSecondaryNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onmenuBtnClick(){
    document.getElementById('mini-menu-navigation').classList.toggle("show");
  }

}
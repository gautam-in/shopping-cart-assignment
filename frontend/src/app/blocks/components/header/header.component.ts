import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  showMenu: boolean = false;
  ngOnInit(): void {
  }
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}

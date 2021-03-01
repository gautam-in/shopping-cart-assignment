import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('showMenu', { static: true }) showMenu: any;
  
  constructor() {}
  ngOnInit(): void {}


  toggleMenu() {
    if (this.showMenu.nativeElement.style.display === 'none') {
      this.showMenu.nativeElement.style.display = 'block';
    } else {
      this.showMenu.nativeElement.style.display = 'none';
    }
  }
}

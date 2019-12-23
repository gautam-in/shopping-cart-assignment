import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-mini-secondary-nav',
  templateUrl: './mini-secondary-nav.component.html',
  styleUrls: ['./mini-secondary-nav.component.scss']
})
export class MiniSecondaryNavComponent implements OnInit {

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      document.getElementById('mini-menu-navigation').classList.remove("show");
    }
  }

  constructor(private eRef: ElementRef) { }

  ngOnInit() {
  }

  onmenuBtnClick(){
    document.getElementById('mini-menu-navigation').classList.toggle("show");
  }

}
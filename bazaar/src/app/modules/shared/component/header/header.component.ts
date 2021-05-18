import { Component, ElementRef, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { ShareService } from '../../service/share.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  totalItem :number = 0;
  constructor(private _shareService : ShareService, private library: FaIconLibrary, private elem : ElementRef) {
    library.addIcons( faBars);
  }

  ngOnInit(): void {
    this.totalItem = JSON.parse(localStorage.getItem('cartItem')) ? JSON.parse(localStorage.getItem('totalItem')) : '0' ;
    this._shareService.getCartCount().subscribe((count:number) => {
       this.totalItem = count;
    })
  }


  displayMobileMenu(){
    let links = this.elem.nativeElement.querySelector('#menu-links');
    if (links.style.display === "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
    }
  }

}


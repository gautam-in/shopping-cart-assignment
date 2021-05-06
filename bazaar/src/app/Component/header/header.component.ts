import { Component, OnInit } from '@angular/core';

import { ShareServiceService } from 'src/app/service/share-service.service';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  totalItem :number = 0;
  constructor(private _shareService : ShareServiceService, private library: FaIconLibrary) {
    library.addIcons( faBars);
  }

  
  ngOnInit(): void {
    
    this.totalItem = JSON.parse(localStorage.getItem('cartItem')) ? JSON.parse(localStorage.getItem('cartItem')).reduce(function (prev, cur) {
      return prev  + cur.quantity;
    }, 0) : '0' ;
    this._shareService.getCartCount().subscribe((count:any) => {
        //this.totalItem= count.reduce;

        let quantityCalculate = count;
        this.totalItem = quantityCalculate.reduce(function (prev, cur) {
          return prev  + cur.quantity;
        }, 0);
    })
  }


  displayMobileMenu(){
    //console.log('test');
    var links = document.getElementById("menu-links");

    if (links.style.display === "block") {
      links.style.display = "none";
     
    } else {
      links.style.display = "block";
    

    }
  }

}

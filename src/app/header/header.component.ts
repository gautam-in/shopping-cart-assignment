import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
// import { Overlay, OverlayRef, } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { OverlayComponent } from '../overlay/overlay.component';
import { SibService } from '../sib.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  overlayRef: OverlayRef;
  constructor(private overlay: Overlay, private service: SibService) { 
    this.service.cartSubject.subscribe((data)=>{
      //getting the length(cartValue.length) from product.component.ts to this component through subscribe method
      this.cartItem = data;
    });
  }
  



    ngOnInit() {    
      if (this.service.subsVar==undefined) {    
        this.service.subsVar = this.service.closeEve.subscribe((name:string) => {    
          this.close();    
        });    
      }    

      this.cartItemFun();
    }  

    cartItem = 0; 

    cartItemFun(){
      if(localStorage.getItem('localCart')!= null){
        var cartCount = JSON.parse(localStorage.getItem('localCart'));
        this.cartItem = cartCount.length
      }
    }

 
  
  open() {
    // We create the overlay
    this.overlayRef = this.overlay.create();
    //Then we create a portal to render a component
    const componentPortal = new ComponentPortal(OverlayComponent);
    // We add a custom CSS class to our overlay
    this.overlayRef.addPanelClass("example-overlay");
    //We render the portal in the overlay
    this.overlayRef.attach(componentPortal);
   
}


 
 close(){
  this.overlayRef.detach();
  
}

  
}

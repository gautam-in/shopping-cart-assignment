import { DataService } from '../services/data.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/product.model';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from 'src/app/shared/cart/cart.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  groceryCart: IProduct[] = [];
  isLoggedIn: boolean;
  loggedInUserName: string;
  closeResult: string;
  
  constructor(
    private cartService: CartService,
    private dataService: DataService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getLoggedInInfo();
    this.cartService.cartItems$.subscribe((data: IProduct[]) => {
      this.groceryCart = data;
    });
  }

  open() {
    this.modalService.open(CartComponent, { ariaLabelledBy: 'cartTitle' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  getLoggedInInfo(): void {
    this.dataService.isLoggedIn$.subscribe(response => {
      this.isLoggedIn = response.isLoggedIn;
      this.loggedInUserName = response.userName;
    });
  }

  loggedOut(): void {
    alert('You have successfully logged out');
    this.isLoggedIn = false;
    this.router.navigate(['auth/signin']);
  }
}

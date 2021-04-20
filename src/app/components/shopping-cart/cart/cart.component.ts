import { Component, OnInit } from '@angular/core';
import { MessengerService} from 'src/app/service/messenger.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  cartItems = [
    {id: 1, productId: 1, productName: 'Test 1', qty: 4, price: 200},
    {id: 2, productId: 3, productName: 'Test 2', qty: 2, price: 400}
  ];

  cartTotal = 0;

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {

    this.msg.getMsg().subscribe((product: any) => {
      console.log(product)

      this.cartItems.forEach(item =>{
        this.cartTotal += (item.qty * item.price);
      })
    })


  }

}

import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { MessengerService } from 'src/app/service/messenger.service';


@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {

  products: any = [];

  constructor(private httpClient: HttpClient, private msg:MessengerService) { }

    ngOnInit(): void {
    this.httpClient.get("assets/data.json").subscribe(data =>{
      console.log(data);
      this.products = data;
    })
  }

  handleAddtoCart(){
    this.msg.sendMsg(this.products)
  }

}

import { Component, OnInit } from '@angular/core';
import { SibService } from 'src/app/sib.service';
import products from '../../server/products/index.get.json'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private auth: SibService) { }
  public productList:{name:string, imageURL:string}[] = products;
  
  

  ngOnInit(): void {
  }

  itemsCart: any =[];

  addToCart(category){
    console.log(category);
    let cartDataNull = localStorage.getItem('localCart')
    if(cartDataNull == null){
      let storeDataGet:any =[];
      storeDataGet.push(category);
      localStorage.setItem('localCart', JSON.stringify(storeDataGet));
    }
    else{
      var newId = category.id;
      let index = -1;
      this.itemsCart = JSON.parse( localStorage.getItem('localCart'));
      for(let i=0; i<this.itemsCart.length; i++){


        if(newId=== this.itemsCart[i].id){
          this.itemsCart[i].qty = parseInt(category.qty);
          parseInt(this.itemsCart[i].qty)
          index = i;
          break
        }

      }
      if(index == -1){
        this.itemsCart.push(category);
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
      }
      else{
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
      }
    }
    this.cartNumberFun();
    // localStorage.setItem('localCart', JSON.stringify(category));
  }

  cartNumber:number = 0;
  cartNumberFun(){
    var cartValue = JSON.parse(localStorage.getItem('localCart'));
    this.cartNumber = cartValue.length;
    this.auth.cartSubject.next(this.cartNumber)

  }


    //Only for Mobile responsive sidenav
   openNav() {
    document.getElementById("mySidenav").style.height = "221px";
  }
  
   closeNav() {
    document.getElementById("mySidenav").style.height = "15px";
  }

    
  

}

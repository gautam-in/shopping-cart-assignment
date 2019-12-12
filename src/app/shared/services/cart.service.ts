import { Injectable } from '@angular/core';
import { BehaviorSubject, noop } from 'rxjs';
import { ICart } from './../../models/Icart';


@Injectable()
export class CartService {
    private cartSource :BehaviorSubject<ICart[]> = new BehaviorSubject([]);
    private cartCountSource = new BehaviorSubject<number>(0);
    cartData = this.cartSource.asObservable();
    cartCount = this.cartCountSource.asObservable();
    addCartItem(cartItem:ICart){
            let duplicateFlag = false;
            for(let i=0;i<this.cartSource.value.length;i++){
                if(this.cartSource.value[i].id == cartItem.id){
                    duplicateFlag = true;
                }
            }
            if(duplicateFlag){
                for(let i=0;i<this.cartSource.value.length;i++){
                    if(this.cartSource.value[i].id == cartItem.id){
                        this.cartSource.value[i].count++;
                     }
                }
                
            }else{
                const updatedValue = [...this.cartSource.value, cartItem];
                this.cartSource.next(updatedValue);
            }
            let count = 0;
            for(let i=0;i<this.cartSource.value.length;i++){
                count+=this.cartSource.value[i].count;
            }
            this.cartCountSource.next(count);
    }
    incrementCount(){
        this.cartCountSource.next(this.cartCountSource.value + 1);
    }
    decrementCount(){
        this.cartCountSource.next(this.cartCountSource.value - 1);
    }
    resetCount(){
        this.cartCountSource.complete();
        this.cartSource.complete();
    }
}
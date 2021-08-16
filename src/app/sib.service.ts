import { Injectable, EventEmitter } from '@angular/core';
import { Subscription, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SibService {

  constructor() { }

  closeEve = new EventEmitter();
  subsVar: Subscription; 

  closeOverlay(){
    this.closeEve.emit();
  }

  cartSubject = new Subject<any>();

  
}

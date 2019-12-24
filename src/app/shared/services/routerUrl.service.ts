import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()

export class RouterUrlService{
    public pageUrl:string;
    public _url : BehaviorSubject<string> = new BehaviorSubject("");
    //public readonly test: Observable<string> = this._test.asObservable();
    constructor(private route : Router){

    }
    setPageUrl(val:string){
        this._url.next(val);
        this.pageUrl = val;
    }
    getPageUrl(){
        return this._url;
    }
}
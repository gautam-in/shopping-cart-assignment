import { ActivatedRoute, convertToParamMap, ParamMap, Params } from "@angular/router";
import { ReplaySubject } from "rxjs";

export class ActivatedRouteStube implements Partial<ActivatedRoute>{
    private subject = new ReplaySubject<ParamMap>();
    readonly queryParamMap = this.subject.asObservable();
    constructor(){

    }

    setParamMap(params:Params){
       this.subject.next(convertToParamMap(params))
    }
}
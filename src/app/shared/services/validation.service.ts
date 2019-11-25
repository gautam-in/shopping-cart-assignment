import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';
import { noop } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor(private _constant: ConstantsService) { }
  validations:any;

  validateRule(fieldValue:any,validation:any){
    return validation.rule(fieldValue,validation.value) ? true :false
  }

  get(){
    this.validateObj();
    return this;
  }

  private validateObj(){
    let config = {
      "validEmail": this._constant.VALID_EMAIL,
      "validPassword":this._constant.VALID_PASSWORD
    }
    this.validations = [{
        "field":"email",
        "validation":"Please provide email value",
        "value":"",
        "error":false,
        "rule": function(title:string){
          if(title){
            return true;
          }else{
            return false
          }
        },
        "errorMsg": "Email is not provided. Please provide email",
        "key": "requiredName"        
      },
      {
        
          "field":"email",
          "validation":"Valid email",
          "value":"",
          "checked":false,
          "error":false,
          "check":false,
          "rule": function(title:string){
            if(title){
              return config.validEmail.test(title)
            }else{
              return false;
            }
          },
          "errorMsg": "Please provide valid email",
          "key": "titleMin"        
        
      },
      {
        
        "field":"password",
        "validation":"Valid password",
        "value":"",
        "checked":false,
        "error":false,
        "check":false,
        "rule": function(title:string){
          if(title){
            return config.validPassword.test(title)
          }else{
            return false;
          }
        },
        "errorMsg": "Please provide valid password",
        "key": "titleMin"        
      
    }
    ];
    
  }

  validate(fieldValue:any,type:string){
    for(let i=0; i<this.validations.length;i++){
      if(this.validations[i].field == type && !this.validateRule(fieldValue,this.validations[i])){
        this.validations[i].error = true;
      }else if(this.validations[i].field == type){
        this.validations[i].error = false;
      }else{
        noop();
      }
    }
  }
}

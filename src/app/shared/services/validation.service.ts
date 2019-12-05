import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';
import { noop } from 'rxjs';
import { error } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  selectedPassword:any;
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
      "validPassword":this._constant.VALID_PASSWORD,
      "valid_name": this._constant.VALID_NAME
    }
    this.validations = [{
        "field":"email",
        "validation":"Please provide email value",
        "required":true,
        "value":"",
        "error":false,
        "rule": function(title:string){
          if(title && title.length){
            return true;
          }else{
            return false;
          }
        },
        "errorMsg": "Email Field can not be empty."
      },
      {
        
          "field":"email",
          "validation":"Valid email",
          "value":"",
          "error":false,
          "rule": function(title:string){
            if(title && title.length){
              return config.validEmail.test(title)
            }else{
              return true;
            }
          },
          "errorMsg": "Please provide a valid email"
        
      },
      {
        "field":"password",
        "validation":"No value in password",
        "value":"",
        "required":true,
        "error":false,
        "rule": function(title:string){
          if(title && title.length){
            return true;
          }else{
            return false;
          }
        },
        "errorMsg": "Password can not be empty."
      
      },
      {
        "field":"password",
        "validation":"Valid password",
        "value":"",
        "error":false,
        "rule": function(title:string){
          if(title && title.length){
            return config.validPassword.test(title);
          }else{
            return true;
          }
        },
        "errorMsg": "Please provide a valid password"
      },
      {
        "field":"confirmPassword",
        "validation":"Confirm password",
        "value":"",
        "required":true,
        "error":false,
        "rule": function(title:string){
          if(title && title.length){
            return true;
          }else{
            return false;
          }
        },
        "errorMsg": "Confirm password can not be empty"
      },
      {
        "field":"confirmPassword",
        "validation":"Confirm password",
        "value":"",
        "required":true,
        "error":false,
        "rule": function(confirmPassword:any,value:any){
          if(value && confirmPassword){
            return confirmPassword === value ?  true: false;
          }else{
            return true;
          }
        },
        "errorMsg": "Confirm password does not match with password"
      },
      {
        "field":"firstname",
        "validation":"No value in First name",
        "value":"",
        "required":true,
        "error":false,
        "rule": function(title:string){
          if(title && title.length){
            return true;
          }else{
            return false;
          }
        },
        "errorMsg": "First name can not be empty"
      
      },
      {
        "field":"firstname",
        "validation":"Valid First name",
        "value":"",
        "required":true,
        "error":false,
        "rule": function(title:string){
          if(title && title.length){
            return config.valid_name.test(title)
          }else{
            return true;
          }
        },
        "errorMsg": "Please provide a valid first name"
      
      },
      {
        "field":"lastname",
        "validation":"No value in Last name",
        "value":"",
        "required":true,
        "error":false,
        "rule": function(title:string){
          if(title && title.length){
            return true;
          }else{
            return false;
          }
        },
        "errorMsg": "Last name can not be empty"
      
      },
      {
        "field":"lastname",
        "validation":"invalid last name",
        "value":"",
        "required":true,
        "error":false,
        "rule": function(title:string){
          if(title && title.length){
            return config.valid_name.test(title)
          }else{
            return true;
          }
        },
        "errorMsg": "Please provide a valid last name"
      
      }
    ];
    
  }

  validate(fieldValue:any,type:string){
    for(let i=0; i<this.validations.length;i++){
      if(type === "confirmPassword"){
        this.validations[i].value = this.selectedPassword;
      }
      if(this.validations[i].field == type && !this.validateRule(fieldValue,this.validations[i])){
        this.validations[i].error = true;
      }else if(this.validations[i].field == type){
        this.validations[i].error = false;
      }else{
        noop();
      }
    }
  }

  setErrors(formVal:any,errors:any){
    for (let key in formVal){
      if(formVal.hasOwnProperty(key)){
        formVal[key].error.isError = false;
      }
   }
    if(errors && errors.length){
      errors.map((obj)=>{
        if(obj.error){
          formVal[obj.field].error.isError = true;
        }else{
          formVal[obj.field].error.isError = false;
        }
        
        formVal[obj.field].error.errorMsg =obj.errorMsg;
      })
    }
  }
}

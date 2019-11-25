import { Component, OnInit } from '@angular/core';
import { ValidationService } from './../shared/services/validation.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginEntity:any;
  errorValues:any;
  formsError={
    "email":"",
    "password":""
  };
  constructor(private _validationService : ValidationService){
  }
  ngOnInit(){
    this._validationService.get();
  }
  changedField(fieldValue:any,type:any){
    this._validationService.validate(fieldValue,type);
    this.errorValues = this._validationService.validations.filter(obj=> obj.error=== true);
    
  }
  onSubmit(){
    let elements = document.getElementById("js-login-form");
  }
}
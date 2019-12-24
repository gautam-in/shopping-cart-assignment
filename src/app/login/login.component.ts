import { Component, OnInit } from '@angular/core';
import { ValidationService } from './../shared/services/validation.service';
import { Router } from '@angular/router';
import { ILogin } from './../models/ILogin';
import { RouterUrlService } from '../shared/services/routerUrl.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private errorValues:any;
  public loginForm:ILogin;
  constructor(private _validationService : ValidationService, private router: Router, private routerUrlService: RouterUrlService){
  }
  ngOnInit(){
    this.loginForm = {
      email:{
        name:"",
        error:{
          isError: false,
          errorMsg: ""
        }
      },
      password:{
        name:"",
        error:{
          isError: false,
          errorMsg: ""
        }
      }
    }
    this._validationService.get();
    this.routerUrlService.setPageUrl(this.router.url);
  }
  changedField(fieldValue:any,type:any){
    this._validationService.validate(fieldValue,type);
    this.errorValues = this._validationService.validations.filter(obj=> obj.error=== true);
    this._validationService.setErrors(this.loginForm,this.errorValues);
  }
  onSubmit(){
    let errors=[];
    let fields = document.querySelectorAll("input");
    for(let i =0;i<fields.length;i++){
      this.changedField(fields[i].value,fields[i].name);
    }

    errors = this._validationService.validations.filter(obj=>obj.error===true);
    if(errors && !errors.length){
      this.router.navigate(['/home']);
    }
  }
}
import { Component, OnInit } from '@angular/core';
import { ValidationService } from './../shared/services/validation.service';
import { Router } from '@angular/router';
import { ISignup } from './../models/ISignup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  private errorValues:any;
  public signupForm: ISignup;
  constructor(private _validationService : ValidationService,private router: Router) { }

  ngOnInit() {
    this.signupForm={
      firstname:{
        name:"",
        error:{
          isError: false,
          errorMsg: ""
        }
      },
      lastname:{
        name:"",
        error:{
          isError: false,
          errorMsg: ""
        }
      },
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
      },
      confirmPassword:{
        name:"",
        error:{
          isError: false,
          errorMsg: ""
        }
      }
    }
    this._validationService.get();
  }
  changedField(fieldValue:any,type:any){
    if(type ==='password'){
     this._validationService.selectedPassword = fieldValue;
    }
    this._validationService.validate(fieldValue,type);
    this.errorValues = this._validationService.validations.filter(obj=> obj.error=== true);
    console.log("Error values =  ",this.errorValues)
    this._validationService.setErrors(this.signupForm,this.errorValues);
    console.log("Forn obj = ",this.signupForm)
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

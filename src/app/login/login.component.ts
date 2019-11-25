import { Component, OnInit } from '@angular/core';
import { ValidationService } from './../shared/services/validation.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginEntity:any;
  errorValues:[]
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
    console.log(this._validationService.validations);
    this.errorValues = this._validationService.validations.filter(obj=> obj.error=== true);
    console.log(this.errorValues)

  }
  onSubmit(){
    let elements = document.getElementById("js-login-form");
  }
}

// ValidatationMessages = {
//   "email": {
//     "required": "Email is required",
//     "isValidEmail":"Please enter a valid email id"
//   },
//   "password": {
//     "required": "Password is required",
//     "minlength": "Password must be atleast 6 characters long.",
//     "numberAlphabet":"Password must have number and alphabet",
//     "canNotHaveSpace":"Password can not have space."
//   }
// };

// formErrors = {
//   email: '',
//   password:''
// };

// loginForm = this.fb.group({
//   email:['',Validators.required],
//   password:['',Validators.required]
// });
// constructor(private fb:FormBuilder){}
// onSubmit(){
//   console.warn(this.loginForm.status)
// }

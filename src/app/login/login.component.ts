import { Component, OnInit } from '@angular/core';
import { ValidationService } from './../shared/services/validation.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private errorValues:any;
  constructor(private _validationService : ValidationService, private router: Router){
  }
  ngOnInit(){
    this._validationService.get();
  }
  changedField(fieldValue:any,type:any){
    this._validationService.validate(fieldValue,type);
    this.errorValues = this._validationService.validations.filter(obj=> obj.error=== true);
    
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
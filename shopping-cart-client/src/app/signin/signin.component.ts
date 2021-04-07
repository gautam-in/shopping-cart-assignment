import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login-services/login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
 user={
  email:'',
  password:''
}
isLoginError:boolean=false;
isLoggedIn:boolean = false;
  constructor(private router:Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.setLoginFlag(false);
  }
  submitLogin(form:NgForm){
    this.user.email=form.value.email;
    this.user.password=form.value.password

     if(this.loginService.checckLoginCred(this.user)){
        this.loginService.setLoginFlag(true);
        localStorage.setItem('isLoggedIn','true');
        this.router.navigate(['/home']);
        
     }
      else
      this.isLoginError=true;    
  }
}

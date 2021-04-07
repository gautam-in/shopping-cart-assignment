import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login-services/login.service';

@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.css']
})
export class MiniCartComponent implements OnInit {

  closeModel = true;
  constructor(private router: Router,private loginService: LoginService) { }

  ngOnInit(): void {
  }
  close(event:Event){
    event.preventDefault();
    this.closeModel=false;
    this.loginService.setCloseFlag(false);

  }
  shopping(){
    this.router.navigate(['/plp']);
    this.loginService.setCloseFlag(false);
  }
}

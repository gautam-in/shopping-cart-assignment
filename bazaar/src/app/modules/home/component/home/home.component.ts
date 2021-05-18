import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/modules/shared/Interface/categories';
import { HttpService } from 'src/app/modules/shared/service/http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 
  categoryItems : Categories[] = [];
  
  
  constructor(private _httpService : HttpService) { }

  ngOnInit(): void {
    this.getCategories();
  }

 




getCategories(){
  this._httpService.getCategoriesService().subscribe(res=>{
   
   this.categoryItems = res

  
   
}, err=>{
  console.error(err);
})
}





}

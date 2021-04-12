import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Input() category: any;
  categories: any = [];
  banners : any =[];

  constructor(private _http: HttpClient,
    private router: Router,
    private _appService : AppService) {}

  ngOnInit(): void {
    this.fetchBanners()
    this.fetchCategories();
  }

  fetchCategories() {
    this._appService.getCatagories().subscribe((data) => {
      this.categories = data;
    });
  }

  exploreProduct(name:any):void{
    this.router.navigate(['app/product' ])

  }

  fetchBanners(){
    this._appService.getBanners().subscribe((data)=>{
      this.banners = data
    })
  }
}

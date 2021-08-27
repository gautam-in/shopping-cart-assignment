import { Component, OnInit } from '@angular/core';
import category from '../../server/categories/index.get.json'
import banners from '../../server/banners/index.get.json'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public categoryList: {name: string, imageURL: string}[] = category;
  public bannerList: {}[]= banners;

  ngOnInit(): void {
  }

}

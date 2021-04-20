import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-baby-item',
  templateUrl: './baby-item.component.html',
  styleUrls: ['./baby-item.component.css']
})
export class BabyItemComponent implements OnInit {

  babyproducts: any = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/babydata.json").subscribe(data =>{
      console.log(data);
      this.babyproducts = data;
    })
  }

}

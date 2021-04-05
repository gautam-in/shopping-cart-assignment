import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Input() category: any;
  categories: any = [];

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories() {
    this._http.get('server/categories/index.get.json').subscribe((data) => {
      this.categories = data;
    });
  }
}

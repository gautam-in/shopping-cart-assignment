import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categories } from 'src/app/modules/shared/Interface/categories';
import { HttpService } from 'src/app/modules/shared/service/http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  categoryItems: Categories[] = [];
  keyName: string = '';
  categoryId: string;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getCategories();
    this._route.params.subscribe((parms) => {
      this.categoryId = parms['id'];
    });
  }

  getCategories() {
    this._httpService.getCategoriesService().subscribe(
      (res) => {
        console.log(res);
        this.categoryItems = res;
      },
      (err) => {
        console.error('error in product page');
      }
    );
  }

  filterItems(categoryId) {
    this.categoryId = categoryId;
  }

  selected() {
    this.categoryItems.forEach((category) => {
      if (category.key === this.keyName) {
        this.categoryId = category.id;
      }
    });
  }
}

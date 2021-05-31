import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.reducer';
import { State as CategoryState } from 'src/app/home/store/category.reducer';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  categories$!: Observable<CategoryState>;
  constructor(private store: Store<AppState>) {
    this.categories$ = this.store.select('categories');
  }

  ngOnInit(): void {}
}

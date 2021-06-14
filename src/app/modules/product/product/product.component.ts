import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatSelectChange } from '@angular/material/select';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Enter } from 'src/app/core/common/animations/enter.animation';
import { AppState } from 'src/app/models/app-state.model';
import { CategoryState } from '../../home/models/category-state.model';
import { selectCategoryState } from '../../home/store/selectors/category.selectors';
import { ProductState } from '../models/product-state.model';
import { filterBy } from '../store/actions/product.actions';
import { selectProductState } from '../store/selectors/products.selectors';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [Enter],
  host: { '[@Enter]': '' },
})
export class ProductComponent implements OnInit {
  categories$!: Observable<CategoryState>;
  products$!: Observable<ProductState>;
  isMobile = false;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private media: MediaObserver
  ) {
    this.categories$ = this.store.pipe(select(selectCategoryState));
    this.products$ = this.store.pipe(select(selectProductState));
    this.media.asObservable().subscribe((e) => {
      this.isMobile = media.isActive('lt-xs');
    });
  }

  ngOnInit(): void {}

  changeFilter(event: MatSelectChange) {
    this.router.navigate(['/products'], {
      queryParams: { categoryId: event.value == -1 ? undefined : event.value },
      queryParamsHandling: 'merge',
    });
  }
}

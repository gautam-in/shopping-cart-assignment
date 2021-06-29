import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action, StoreModule } from '@ngrx/store';
import { Observable, of, throwError } from 'rxjs';
import { ErrorMsg } from 'src/app/core/common/constants/error.constants';
import { UtilService } from 'src/app/core/services/util.service';
import { ProductService } from 'src/app/modules/product/service/product.service';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppEffectModule } from 'src/app/store/effects/app.effects.module';
import { appReducer } from 'src/app/store/reducers/app.reducer';
import { Category } from '../../models/category.model';
import {
  fetchCategory,
  fetchCategoryError,
  setCategories,
} from '../actions/categories.actions';
import { CategoryEffects } from './category.effects';

describe('CategoryEffects', () => {
  let effects: CategoryEffects;
  let actions$ = new Observable<Action>();
  let service: any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        BrowserAnimationsModule,
        StoreModule.forRoot(appReducer),
        AppEffectModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MaterialModule,
      ],
      providers: [
        CategoryEffects,
        UtilService,
        {
          provide: ProductService,
          useValue: jasmine.createSpyObj(ProductService, ['fetchCategories']),
        },
        provideMockActions(() => actions$),
      ],
    });
    effects = TestBed.inject(CategoryEffects);
    service = TestBed.inject(ProductService);
  });

  it('can load instance', () => {
    expect(effects).toBeTruthy();
  });

  describe('fetchCategories', () => {
    const response: Category[] = [
      {
        name: 'Beverages',
        key: 'beverages',
        description:
          'Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ',
        enabled: true,
        order: 3,
        imageUrl: '/static/images/category/beverages.png',
        id: '5b675e5e5936635728f9fc30',
      },
      {
        name: 'Bakery Cakes and Dairy',
        key: 'bakery-cakes-dairy',
        description:
          'The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.',
        enabled: true,
        order: 2,
        imageUrl: '/static/images/category/bakery.png',
        id: '5b6899123d1a866534f516de',
      },
    ];
    it('should dispatch SetCategories Action, on success', () => {
      const action = fetchCategory();
      actions$ = of(action);
      service.fetchCategories.and.returnValue(of(response));
      const outcome = setCategories({ payload: response });
      // subscribe to execute the Effect
      effects.fetchcategory.subscribe((action) => {
        expect(action).toEqual(outcome);
      });
    });

    it('should dispatch FetchCategoryError Action, on failure', () => {
      const action = fetchCategory();
      actions$ = of(action);
      service.fetchCategories.and.returnValue(
        throwError(ErrorMsg.UNKNOWN_ERROR)
      );
      const outcome = fetchCategoryError({ payload: ErrorMsg.UNKNOWN_ERROR });

      // subscribe to execute the Effect
      effects.fetchcategory.subscribe((action) => {
        expect(action).toEqual(outcome);
      });
    });
  });

  describe('apiFailAction', () => {
    it('should fail ', () => {
      const action = fetchCategoryError({ payload: ErrorMsg.UNKNOWN_ERROR });
      actions$ = of(action);
      effects.apiFailAction$.subscribe((action) => {
        expect(action.payload).toEqual(action.payload);
      });
    });
  });
});

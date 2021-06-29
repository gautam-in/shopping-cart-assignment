import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/models/app-state.model';
import { selectCategoryState } from '../store/selectors/category.selectors';
import { testAppState } from './banner.resolver.spec';
import { CategoryResolver } from './category.resolver';

describe('CategoryResolver', () => {
  let service: CategoryResolver;
  let store: MockStore<AppState>;
  const initialState: AppState = { ...testAppState };
  let actions$ = new Observable<Action>();
  let mockbCategorySelector: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CategoryResolver,
        provideMockStore({ initialState }),
        provideMockActions(() => actions$),
      ],
    });
    store = TestBed.inject(MockStore);
    service = TestBed.inject(CategoryResolver);
    mockbCategorySelector = store.overrideSelector(selectCategoryState, {
      categories: [],
      error: '',
      loading: false,
    });
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('resolve', () => {
    it('makes expected calls when categories length is 0', () => {
      const routerStateSnapshotStub: RouterStateSnapshot = <any>{};
      const activatedRouteSnapshotStub: ActivatedRouteSnapshot = <any>{};
      const actionsStub: Actions = TestBed.inject(Actions);
      const storeStub: MockStore = TestBed.inject(MockStore);
      spyOn(storeStub, 'dispatch').and.callThrough();
      spyOn(actionsStub, 'pipe').and.callThrough();
      const res = service.resolve(
        activatedRouteSnapshotStub,
        routerStateSnapshotStub
      );
      console.log(res);
      res.subscribe((e: any) => {
        console.log(e);
        expect(e.categories.length).toBe(0);
      });

      expect(actionsStub.pipe).toHaveBeenCalled();
      expect(storeStub.dispatch).toHaveBeenCalled();
    });

    it('makes expected calls when Categories have values', () => {
      const routerStateSnapshotStub: RouterStateSnapshot = <any>{};
      const activatedRouteSnapshotStub: ActivatedRouteSnapshot = <any>{};
      mockbCategorySelector.setResult({
        categories: [
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
        ],
        error: '',
        loading: false,
      });
      store.refreshState();

      const res = service.resolve(
        activatedRouteSnapshotStub,
        routerStateSnapshotStub
      );
      res.subscribe((e: any) => {
        expect(e.categories.length).toBe(1);
      });
    });
  });
});

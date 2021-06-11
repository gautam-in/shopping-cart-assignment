import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { FetchCategory } from '../store/actions/categories.actions';
import { CategoryResolver } from './category.resolver';

describe('CategoryResolver', () => {
  let service: CategoryResolver;
  let store: MockStore;
  const initialState = {};
  let actions$ = new Observable<Action>();
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
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('resolve', () => {
    it('makes expected calls', () => {
      const routerStateSnapshotStub: RouterStateSnapshot = <any>{};
      const activatedRouteSnapshotStub: ActivatedRouteSnapshot = <any>{};
      const actionsStub: Actions = TestBed.inject(Actions);
      const storeStub: MockStore = TestBed.inject(MockStore);
      spyOn(storeStub, 'select').and.callThrough();
      storeStub.select('categories');
      spyOn(storeStub, 'dispatch').and.callThrough();
      storeStub.dispatch(new FetchCategory());
      spyOn(actionsStub, 'pipe').and.callThrough();
      actionsStub.pipe(take(1));
      service.resolve(activatedRouteSnapshotStub, routerStateSnapshotStub);
      expect(actionsStub.pipe).toHaveBeenCalled();
      expect(storeStub.select).toHaveBeenCalled();
      expect(storeStub.dispatch).toHaveBeenCalled();
    });
  });
});

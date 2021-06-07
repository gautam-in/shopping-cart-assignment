import { TestBed } from '@angular/core/testing';

import { CategoryResolver } from './category.resolver';
import { Actions } from '@ngrx/effects';

describe('CategoryResolver', () => {
  let resolver: CategoryResolver;

  beforeEach(() => {
    const a = setup().default();
    TestBed.configureTestingModule({}).configureTestingModule({ providers: [{ provide: Store<AppState>, useValue: a.store },
            { provide: Actions, useValue: a.actions$ }] });
    resolver = TestBed.inject(CategoryResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

function setup() {
    const store = autoSpy(Store<AppState>);
    const actions$ = autoSpy(Actions);
    const builder = {
        store,
        actions$,
        default() {
            return builder;
        },
        build() {
            return new CategoryResolver(store, actions$);
        }
    }
    return builder;
}
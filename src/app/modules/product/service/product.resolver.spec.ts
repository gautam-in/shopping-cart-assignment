import { TestBed } from '@angular/core/testing';

import { ProductResolver } from './product.resolver';
import { Actions } from '@ngrx/effects';
import { autoSpy } from 'auto-spy';

describe('ProductResolver', () => {
  let resolver: ProductResolver;

  beforeEach(() => {
    const a = setup().default();
    TestBed.configureTestingModule({}).configureTestingModule({ providers: [{ provide: Store<AppState>, useValue: a.store },
            { provide: Actions, useValue: a.actions$ }] });
    resolver = TestBed.inject(ProductResolver);
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
            return new ProductResolver(store, actions$);
        }
    }
    return builder;
}
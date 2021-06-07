import { TestBed } from '@angular/core/testing';

import { BannerResolver } from './banner.resolver';
import { Actions } from '@ngrx/effects';

describe('BannerResolver', () => {
  let resolver: BannerResolver;

  beforeEach(() => {
    const a = setup().default();
    TestBed.configureTestingModule({}).configureTestingModule({ providers: [{ provide: Store<fromApp.AppState>, useValue: a.store },
            { provide: Actions, useValue: a.actions$ }] });
    resolver = TestBed.inject(BannerResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

function setup() {
    const store = autoSpy(Store<fromApp.AppState>);
    const actions$ = autoSpy(Actions);
    const builder = {
        store,
        actions$,
        default() {
            return builder;
        },
        build() {
            return new BannerResolver(store, actions$);
        }
    }
    return builder;
}
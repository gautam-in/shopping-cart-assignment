import { AuthService } from './auth.service';
import { AuthInterceptorService } from './auth-interceptor.service';
import { Store } from '@ngrx/store';
import { autoSpy } from 'auto-spy';

describe('AuthInterceptorService', () => {
  it('when intercept is called it should', () => {
    // arrange
    const { build } = setup().default();
    const a = build();
    // act
    // a.intercept();
    // assert
    // expect(a).toEqual
  });
});

function setup() {
  const authService = autoSpy(AuthService);
  const store = autoSpy(Store);
  const builder = {
    authService,
    store,
    default() {
      return builder;
    },
    build() {
      return new AuthInterceptorService(authService, store);
    },
  };

  return builder;
}

import { AuthService } from './auth.service';
import { Store } from '@ngrx/store';
import { autoSpy } from 'auto-spy';

describe('AuthService', () => {
  it('when setLogoutTimer is called it should', () => {
    // arrange
    const { build } = setup().default();
    const a = build();
    // act
    // a.setLogoutTimer();
    // assert
    // expect(a).toEqual
  });
  it('when clearLogoutTimer is called it should', () => {
    // arrange
    const { build } = setup().default();
    const a = build();
    // act
    a.clearLogoutTimer();
    // assert
    // expect(a).toEqual
  });
});

function setup() {
  const store = autoSpy(Store);
  const builder = {
    store,
    default() {
      return builder;
    },
    build() {
      return new AuthService(store);
    },
  };

  return builder;
}

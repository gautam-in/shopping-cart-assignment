import {cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import Routes from '../Routes';
import renderWithRouter from '../../test-utils/routerwrapper';

afterEach(() => {
  cleanup();
});

describe('Test all the Routes', () => {
  test('Test Homepage route', () => {
    const {history} = renderWithRouter(<Routes />, {
      route: '/',
    });
    expect(history.location.pathname).toEqual(`/`);
  });

  test('Test productpage route', () => {
    const {history} = renderWithRouter(<Routes />, {
      route: '/products',
    });
    expect(history.location.pathname).toEqual(`/products`);
  });

  test('Test signup route', () => {
    const {history} = renderWithRouter(<Routes />, {
      route: '/signup',
    });
    expect(history.location.pathname).toEqual(`/signup`);
  });

  test('Test login route', () => {
    const {history} = renderWithRouter(<Routes />, {
      route: '/login',
    });
    expect(history.location.pathname).toEqual(`/login`);
  });
});

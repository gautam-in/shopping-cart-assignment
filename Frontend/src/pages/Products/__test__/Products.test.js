import {cleanup, screen} from '@testing-library/react';
import 'regenerator-runtime/runtime';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render} from '../../../test-utils/wrapper';
import Products from '../Products';

afterEach(() => {
  cleanup();
});

test('render product cards intial condition', async () => {
  const history = createMemoryHistory();
  const state = {id: null};
  history.push('/products', state);

  render(
    <Router history={history}>
      <Products />
    </Router>,
  );
  expect(screen.getByTestId('product-categories')).toBeInTheDocument();
  expect(screen.getByTestId('products-list')).toBeInTheDocument();
});

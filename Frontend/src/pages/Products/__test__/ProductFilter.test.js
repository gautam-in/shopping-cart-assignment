import {cleanup, screen} from '@testing-library/react';
import 'regenerator-runtime/runtime';
import {rest} from 'msw';
import server from '../../../mocks/server';
import {render} from '../../../test-utils/wrapper';
import ProductFilter from '../ProductFilter';

afterEach(() => {
  cleanup();
});

test('render product filter intial condition', async () => {
  render(<ProductFilter filterId={null} />);

  const textListItemOne = await screen.findByText(/beverage/i);
  const textListItemTwo = await screen.findByText(/bakery cakes and dairy/i);

  expect(textListItemOne).toBeInTheDocument();
  expect(textListItemTwo).toBeInTheDocument();
});

test('handle error for product filter', async () => {
  server.resetHandlers(
    rest.get(`${process.env.Base_URL}/categories`, (req, res, ctx) => {
      return res(ctx.status(500));
    }),
  );
  render(<ProductFilter filterId={null} />);
  const error = await screen.findByText(/something went wrong!/i);
  expect(error).toBeInTheDocument();
});

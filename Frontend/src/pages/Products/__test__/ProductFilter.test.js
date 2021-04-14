import {cleanup, screen, within, waitFor} from '@testing-library/react';
import 'regenerator-runtime/runtime';
import userEvent from '@testing-library/user-event';
import {rest} from 'msw';
import server from '../../../mocks/server';
import {render} from '../../../test-utils/wrapper';
import ProductFilter from '../ProductFilter';

afterEach(() => {
  cleanup();
});

const setFilterId = jest.fn();

test('render product filter intial condition', async () => {
  render(<ProductFilter filterId={null} setFilterId={setFilterId} />);

  const textListItemOne = await screen.findByText(/beverage/i);
  const textListItemTwo = await screen.findByText(/bakery cakes and dairy/i);

  expect(textListItemOne).toBeInTheDocument();
  expect(textListItemTwo).toBeInTheDocument();

  const productCategories = screen.getByTestId('product-categories');
  const productCategory = await (
    await within(productCategories).findByText(/beverage/i)
  ).closest('li');
  userEvent.click(productCategory);
  expect(setFilterId).toHaveBeenCalled();
  await waitFor(() => expect(productCategory).toHaveClass('is-active'));
});

test('handle error for product filter', async () => {
  server.resetHandlers(
    rest.get(`${process.env.Base_URL}/categories`, (req, res, ctx) => {
      return res(ctx.status(500));
    }),
  );
  render(<ProductFilter filterId={null} setFilterId={setFilterId} />);
  const error = await screen.findByText(/something went wrong!/i);
  expect(error).toBeInTheDocument();
});

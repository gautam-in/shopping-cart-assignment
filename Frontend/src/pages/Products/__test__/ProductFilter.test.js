import {
  cleanup,
  screen,
  within,
  waitFor,
  fireEvent,
} from '@testing-library/react';
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

  // product filter categories list
  const productFilterList = screen.getByTestId('product-filter-list');
  const textListItemOne = await within(productFilterList).findByText(
    /beverage/i,
  );
  const textListItemTwo = await within(productFilterList).findByText(
    /bakery cakes and dairy/i,
  );

  expect(textListItemOne).toBeInTheDocument();
  expect(textListItemTwo).toBeInTheDocument();

  const productCategory = await (
    await within(productFilterList).findByText(/beverage/i)
  ).closest('li');
  userEvent.click(productCategory);
  await waitFor(() => expect(productCategory).toHaveClass('is-active'));
});

test('product categories select dropdown', async () => {
  // product categories select dropdown
  render(<ProductFilter filterId={null} setFilterId={setFilterId} />);
  fireEvent.change(await screen.findByTestId('select'), {
    target: {value: '5b675e5e5936635728f9fc30'},
  });
  const options = await screen.findAllByTestId('select-option');
  expect(options[0].selected).toBeFalsy();
  expect(options[1].selected).toBeTruthy();
  expect(options[2].selected).toBeFalsy();
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

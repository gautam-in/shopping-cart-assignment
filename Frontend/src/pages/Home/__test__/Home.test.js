/* eslint-disable import/no-extraneous-dependencies */
import {BrowserRouter} from 'react-router-dom';
import {screen, cleanup} from '@testing-library/react';
import 'regenerator-runtime/runtime';
import {rest} from 'msw';
import server from '../../../mocks/server';
import {render as renderWrapper} from '../../../test-utils/wrapper';
import Carousel from '../Carousel';
import Categories from '../Categories';

afterEach(() => {
  cleanup();
});

test('handle error for carousel', async () => {
  server.resetHandlers(
    rest.get(`${process.env.Base_URL}/banners`, (req, res, ctx) => {
      return res(ctx.status(500));
    }),
  );
  renderWrapper(<Carousel />);
  const error = await screen.findByText(/something went wrong!/i);
  expect(error).toBeInTheDocument();
});

test('handle error for carousel', async () => {
  server.resetHandlers(
    rest.get(`${process.env.Base_URL}/categories`, (req, res, ctx) => {
      return res(ctx.status(500));
    }),
  );
  renderWrapper(
    <BrowserRouter>
      <Categories />
    </BrowserRouter>,
  );
  const error = await screen.findByText(/something went wrong!/i);
  expect(error).toBeInTheDocument();
});

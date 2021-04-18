/* eslint-disable import/no-extraneous-dependencies */
import {Router} from 'react-router-dom';
import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';

const renderWithRouter = (
  ui,
  {route = '/', history = createMemoryHistory({initialEntries: [route]})},
) => {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  };
};

export default renderWithRouter;

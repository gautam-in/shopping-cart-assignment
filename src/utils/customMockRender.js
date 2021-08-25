import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import { createStore } from 'redux';
import reducer from '../redux/reducers'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux';


export const customRender = (
    ui,
    {
      route = '/',
      history = createMemoryHistory({ initialEntries: [route] }),
      initialState,
      store = createStore(reducer, initialState),
      ...options
    } = {}
  ) => ({
    ...render(
      <Provider store={store}>
        <Router history={history}>{ui}</Router>
      </Provider>,
      options
    ),
    history,
  });
  
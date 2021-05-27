import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';
import configureStore from 'redux-mock-store';
import * as reactRedux from 'react-redux';
import { Provider } from 'react-redux';
import { Link, NavLink, Route, BrowserRouter } from 'react-router-dom';

const mockStore = configureStore([]);
let store = mockStore({
  cartItem: 0,
  cartList: []
});
const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
useSelectorMock.mockReturnValue(0);
//jest.mock('react-redux', () => ({
//useSelector: jest.fn((fn) => fn())
//}));

test('should test Header component', () => {
  const tree = render(
    <Wrapper>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Wrapper>
  );
  expect(tree).toMatchSnapshot();
});

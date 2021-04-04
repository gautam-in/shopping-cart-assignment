/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import Products from '.';
import ProductItem from './ProductItem';
import CategoryItem from './CategoryItem';

import store from '../../redux/store';

function mockFunction() {
  const original = jest.requireActual('react-router');
  return {
    ...original,
    useHistory: () => ({
      push: jest.fn(),
      location: {
        pathname: '/products',
        search: '',
        hash: '',
        state: null,
        key: '5nvxpbdafa',
      },
    }),
  };
}

jest.mock('react-router', () => mockFunction());

afterEach(() => {
  jest.clearAllMocks();
});

describe('Renders Products Page', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      dispatch: jest.fn(),
    };
    wrapper = shallow(<Provider store={store()}><Products {...props} /></Provider>);
  });
  it('should render product page', () => {
    const tree = renderer.create(
      <Provider store={store()}><Products {...props} /></Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should contain product item', () => {
    expect(wrapper.contains(<ProductItem />));
  });

  it('should contain category item', () => {
    expect(wrapper.contains(<CategoryItem />));
  });
});

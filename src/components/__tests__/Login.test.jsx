/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Login from '../Login';

describe('BaseButton', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });
});

test('Login', () => {
  const component = renderer.create(
    <Login />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

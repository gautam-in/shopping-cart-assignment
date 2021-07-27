import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Signin from '../components/Signin';

configure({ adapter: new Adapter() });

describe('Signin  Entry point', function () {
  it('should have a header tag with Login', function () {
    const wrapper = shallow(<Signin />);
    expect(wrapper.find('h2').text()).toEqual('Login');
  });

  it('should have an input field with name = email', function () {
    const wrapper = shallow(<Signin />);
    expect(wrapper.find('input[name="email"]'));
  });

  it('should have an input field with name = password', function () {
    const wrapper = shallow(<Signin />);
    expect(wrapper.find('input[name="password"]'));
  });
  it('should have a button type submit', function () {
    const wrapper = shallow(<Signin />);
    expect(wrapper.find('button[type="submit"]'));
  });
});

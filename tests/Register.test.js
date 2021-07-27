import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Register from '../components/Register';

configure({ adapter: new Adapter() });

describe('Register  Entry point', function () {
  it('should have a header tag with Signup', function () {
    const wrapper = shallow(<Register />);
    expect(wrapper.find('h2').text()).toEqual('Signup');
  });

  it('should have an input field with name = email', function () {
    const wrapper = shallow(<Register />);
    expect(wrapper.find('input[name="email"]'));
  });

  it('should have an input field with name = password', function () {
    const wrapper = shallow(<Register />);
    expect(wrapper.find('input[name="password"]'));
  });
  it('should have a button type submit', function () {
    const wrapper = shallow(<Register />);
    expect(wrapper.find('button[type="submit"]'));
  });
});

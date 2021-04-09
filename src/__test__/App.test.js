import React from 'react';
import { shallow, configure } from 'enzyme';
import App from '../App';
import Product from '../components/pages/Product';
import Login from '../components/pages/Login';
import Register from '../components/pages/Register';
import Adapter from 'enzyme-adapter-react-16';
import { Route } from 'react-router-dom';

configure({ adapter: new Adapter() })
let pathMap = {};

describe('routes using array of routers', () => {

  it('should render our Snapshots correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  beforeAll(() => {
    const component = shallow(<App/>);
    pathMap = component.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.component;
        return pathMap;
      }, {});
      console.log(pathMap)
  })
  it('should show Products component for /products router', () => {

    expect(pathMap['/products']).toBe(Product);
  })
  it('should show Login component for /login router', () => {
    expect(pathMap['/login']).toBe(Login);
  })
  it('should show Register component techdomain for /register router', () => {
    expect(pathMap['/register']).toBe(Register);
  })

})
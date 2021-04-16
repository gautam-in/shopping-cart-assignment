import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Home from './home';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props) => {
  return shallow(<Home categories={props}/>);
};

const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
  };
  const categoryObj = [{
    "name": "Bakery Cakes and Dairy",
    "key": "bakery-cakes-dairy",
    "description": "The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.",
    "enabled": true,
    "order": 2,
    "imageUrl": "/static/images/category/bakery.png",
    "id": "5b6899123d1a866534f516de"
  }]
  test(" banner renders without error", () => {
    const wrapper = setup(categoryObj);
    const appComponent = findByTestAttr(wrapper, "home-component");
    expect(appComponent.length).toBe(1);
  });
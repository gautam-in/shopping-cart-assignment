import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Card from '../../home/utility/card';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props) => {
  return shallow(<Card c= {props} i="1"/>);
};

const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
  };
const categoryObj = {
    "name": "Bakery Cakes and Dairy",
    "key": "bakery-cakes-dairy",
    "description": "The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.",
    "enabled": true,
    "order": 2,
    "imageUrl": "/static/images/category/bakery.png",
    "id": "5b6899123d1a866534f516de"
  }

  test(" card renders without error", () => {
    const wrapper = setup(categoryObj);
    const appComponent = findByTestAttr(wrapper, "card-component");
    expect(appComponent.length).toBe(1);
  });

  test(" card image at the card without error", () => {
    const wrapper = setup(categoryObj);
    const appComponent = findByTestAttr(wrapper, "card-imgUrl");
    expect(appComponent.prop("src")).toEqual("/static/images/category/bakery.png")
  });

  test(" card name at the card without error", () => {
    const wrapper = setup(categoryObj);
    expect(wrapper.find('h2').text()).toEqual(categoryObj.name);
  });

  




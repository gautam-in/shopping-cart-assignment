import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Banner from './banner';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props) => {
  return shallow(<Banner key ="1" o={props} />);
};

const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
  };

const bannerObj = {
    "bannerImageUrl": "/static/images/offers/offer2.jpg",
    "bannerImageAlt": "Independence Day Deal - Rs120 off on surf",
    "isActive": true,
    "order": 2,
    "id": "5b6c38336cb7d770b7010ccd"
  }

  test(" banner renders without error", () => {
    const wrapper = setup(bannerObj);
    const appComponent = findByTestAttr(wrapper, "banner-img");
    expect(appComponent.length).toBe(1);
  });

  test("banner renders correct image ",()=>{
    const wrapper = setup(bannerObj);
    const appComponent = findByTestAttr(wrapper, "banner-img");
    expect(appComponent.prop("src")).toEqual("/static/images/offers/offer2.jpg")
  
  })
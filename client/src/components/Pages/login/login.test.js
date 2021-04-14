import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Signin from './index';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
  return shallow(<Signin {...props} />);
};

const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
  };

  test("renders without error", () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, "sign-in");
    expect(appComponent.length).toBe(1);
  });

  test("Should validate login button after input change", async()=>{
      const wrapper = setup();
      findByTestAttr(wrapper,"email").simulate('change',{target:{name:'email',value:'a@gmail.com'}});
      findByTestAttr(wrapper,"password").simulate('change',{target:{name:'password',value:'abcde3'}});
      findByTestAttr(wrapper,'submitButton').simulate('click');
      expect(wrapper).toMatchSnapshot();
  })

  test("Should validate login button after no change in input fields",async()=>{
    const wrapper = setup();
      findByTestAttr(wrapper,'submitButton').simulate('click');
      expect(wrapper).toMatchSnapshot();
  })



  
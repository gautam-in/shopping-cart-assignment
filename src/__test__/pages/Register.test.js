import React from "react";
import { shallow, configure } from 'enzyme';
import Register from "../../components/pages/Register";
import Adapter from 'enzyme-adapter-react-16';
jest.mock('../../components/RegisterComponent');

configure({ adapter: new Adapter() })

const wrapper = shallow(<Register />);
let container, containerProp, childContainer, childContainerProps;

describe("Register", () => {
  beforeEach(() => {
    container = wrapper.find("div");
    containerProp = container.props();
  });

  it('should render our Snapshots correctly', () => {
    const wrapper = shallow(<Register />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a <div>", () => {
     expect(container).toHaveLength(1);
  });

//   it("should have a <div> with properly className prop", () => {
//      expect(containerProp.className).toEqual("container");
//   });

  describe("RegisterComponent", () => {
    beforeEach(() => {
      childContainer = wrapper.find('RegisterComponent');
      childContainerProps = childContainer.props();
    });

    it("should have a <RegisterComponent>", () => {
      expect(childContainer).toHaveLength(1);
    });

    // it("should have label as prop", () => {
    //   expect(childContainerProps.label).toEqual(“I’m your father”);
    // });

    // it("should have onSubmit as prop", () => {
    //   expect(typeof childContainerProps.onSubmit).toBe(“function”);
    // });
  });
});
import React from "react";
import { shallow, configure } from 'enzyme';
import Login from "../../components/pages/Login";
import Adapter from 'enzyme-adapter-react-16';
jest.mock('../../components/LoginComponent');

configure({ adapter: new Adapter() })

const wrapper = shallow(<Login />);
let container, containerProp, childContainer, childContainerProps;

describe("Login", () => {
  beforeEach(() => {
    container = wrapper.find("div");
    containerProp = container.props();
  });

  it('should render our Snapshots correctly', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a <div>", () => {
     expect(container).toHaveLength(1);
  });

  describe("LoginComponent", () => {
    beforeEach(() => {
      childContainer = wrapper.find('LoginComponent');
      childContainerProps = childContainer.props();
    });

    it("should have a <LoginComponent>", () => {
      expect(childContainer).toHaveLength(1);
    });
  });
});
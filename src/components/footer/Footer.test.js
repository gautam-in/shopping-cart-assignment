
import React from "react";

import { shallow } from "enzyme";

import {Footer} from './../index-components';



describe("Footer component", () => {

it("should render the Footer component correctly", () => {

const component = shallow(<Footer debug />);

expect(component).toMatchSnapshot();

});

});
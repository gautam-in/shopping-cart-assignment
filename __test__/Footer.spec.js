
// import { render, screen } from '@testing-library/react';
// import {Footer} from './../index-components';
// test("Should render text on the screen", () => {
//     render(<Footer />)
//     const renderedComponent = screen.getByTestId("footer")
//     expect(renderedComponent).not.toBeEmptyDOMElement()
// })

import React from "react";

import { shallow } from "enzyme";

import {Footer} from './../src/components/index-components';



describe("Footer component", () => {

it("should render the Footer component correctly", () => {

const component = shallow(<Footer debug />);

expect(component).toMatchSnapshot();

});

});
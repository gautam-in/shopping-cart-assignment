import React from 'react';
import ReactDom from 'react-dom';
import Carousel from "../carousel/carousel";
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import * as renderer from 'react-test-renderer';

afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Carousel></Carousel>, div)
})

it("renders image correctly", () => {
    const { getByTestId } = render(<Carousel></Carousel>)
    expect(getByTestId('carousel'));

})
it("matches snapshot", () => {
    const tree = renderer.create(<Carousel></Carousel>).toJSON();
    expect(tree).toMatchSnapshot();
})

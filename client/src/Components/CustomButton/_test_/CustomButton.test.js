import React from "react";
import ReactDOM from "react-dom";
import CustomButton from "../CustomButton";

import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import { RegisterText } from "../../../Constants/ConstantText";

it("render button without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CustomButton />, div);
})

it("render button correctly with values", () => {
    const { getByTestId } = render(<CustomButton>{RegisterText}</CustomButton>);
    expect(getByTestId("button")).toHaveTextContent(RegisterText);
})



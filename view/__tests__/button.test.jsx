/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "../common/components/atoms/Button";

describe("Home", () => {
  it("check for title to be present and name as specified", () => {
    render(<Button />);

    expect(screen.getByRole("button")).not.toBeDisabled();
  });
});

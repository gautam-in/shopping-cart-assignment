/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../common/components/shared/Head";

describe("Home", () => {
  it("check for title to be present and name as specified", () => {
    render(<Header />);

    expect(global.window.document.title).toBe("Sabka Bazar");
  });
});

import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
// import { act } from "react-test-renderer";
import App from "../App.jsx";

describe("App", () => {
  test("App is mounting properly", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    screen.debug();
  });
});

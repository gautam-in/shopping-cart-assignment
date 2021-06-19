// __tests__/login.js
// again, these first two imports are something you'd normally handle in
// your testing framework configuration rather than importing them in every file.
import "@testing-library/jest-dom";
import * as React from "react";
// import API mocking utilities from Mock Service Worker.
import { rest } from "msw";
import { setupServer } from "msw/node";
// import testing utilities
import { render, fireEvent, screen } from "@testing-library/react";
import Login from "../index";

const fakeUserResponse = {
  email: "ashish.singh1@publicissapient.com",
  password: "Ashishya@11",
};
const server = setupServer(
  rest.post("/api/login", (req, res, ctx) => {
    return res(ctx.json(fakeUserResponse));
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  window.localStorage.removeItem("user");
});
afterAll(() => server.close());

test("allows the user to login successfully", async () => {
  render(<Login />);

  // fill out the form
  fireEvent.change(screen.getByLabelText(/Email/i), {
    target: { value: "ashish.singh1@publicissapient.com" },
  });
  fireEvent.change(screen.getByLabelText(/Password/i), {
    target: { value: "Ashishya@11" },
  });

  fireEvent.click(screen.getByText(/Log In/i));

  // just like a manual tester, we'll instruct our test to wait for the alert
  // to show up before continuing with our assertions.
  const alert = await screen.findByRole("alert");

  // .toHaveTextContent() comes from jest-dom's assertions
  // otherwise you could use expect(alert.textContent).toMatch(/congrats/i)
  // but jest-dom will give you better error messages which is why it's recommended
  expect(alert).toHaveTextContent(/congrats/i);
  expect(window.localStorage.getItem("token")).toEqual(fakeUserResponse.token);
});

test("handles server exceptions", async () => {
  // mock the server error response for this test suite only.
  server.use(
    rest.post("/api/login", (req, res, ctx) => {
      return res(
        ctx.status(500),
        ctx.json({ message: "Internal server error" })
      );
    })
  );

  render(<Login />);

  // fill out the form
  fireEvent.change(screen.getByLabelText(/Email/i), {
    target: { value: "chuck" },
  });
  fireEvent.change(screen.getByLabelText(/Password/i), {
    target: { value: "norris" },
  });

  fireEvent.click(screen.getByText(/Log In/i));

  // wait for the error message
  const alert = await screen.findByRole("alert");

  expect(alert).toHaveTextContent(/internal server error/i);
  expect(window.localStorage.getItem("token")).toBeNull();
});

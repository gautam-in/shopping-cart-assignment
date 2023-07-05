// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

import { setupServer } from "msw/node";
import { handlers } from "./mocks/handlers"; // Import your mock API handlers

// Create a new instance of the server
const server = setupServer(...handlers);

// Start the server before running the tests
beforeAll(() => server.listen());

// Reset the server after each test
afterEach(() => server.resetHandlers());

// Clean up the server after running all the tests
afterAll(() => server.close());

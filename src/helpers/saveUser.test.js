/* eslint-disable no-undef */
import { signIn, signOut } from "./saveUser";

it("should save user detail in local storage", () => {
  const email = "naveen.dharni@gmail.com";
  const data = {
    email,
  };
  signIn(data);
  const b = localStorage.getItem("user");
  expect(b).toBe(email);
});

it("should save & remove user from local storage", () => {
  const email = "test@gmail.com";
  const data = {
    email,
  };
  signIn(data);
  const b = localStorage.getItem("user");
  expect(b).toBe(email);
  signOut();
  const c = localStorage.getItem("user");
  expect(c).toBe(null);
});

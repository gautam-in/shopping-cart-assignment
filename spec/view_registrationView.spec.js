const registrationView = require("../src/js/view/registrationView");
const config = require("../src/js/config");
describe("registrationView.js", function () {
  let state;
  $("body").append("<div class='main'></div>");
  describe("renderDOM", function () {
    beforeEach(async function () {
      window.location.hash = "";
      registrationView._parentElement = document.querySelector(".main");
      await registrationView.renderDOM(state);
    });
    afterEach(function () {
      $(".main").html("");
    });
    it("Renders the first name field in registration form", function () {
      expect($("#firstname")).toBeInDOM();
    });
    it("Renders the last name field in registration form", function () {
      expect($("#lastname")).toBeInDOM();
    });
    it("Renders the email name field in registration form", function () {
      expect($("#email")).toBeInDOM();
    });
    it("Renders the password name field in registration form", function () {
      expect($("#password")).toBeInDOM();
    });
    it("Renders the first name field in registration form", function () {
      expect($("#confirm-password")).toBeInDOM();
    });
  });

  describe("addRegistrationHandler", function () {
    beforeEach(async function () {
      window.location.hash = "";
      registrationView._parentElement = document.querySelector(".main");
      await registrationView.renderDOM(state);
      registrationView._password = document.querySelector("#password");
      registrationView._confirmPassword =
        document.querySelector("#confirm-password");
    });
    afterEach(function () {
      $(".main").html("");
    });
    it("Throws validation error when an invalid password is entered", async function () {
      $("#password")[0].value = "a";
      registrationView._validateUserDetails("password");
      expect($("#password")[0].validity.valid).toBe(false);
      expect($("#password")[0].validationMessage).toBe(
        config.MESSAGECATALOG.INVALID_PASSWORD
      );
    });
    it("Accepts passwored when valid password is entered", async function () {
      $("#password")[0].value = "Naeasdf2";
      registrationView._validateUserDetails("password");
      expect($("#password")[0].validity.valid).toBe(true);
      expect($("#password")[0].validationMessage).toBe("");
    });

    it("Throws validation error when confirm password is not same as password", async function () {
      $("#password")[0].value = "Naeasdf2";
      $("#confirm-password")[0].value = "asf";
      registrationView._validateUserDetails("confirm-password");
      expect($("#confirm-password")[0].validity.valid).toBe(false);
      expect($("#confirm-password")[0].validationMessage).toBe(
        config.MESSAGECATALOG.INVALID_CNF_PASSWORD
      );
    });
    it("Throws validation error when confirm password is not same as password", async function () {
      $("#password")[0].value = "Naeasdf2";
      $("#confirm-password")[0].value = "Naeasdf2";
      registrationView._validateUserDetails("confirm-password");
      expect($("#confirm-password")[0].validity.valid).toBe(true);
    });
  });
});

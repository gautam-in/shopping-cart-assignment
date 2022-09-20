let signIn = function (ctrl) {
  this.controller = ctrl;
  this.init();
};
signIn.prototype = {
  init: function () {
    this.singInContainer = dom.createEl(
      "div",
      this.controller.contentcontainer,
      { className: "-flex -sign-in -left-to-right" }
    );
    this.drawSignInForm();
  },
  drawSignInForm: function () {
    let _left_container = dom.createEl("div", this.singInContainer, {
      className: "-flex-column -resize -flex -top-to-bottom -color-black",
    });
    let _heading = dom.createEl("h1", _left_container, {
      innerHTML: "Login",
      className: "-flex-row",
    });
    let _headline = dom.createEl("div", _left_container, {
      innerHTML: "Get access to your Orders, Wishlist and Recommendations",
      className: "-flex-row",
    });
    let _right_container = dom.createEl("div", this.singInContainer, {
      className: "-flex-column -resize",
    });
    let _form = dom.createForm({
      formclass: "-sign-in-form",
      fields: [
        {
          type: "email",
          label: "Email",
          required: true,
        },
        {
          type: "password",
          label: "Password",
          required: true,
        },
      ],
      buttonlabel: "Login",
    });
    _right_container.appendChild(_form);
  },
};

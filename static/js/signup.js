let signUp = function (ctrl) {
  this.controller = ctrl;
  this.init();
};
signUp.prototype = {
  init: function () {
    this.singUpContainer = dom.createEl(
      "div",
      this.controller.contentcontainer,
      {
        className: "-flex -sign-up -left-to-right",
      }
    );
    this.drawSignUpForm();
  },
  drawSignUpForm: function () {
    let _left_container = dom.createEl("div", this.singUpContainer, {
      className: "-flex-column -resize -flex -top-to-bottom -color-black",
    });
    let _heading = dom.createEl("h1", _left_container, {
      innerHTML: "Signup",
      className: "-flex-row",
    });
    let _headline = dom.createEl("div", _left_container, {
      innerHTML: "We do not share your personal details with anyone",
      className: "-flex-row",
    });
    let _right_container = dom.createEl("div", this.singUpContainer, {
      className: "-flex-column -resize",
    });
    let _form = dom.createForm({
      formclass: "-sign-up-form",
      fields: [
        {
          type: "text",
          label: "First Name",
          required: true,
        },
        {
          type: "text",
          label: "Last Name",
          required: true,
        },
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
        {
          type: "password",
          label: "Confirm Password",
          required: true,
        },
      ],
      buttonlabel: "Singup",
    });
    _right_container.appendChild(_form);
  },
};

import "./button.scss";

const Button = {
  render: ({ id = "", type = "button", label = "button", className = "" }) => {
    return ` <button id='${id}' class="button-wrapper ${className}" tabindex=0 type='${type}'>${label}</button>`;
  },
};

export default Button;

import "./button.scss";

const Button = {
  render: ({
    id = "",
    type = "button",
    label = "button",
    className = "",
    dataAtt = "",
  }) => {
    return ` <button id='${id}' class="button-wrapper ${className}" data-label='${dataAtt}' tabindex=0 type='${type}' >${label}</button>`;
  },
};

export default Button;

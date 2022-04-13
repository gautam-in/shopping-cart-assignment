import './InputText.scss';

const floatingInput = (fieldData, parentElement) => {
  const floatingElement = document.createElement('div');
  floatingElement.setAttribute('class', 'floating__form');

  const input = document.createElement('input');
  input.setAttribute('class', 'floating__input');
  input.setAttribute('type', fieldData.type);
  input.setAttribute('required', fieldData.isRequired);
  input.setAttribute('placeholder', ' ');

  const label = document.createElement('span');
  label.setAttribute('class', 'input__label');
  label.innerHTML = fieldData.label;

  floatingElement.append(input);
  floatingElement.append(label);

  parentElement.append(floatingElement);
};

export default floatingInput;

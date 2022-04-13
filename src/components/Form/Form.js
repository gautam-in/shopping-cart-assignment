import floatingInput from '../InputText/InputText';
import './Form.scss';

export default function Loadform(formData) {
  let container = document.createElement('section');
  container.setAttribute('class', 'd-flex form-container');

  let form = document.createElement('form');
  form.setAttribute('class', 'd-flex form');

  let rightSection = document.createElement('div');
  rightSection.setAttribute('class', 'right__section');

  let title = document.createElement('h1');
  title.innerHTML = formData.title;

  let description = document.createElement('p');
  description.setAttribute('class', 'right__description');
  description.innerHTML = formData.description;

  rightSection.append(title, description);

  let leftSection = document.createElement('div');
  leftSection.setAttribute('class', 'left__section');

  for (const field of formData.formFields) {
    floatingInput(field, leftSection);
  }

  let button = document.createElement('button');
  button.setAttribute('class', 'form__button');
  button.innerHTML = formData.button;

  leftSection.append(button);

  form.append(rightSection, leftSection);

  container.append(form);

  const main = document.querySelector('#root');
  main.setAttribute('class', 'container');
  main.append(container);
}

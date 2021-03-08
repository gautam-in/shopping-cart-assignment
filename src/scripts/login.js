import {
  renderCartQuantity, openCart, closeCart,
} from './cart';
import Validator from '../helpers/validations';

let validator = null;

document.addEventListener('DOMContentLoaded', () => {
  renderCartQuantity();
  validator = new Validator();

  const cartButton = document.querySelector('.cart-button');
  cartButton.addEventListener('click', openCart);

  const cartClose = document.querySelector('.close-cart');
  cartClose.addEventListener('click', closeCart);

  const shoppingButton = document.querySelector('.shopping-button');
  shoppingButton.addEventListener('click', closeCart);

  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let emailValid = false;
    let passwordValid = false;
    const { email } = e.target.elements;
    const emailError = e.target.querySelector('#email-error');
    if (validator.validateEmail(email.value)) {
      emailError.textContent = '';
      email.setAttribute('aria-invalid', 'false');
      emailValid = true;
    } else {
      emailError.textContent = 'Please enter a valid email id';
      email.setAttribute('aria-invalid', 'true');
      emailValid = false;
    }
    const { password } = e.target.elements;
    const passwordError = e.target.querySelector('#password-error');
    if (validator.validatePassword(password.value)) {
      passwordError.innerHTML = '';
      password.setAttribute('aria-invalid', 'false');
      passwordValid = true;
    } else {
      passwordError.innerHTML = `Password should follow following criteria:
            <ul>
                <li>Minimum length 6 characters</li>
                <li>Must have a number and alphabet</li>
                <li>Cannot have spaces</li>
            </ul>
            `;
      password.setAttribute('aria-invalid', 'true');
      passwordValid = false;
    }
    if (emailValid && passwordValid) {
      window.location = 'index.html';
    }
  });
});

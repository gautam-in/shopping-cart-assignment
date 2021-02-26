import 'regenerator-runtime/runtime';
import {
    getCartCount, setCartCount, renderCartQuantity, setCartItems,
    addItemCartSession, openCart, closeCart
} from './cart';
import { Validator } from '../helpers/validations';

let validator = null;

document.addEventListener("DOMContentLoaded", (event) => {
    renderCartQuantity();
    validator = new Validator();

    const cartButton = document.querySelector('.cart-button');
    cartButton.addEventListener('click', openCart);

    const cartClose = document.querySelector('.close-cart');
    cartClose.addEventListener('click', closeCart);

    const shoppingButton = document.querySelector('.shopping-button');
    shoppingButton.addEventListener('click', closeCart);

    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let emailValid = false;
        let passwordValid = false;
        let confirmPasswordValid = false;
        const email = e.target.elements.email;
        const emailError = e.target.querySelector('#email-error');
        if (validator.validateEmail(email.value)) {
            emailError.textContent = '';
            email.setAttribute("aria-invalid", "false");
            emailValid = true;
        }
        else {
            emailError.textContent = 'Please enter a valid email id';
            email.setAttribute("aria-invalid", "true");
            emailValid = false;
        }
        const password = e.target.elements.password;
        const passwordError = e.target.querySelector('#password-error');
        if (validator.validatePassword(password.value)) {
            passwordError.innerHTML = '';
            password.setAttribute("aria-invalid", "false");
            passwordValid = true;
        }
        else {
            passwordError.innerHTML =
                `Password should follow following criteria:
            <ul>
                <li>Minimum length 6 characters</li>
                <li>Must have a number and alphabet</li>
                <li>Cannot have spaces</li>
            </ul>
            `;
            password.setAttribute("aria-invalid", "true");
            passwordValid = false;
        }
        const confirmPassword = e.target.elements.confirmPassword;
        const confirmPasswordError = e.target.querySelector('#confirm-password-error');
        if (password.value === confirmPassword.value) {
            confirmPasswordError.textContent = '';
            confirmPassword.setAttribute("aria-invalid", "false");
            confirmPasswordValid = true;
        }
        else {
            confirmPasswordError.textContent = 'Passwords do not match';
            confirmPassword.setAttribute("aria-invalid", "true");
            confirmPasswordValid = false;
        }
        if (emailValid && passwordValid && confirmPasswordValid) {
            window.location = 'index.html';
        }
    });
});

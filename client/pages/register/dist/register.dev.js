"use strict";

function registerUser(event) {
  event.preventDefault();
  var firstName = document.getElementById('firstname').value;
  var lastName = document.getElementById('lastname').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('cfmPassword').value;

  if (firstName && lastName && email && password && confirmPassword) {
    var errorBlock = document.getElementById('error__block');
    if (password < 6) errorBlock.innerText = 'Password should be more than 6 letters';else if (password.search(/[a-z]/i) < 0) errorBlock.innerText = 'Password should contain at least one letter';else if (password.search(/[0-9]/) < 0) errorBlock.innerText = 'Password should contain at least one digit';else if (password !== confirmPassword) errorBlock.innerText = 'Password and Confirm Password should match';else {
      if (password === confirmPassword) {
        localStorage.setItem('auth', true);
        window.location.href = "../products/products.html?";
      }
    }
    errorBlock.style.display = 'block';
  } else {
    var _errorBlock = document.getElementById('error__block');

    _errorBlock.innerText = 'All fields are required';
    _errorBlock.style.display = 'block';
  }
}
//# sourceMappingURL=register.dev.js.map

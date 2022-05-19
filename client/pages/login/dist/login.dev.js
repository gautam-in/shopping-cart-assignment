"use strict";

function loginUser(event) {
  event.preventDefault();
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if (email && password) {
    var errorBlock = document.getElementById('error__block');
    if (password < 6) errorBlock.innerText = 'Password should be more than 6 letters';else if (password.search(/[a-z]/i) < 0) errorBlock.innerText = 'Password should contain at least one letter';else if (password.search(/[0-9]/) < 0) errorBlock.innerText = 'Password should contain at least one digit';else {
      localStorage.setItem('auth', true);
      window.location.href = "../products/products.html?";
    }
    errorBlock.style.display = 'block';
  } else {
    var _errorBlock = document.getElementById('error__block');

    _errorBlock.innerText = 'All fields are required';
    _errorBlock.style.display = 'block';
  }
}
//# sourceMappingURL=login.dev.js.map
